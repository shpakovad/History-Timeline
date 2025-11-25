import { useEffect, useState } from "react";

import { MOBILE_DEVICE_WIDTH } from "@data/constants/constants";

export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.outerWidth;
      setIsMobile(width <= MOBILE_DEVICE_WIDTH);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return { isMobile };
};
