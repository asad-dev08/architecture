import { prismaClient } from "../index.js";

const getModelFields = (model) => {
  // Get all fields from the Prisma model's schema
  const modelFields = Object.keys(prismaClient[model].fields || {});

  // Filter out non-searchable fields (you can customize this list)
  const excludeFields = [
    "id",
    "created_at",
    "updated_at",
    "deleted_at",
    "password",
  ];
  const searchableTypes = ["String", "Int", "Float", "Boolean"];

  return modelFields.filter((field) => {
    const fieldType = prismaClient[model].fields[field].type;
    return (
      !excludeFields.includes(field) && searchableTypes.includes(fieldType)
    );
  });
};

export const getPaginatedData = async ({
  model,
  page = 1,
  pageSize = 10,
  filters = [],
  sorting = [{ field: "id", order: "asc" }],
  globalSearch = "",
}) => {
  try {
    // Build where clause for Prisma
    let whereClause = {};

    // Handle filters
    if (filters && filters.length > 0) {
      const filterConditions = filters.map((filter) => {
        const { field, value, operator } = filter;

        switch (operator) {
          case "contains":
            return {
              [field]: {
                contains: value,
              },
            };
          case "equals":
            return {
              [field]: value,
            };
          case "in":
            return {
              [field]: {
                in: value,
              },
            };
          default:
            return {};
        }
      });

      whereClause = {
        AND: filterConditions,
      };
    }

    // Handle global search
    if (globalSearch) {
      const searchableFields = getModelFields(model);
      whereClause = {
        ...whereClause,
        OR: searchableFields.map((field) => ({
          [field]: {
            contains: globalSearch,
            mode: "insensitive", // Case-insensitive search if your database supports it
          },
        })),
      };
    }

    // Convert sorting array to Prisma orderBy object
    const orderBy = sorting.map((sort) => ({
      [sort.field]: sort.order.toLowerCase(),
    }));

    // Get paginated data
    const rows = await prismaClient[model].findMany({
      where: whereClause,
      skip: (parseInt(page) - 1) * parseInt(pageSize),
      take: parseInt(pageSize),
      orderBy,
    });

    // Get total count
    const total = await prismaClient[model].count({
      where: whereClause,
    });

    return {
      total: { total },
      rows,
    };
  } catch (error) {
    console.error("Pagination error:", error);
    throw error;
  }
};
