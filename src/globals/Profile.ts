import type { GlobalConfig } from "payload";

export const Profile: GlobalConfig = {
  slug: "profile",
  access: {
    read: () => true,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "logo", type: "text", required: true },
    { name: "role", type: "text", required: true },
    { name: "intro", type: "textarea", required: true },
    { name: "email", type: "email", required: true },
    { name: "location", type: "text" },
    {
      name: "roles",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
    {
      name: "expertise",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
  ],
};
