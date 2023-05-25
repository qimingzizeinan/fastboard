import type { PageControlProps } from "@zhltc/fastboard-ui";

import { PageControl as PageControlImpl } from "@zhltc/fastboard-ui";
import { wrapReactComponent } from "../hooks";

export type { PageControlProps };

export const PageControl = /* @__PURE__ */ wrapReactComponent<PageControlProps>(
  PageControlImpl,
  "PageControl"
);
