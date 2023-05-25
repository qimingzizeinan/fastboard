import type { FastboardApp } from "@zhltc/fastboard-core";
import type { Theme, Language, GenericIcon } from "../../typings";
import { SvelteComponentTyped } from "svelte";

export declare interface PageControlProps {
  app?: FastboardApp | null;
  theme?: Theme;
  language?: Language;
  icons?: GenericIcon<"prev" | "next" | "add">;
}

declare class PageControl extends SvelteComponentTyped<PageControlProps> {}
export default PageControl;
