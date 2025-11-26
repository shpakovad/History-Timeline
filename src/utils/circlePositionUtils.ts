import { CIRCLE_SIZE } from "@data/constants/constants";

export const calculateCirclePositionUtils = (
  index: number,
  total: number,
  radius: number = CIRCLE_SIZE.width / 2
) => {
  const startAngle = -60;
  const angle = startAngle + (index / total) * 360;

  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return { x, y };
};
