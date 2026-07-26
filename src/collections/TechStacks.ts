import type { CollectionConfig } from "payload";

export const TechStacks: CollectionConfig = {
  slug: "tech-stacks",
  admin: {
    defaultColumns: ["category", "icon", "order"],
    useAsTitle: "category",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "category", type: "text", required: true },
    { name: "icon", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "order", type: "number", defaultValue: 0 },
    {
      name: "items",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
  ],
};
