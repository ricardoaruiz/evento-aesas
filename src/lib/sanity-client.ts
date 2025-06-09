import { createClient } from "next-sanity";

const PRJECT_ID = process.env.SANITY_PROJECT_ID || "ejmsm84f";
const DATA_SET = process.env.SANITY_DATASET || "production";
const API_VERSION = process.env.SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId: PRJECT_ID,
  dataset: DATA_SET,
  apiVersion: API_VERSION,
  useCdn: false,
});
