import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // Payload reads these committed captures from disk when serving upload URLs.
  outputFileTracingIncludes: {
    "/api/**/*": ["./media/**/*"],
  },
};

export default withPayload(nextConfig);
