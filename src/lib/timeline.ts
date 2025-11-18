import fs from "fs/promises";
import path from "path";

export async function getTimelineFiles() {
  const timelineDir = path.join(process.cwd(), "data", "timeline");
  try {
    const files = await fs.readdir(timelineDir);
    return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(".mdx", ""));
  } catch (error) {
    console.error("Error reading timeline directory:", error);
    return [];
  }
}

export async function getTimelineMetadata(slug: string) {
  try {
    const module = await import(`@/../data/timeline/${slug}.mdx`);
    return {
      metadata: { ...module.metadata, slug },
      component: module.default,
    };
  } catch {
    return null;
  }
}

export async function getAllTimelineMetadata() {
  const slugs = await getTimelineFiles();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const result = await getTimelineMetadata(slug);
      return result?.metadata;
    })
  );
  return entries.filter(Boolean);
}