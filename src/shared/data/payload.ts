import config from "@payload-config";
import { connection } from "next/server";
import { getPayload } from "payload";

export async function getPayloadClient() {
  await connection();

  return getPayload({ config });
}
