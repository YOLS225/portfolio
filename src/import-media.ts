import { readdir } from "node:fs/promises";
import path from "node:path";
import { getPayload, type SanitizedConfig } from "payload";

export async function script(config: SanitizedConfig) {
  const payload = await getPayload({ config });
  const directory = path.resolve("public/projects");
  const filenames = (await readdir(directory)).filter((name) => /\.(png|jpe?g|webp|avif)$/i.test(name));
  for (const filename of filenames) {
    const existing = await payload.find({ collection: "media", where: { filename: { equals: filename } }, limit: 1 });
    if (existing.docs.length) continue;
    const alt = `Capture de ${path.parse(filename).name.replace(/_/g, " ")}`;
    await payload.create({ collection: "media", data: { alt }, filePath: path.join(directory, filename) });
    payload.logger.info(`Capture importée : ${filename}`);
  }
  await payload.destroy();
}
