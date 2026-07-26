import type { CollectionConfig } from "payload";

export const Skills: CollectionConfig = {
  slug: "skills",
  admin: {
    defaultColumns: ["label", "value", "group"],
    useAsTitle: "label",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "label", type: "text", required: true },
    { name: "value", type: "number", min: 0, max: 100, required: true },
    { name: "group", type: "text" },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
