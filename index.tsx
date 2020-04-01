import * as React from "react";
import { createPortal } from "react-dom";
import { tack } from "tackjs";

export function Pin({
  pinned,
  to,
  at,
  deps = [],
  style = {},
  children
}: {
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
  deps?: any[];
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  children: React.ReactNode | React.ReactNode[];
}) {
  const pin = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (pin.current && to.current) tack(pin.current, to.current, at);
  }, [pinned, pin.current, to.current, at, ...deps]);

  return pinned
    ? createPortal(
        <div
          ref={pin}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 9999,
            ...style
          }}
        >
          {children}
        </div>,
        document.body
      )
    : null;
}
