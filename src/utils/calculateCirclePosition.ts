export const calculateCirclePosition = (index: number, total: number, radius: number = 265) => {
  const startAngle = -60;
  const angle = startAngle + (index / total) * 360;

  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return { x, y };
};
