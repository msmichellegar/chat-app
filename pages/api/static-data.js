import path from "path";
import { promises as fs } from "fs";

// Next.js way of setting up an API endpoint - this one reads the static JSON file
export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  res.status(200).json(fileContents);
}
