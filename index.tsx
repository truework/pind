import * as React from "react";
import { createPortal } from "react-dom";
import tack from "tackjs";

export default function Pin(props: {
  pinned: boolean;
  to: React.RefObject<HTMLElement>;
  at:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  children: React.ReactNode | React.ReactNode[];
}) {
  const pin = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    pin.current && tack(pin.current, props.to.current, props.at);
  }, [props.pinned, props.to.current, props.at]);

  return props.pinned
    ? createPortal(
        <div ref={pin} style={{ position: "absolute", top: 0, left: 0 }}>
          {props.children}
        </div>,
        document.body
      )
    : null;
}
