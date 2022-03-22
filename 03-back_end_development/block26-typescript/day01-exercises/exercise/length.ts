enum measurementUnits {
  mg = 0.001,
  cg = 0.01,
  dg = 0.1,
  g = 1,
  dag = 10,
  hg = 100,
  kg = 1000,
}

function convert (
  base_u: keyof typeof measurementUnits,
  convert_u: keyof typeof measurementUnits,
  value: number
) {
  const baseValue = value * measurementUnits[base_u];
  const convertValue = baseValue / measurementUnits[convert_u];

  return convertValue;
}

export default convert;