import type { RedoUndoProps } from "@zhltc/fastboard-ui";

import { RedoUndo as RedoUndoImpl } from "@zhltc/fastboard-ui";
import { wrapReactComponent } from "../hooks";

export type { RedoUndoProps };

export const RedoUndo = /* @__PURE__ */ wrapReactComponent<RedoUndoProps>(RedoUndoImpl, "RedoUndo");
