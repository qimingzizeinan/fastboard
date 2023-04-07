import type { PageControlProps } from "./components/PageControl";
import type { PlayerControlProps } from "./components/PlayerControl";
import type { RedoUndoProps } from "./components/RedoUndo";
import type { ToolbarConfig } from "./components/Toolbar";
import type { ZoomControlProps } from "./components/ZoomControl";

export interface SvelteAction<T = void> {
  (node: HTMLElement, parameters: T): void | {
    update?: (parameters: T) => void;
    destroy?: () => void;
  };
}

export type Theme = "light" | "dark";

export type Language = "en" | "zh-CN";

export type IconType = "normal" | "disable";
export type GenericIcon<K extends string, E extends string = IconType> = {
  [key in K]: { [kind in E]: string };
};

export type I18nData<T extends string> = Record<Language, Record<T, string>>;

export interface FastboardUIConfig {
  toolbar?: {
    enable?: boolean;
  } & ToolbarConfig;
  redo_undo?: {
    enable?: boolean;
    icons?: RedoUndoProps["icons"];
  };
  zoom_control?: {
    enable?: boolean;
    icons?: ZoomControlProps["icons"];
  };
  page_control?: {
    enable?: boolean;
    icons?: PageControlProps["icons"];
  };
  bottom_layout: "web" | "electron";
}

export interface ReplayFastboardUIConfig {
  player_control?: {
    enable?: boolean;
    icons?: PlayerControlProps["icons"];
  };
}
