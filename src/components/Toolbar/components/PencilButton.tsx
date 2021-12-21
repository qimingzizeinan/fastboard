import Tippy from "@tippyjs/react";
import React, { useCallback } from "react";
import { useContext } from "react";
import { ApplianceNames } from "white-web-sdk";

import { Icon } from "../../../icons";
import { PanelRightOffset } from "../const";
import { Icons } from "../icons";
import { ToolbarContext } from "../Toolbar";
import { Button } from "./Button";
import { ColorBox } from "./ColorBox";
import { CutLine } from "./CutLine";
import { Slider } from "./Slider";

export function PencilButton() {
  const { theme, icons, writable, setAppliance, memberState } =
    useContext(ToolbarContext);

  const changeAppliance = useCallback(() => {
    setAppliance(ApplianceNames.pencil);
  }, [setAppliance]);

  const appliance = memberState?.currentApplianceName;
  const active = appliance === ApplianceNames.pencil;
  const disabled = !writable;

  return (
    <Tippy
      content={renderPencilButtonContent()}
      theme={theme}
      placement="right-start"
      trigger="click"
      offset={PanelRightOffset}
      arrow={false}
      interactive
    >
      <Button content="Pencil" active={active} onClick={changeAppliance}>
        <Icon
          fallback={<Icons.Pencil theme={theme} active={active} />}
          src={disabled ? icons?.pencilIconDisable : icons?.pencilIcon}
          alt="[pencil]"
        />
        <span className="fastboard-toolbar-triangle" />
      </Button>
    </Tippy>
  );
}

function renderPencilButtonContent() {
  return (
    <div className="fastboard-toolbar-panel">
      <Slider />
      <CutLine />
      <ColorBox />
    </div>
  );
}
