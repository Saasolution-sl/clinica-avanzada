import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next internals, and files with an extension (assets).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
