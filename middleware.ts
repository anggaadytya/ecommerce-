import { NextResponse } from "next/server";
import withAuth from "./common/middlewares/withAuth";

export function mainMiddleware() {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, ["admin", "auth"]);
