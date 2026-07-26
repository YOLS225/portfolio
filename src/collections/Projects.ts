import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    defaultColumns: ["title", "category", "year", "featured"],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "year", type: "text", required: true },
    { name: "category", type: "text", required: true },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "summary", type: "textarea", required: true },
    { name: "outcome", type: "textarea" },
    { name: "role", type: "text" },
    { name: "gradient", type: "text" },
    { name: "githubUrl", type: "text" },
    { name: "liveUrl", type: "text" },
    {
      name: "stack",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
    {
      name: "metrics",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },
    {
      name: "highlights",
      type: "array",
      fields: [{ name: "text", type: "textarea", required: true }],
    },
  ],
};
