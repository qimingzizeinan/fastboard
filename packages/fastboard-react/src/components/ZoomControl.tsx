import type { ZoomControlProps } from "@zhltc/fastboard-ui";

import { ZoomControl as ZoomControlImpl } from "@zhltc/fastboard-ui";
import { wrapReactComponent } from "../hooks";

export type { ZoomControlProps };

export const ZoomControl = /* @__PURE__ */ wrapReactComponent<ZoomControlProps>(
  ZoomControlImpl,
  "ZoomControl"
);
