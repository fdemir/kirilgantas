import { NextRequest } from "next/server";

const checkCredentials = (username: string, password: string) =>
  process.env.USERNAME === username && process.env.PASSWORD === password;

export const checkBasicAuth = (req: NextRequest) => {
  const authorization = req.headers.get("authorization");
  if (!authorization) return false;

  const [scheme, credentials] = authorization.split(" ");
  if (scheme !== "Basic") return false;

  const [username, password] = atob(credentials).split(":");

  const isValid = checkCredentials(username, password);

  return isValid;
};
