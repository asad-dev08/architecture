import { BASE_DOC_URL } from "./actionTypes";

export const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${BASE_DOC_URL}/${path}`;
};
