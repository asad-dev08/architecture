import { prismaClient } from "../index.js";
import { auditLog } from "../utils/audit.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { getPaginatedData } from "../utils/pagination.js";

export const getCompanies = async (req, res) => {
  const companies = await prismaClient.company.findMany({
    include: {
      CompanyAdditionalInfo: true,
    },
  });
  return HttpResponse.success("Companies fetched successfully", companies).send(
    res
  );
};

export const getCompany = async (req, res) => {
  const company = await prismaClient.company.findFirst({
    where: { id: req.params.id },
    include: {
      CompanyAdditionalInfo: true,
    },
  });
  return HttpResponse.success("Company fetched successfully", company).send(
    res
  );
};

export const createCompany = async (req, res) => {
  const {
    company_name,
    company_short_name,
    company_code,
    registration_number,
    tax_id,
    address,
    city,
    state,
    country,
    postal_code,
    phone,
    email,
    website,
    industry,
    number_of_employees,
    annual_revenue,
    description,
    is_active = false,
    additionalInfo,
  } = req.body;

  const loggedUser = req.user;

  const company = await prismaClient.company.create({
    data: {
      company_name,
      company_short_name,
      company_code,
      registration_number,
      tax_id,
      address,
      city,
      state,
      country,
      postal_code,
      phone,
      email,
      website,
      industry,
      number_of_employees: Number(number_of_employees),
      annual_revenue: Number(annual_revenue),
      description,
      is_active: is_active || false,
      CompanyAdditionalInfo: {
        create: {
          ...additionalInfo,
          created_by: loggedUser.id,
          created_ip: req.ip,
        },
      },
    },
    include: {
      CompanyAdditionalInfo: true,
    },
  });

  await auditLog(
    "companies",
    company.id,
    "CREATE",
    null,
    company,
    loggedUser.id,
    req
  );

  return HttpResponse.created("Company created successfully", company).send(
    res
  );
};

export const updateCompany = async (req, res) => {
  const {
    company_name,
    company_short_name,
    company_code,
    registration_number,
    tax_id,
    address,
    city,
    state,
    country,
    postal_code,
    phone,
    email,
    website,
    industry,
    number_of_employees,
    annual_revenue,
    description,
    is_active,
    additionalInfo,
  } = req.body;

  const { id } = req.params;
  const loggedUser = req.user;

  const existingCompany = await prismaClient.company.findFirst({
    where: { id },
    include: {
      CompanyAdditionalInfo: true,
    },
  });

  if (!existingCompany) {
    return HttpResponse.notFound("Company not found").send(res);
  }

  const company = await prismaClient.company.update({
    where: { id },
    data: {
      company_name,
      company_short_name,
      company_code,
      registration_number,
      tax_id,
      address,
      city,
      state,
      country,
      postal_code,
      phone,
      email,
      website,
      industry,
      number_of_employees: Number(number_of_employees),
      annual_revenue: Number(annual_revenue),
      description,
      is_active,
      CompanyAdditionalInfo: {
        upsert: {
          where: {
            id: existingCompany.CompanyAdditionalInfo?.[0]?.id || "0",
          },
          create: {
            ...additionalInfo,
            created_by: loggedUser.id,
            created_ip: req.ip,
          },
          update: {
            ...additionalInfo,
            updated_by: loggedUser.id,
            updated_ip: req.ip,
          },
        },
      },
    },
    include: {
      CompanyAdditionalInfo: true,
    },
  });

  await auditLog(
    "companies",
    id,
    "UPDATE",
    existingCompany,
    company,
    loggedUser.id,
    req
  );

  return HttpResponse.success("Company updated successfully", company).send(
    res
  );
};

export const deleteCompany = async (req, res) => {
  const loggedUser = req.user;
  const { id } = req.params;

  try {
    const existingCompany = await prismaClient.company.findFirst({
      where: { id },
      include: {
        CompanyAdditionalInfo: true,
      },
    });

    if (!existingCompany) {
      return HttpResponse.notFound("Company not found").send(res);
    }

    // Delete CompanyAdditionalInfo first due to foreign key constraint
    if (existingCompany.CompanyAdditionalInfo?.length > 0) {
      await prismaClient.companyAdditionalInfo.deleteMany({
        where: { company_id: id },
      });
    }

    const company = await prismaClient.company.delete({
      where: { id },
    });

    await auditLog(
      "companies",
      id,
      "DELETE",
      existingCompany,
      null,
      loggedUser.id,
      req
    );

    return HttpResponse.success("Company deleted successfully", company).send(
      res
    );
  } catch (error) {
    return HttpResponse.internalError(
      "Failed to delete company",
      error.message
    ).send(res);
  }
};

export const paginatedData = async (req, res) => {
  try {
    const data = await getPaginatedData({
      model: "company",
      ...req.body,
      include: {
        CompanyAdditionalInfo: true,
      },
    });
    return HttpResponse.success("Data fetched successfully", data).send(res);
  } catch (error) {
    return HttpResponse.internalError(
      "Failed to fetch paginated data",
      error.message
    ).send(res);
  }
};

// Optional: Add a method to get company with specific filters
export const getCompanyByFilters = async (req, res) => {
  const { filters } = req.body;

  try {
    const companies = await prismaClient.company.findMany({
      where: filters,
      include: {
        CompanyAdditionalInfo: true,
      },
    });
    return HttpResponse.success(
      "Companies fetched successfully",
      companies
    ).send(res);
  } catch (error) {
    return HttpResponse.internalError(
      "Failed to fetch companies",
      error.message
    ).send(res);
  }
};
