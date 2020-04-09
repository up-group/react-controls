import { useRef } from "react";

export default function useHoverIntent(onHover, onHoverOut, defer) {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  return {
    onMouseEnter: () => {
      clearTimeout(timeout.current);

      if (defer) {
        timeout.current = setTimeout(onHover, 200);
      } else {
        onHover();
      }
    },
    onMouseLeave: () => {
      clearTimeout(timeout.current);
      onHoverOut();
    }
  };
}
