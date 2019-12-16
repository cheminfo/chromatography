export function baselineCorrection(points, fromTo, kind) {
  const deltaTime = points.x[fromTo.toIndex] - points.x[fromTo.fromIndex];
  const fromHeight = points.y[fromTo.fromIndex];
  const toHeight = points.y[fromTo.toIndex];
  let baseline = 0;
  let from = 0;
  let to = 0;
  switch (kind) {
    case 'trapezoid':
      baseline = (deltaTime * (fromHeight + toHeight)) / 2;
      from = fromHeight;
      to = toHeight;
      break;
    case 'min':
      from = Math.min(fromHeight, toHeight);
      to = from;
      baseline = deltaTime * from;
      break;
    default:
      throw new Error(`Unknown baseline method "${kind}"`);
  }
  return {
    value: baseline,
    from,
    to,
  };
}
