import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Média", plural: "Médias" },
  admin: { useAsTitle: "alt", defaultColumns: ["alt", "filename", "updatedAt"] },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  upload: {
    staticDir: "media",
    mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/avif"],
  },
  fields: [
    { name: "alt", label: "Texte alternatif", type: "text", required: true,
      admin: { description: "Décrivez la capture pour les lecteurs d’écran." } },
  ],
};
