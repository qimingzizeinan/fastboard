import type { ToolbarProps } from "@zhltc/fastboard-ui";

import { Toolbar as ToolbarImpl } from "@zhltc/fastboard-ui";
import { wrapReactComponent } from "../hooks";

export type { ToolbarProps };

export const Toolbar = /* @__PURE__ */ wrapReactComponent<ToolbarProps>(ToolbarImpl, "Toolbar");
