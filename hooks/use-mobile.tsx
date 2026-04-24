"use client";

import * as React from "react";

const MOBILE_BREAKPOINT = 1024;
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

export function useIsMobile() {
  const subscribe = React.useCallback((onStoreChange: () => void) => {
    const media = window.matchMedia(MOBILE_QUERY);
    media.addEventListener("change", onStoreChange);

    return () => {
      media.removeEventListener("change", onStoreChange);
    };
  }, []);

  const getSnapshot = React.useCallback(
    () => window.matchMedia(MOBILE_QUERY).matches,
    [],
  );
  const getServerSnapshot = React.useCallback(() => false, []);

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
