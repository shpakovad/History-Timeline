import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { gsap } from "gsap";

interface IClickPosition {
  x: number;
  y: number;
}

interface ICircleSize {
  width: number;
  height: number;
}

interface IShowCircle {
  position: IClickPosition;
  size?: ICircleSize;
}

export const useClickCircle = () => {
  const [clickPosition, setClickPosition] = useState<IClickPosition | null>(null);
  const [circleSize, setCircleSize] = useState<ICircleSize>({ width: 40, height: 40 });

  const circleRef = useRef<HTMLDivElement>(null);

  const showClickCircle = useCallback(({ position, size }: IShowCircle) => {
    setClickPosition(position);

    if (size) {
      setCircleSize(size);
    }
    setTimeout(() => setClickPosition(null), 100);
  }, []);

  useEffect(() => {
    if (!circleRef.current || !clickPosition) return;

    gsap.fromTo(
      circleRef.current,
      { scale: 1, opacity: 1 },
      { scale: 0, opacity: 0, duration: 0.9, ease: "power2.out" }
    );
  }, [clickPosition]);
  const ClickCircleComponent = () => {
    if (!clickPosition) return null;

    const circleStyle = useMemo<React.CSSProperties>(
      () => ({
        position: "fixed",
        left: `${clickPosition.x}px`,
        top: `${clickPosition.y}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        pointerEvents: "none",
        width: `${circleSize.width}px`,
        height: `${circleSize.height}px`,
        border: "2px solid black",
        borderRadius: "50%",
      }),
      [clickPosition]
    );

    return <div ref={circleRef} className="click-circle" style={circleStyle} />;
  };

  return {
    showClickCircle,
    ClickCircleComponent,
  };
};
