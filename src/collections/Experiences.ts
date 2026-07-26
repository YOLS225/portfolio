import type { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  admin: {
    defaultColumns: ["title", "company", "period"],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "company", type: "text", required: true },
    { name: "period", type: "text", required: true },
    { name: "order", type: "number", defaultValue: 0 },
    {
      name: "achievements",
      type: "array",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
  ],
};
