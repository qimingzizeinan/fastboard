import type { FastboardApp } from "@zhltc/fastboard-core";
import type { Theme, Language } from "../../typings";
import { SvelteComponentTyped } from "svelte";

export declare type ToolbarItem = {
  type:
    | "clicker"
    | "eraser"
    | "pencil"
    | "text"
    | "shape"
    | "image"
    | "audio"
    | "video"
    | "file"
    | "selector"
    | "shapes"
    | "apps"
    | "custom"
    | "courseware"
    | "share"
    | "freedom"
    | "clear"
    | "desktop-change";
  content?: string;
  onClick?: (...data: any[]) => void;
};

export declare interface ToolbarConfig {
  list?: ToolbarItem[];
  apps?: {
    enable?: boolean;
  };
  eraser?: {
    /**
     * - delete: remove shapes under eraser
     * - pencil: wipe out part of strokes under eraser, like a real eraser
     * - both (default): will show a panel to choose different behavior
     */
    behavior?: "delete" | "pencil" | "both";
  };
}

export declare interface ToolbarProps {
  app?: FastboardApp | null;
  theme?: Theme;
  language?: Language;
  config?: ToolbarConfig;
  platform?: "web" | "electron";
}

declare class Toolbar extends SvelteComponentTyped<ToolbarProps> {}
export default Toolbar;
