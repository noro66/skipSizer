

// Skip descriptions by yard size
export const SKIP_DESCRIPTIONS = {
  4: "Perfect for small garden cleanups and minor home projects",
  6: "Ideal for bathroom renovations and small construction work",
  8: "Great for kitchen renovations and medium garden waste",
  10: "Perfect for large home renovations and office clearouts",
  12: "Ideal for major construction and large garden projects",
  14: "Great for commercial projects and house clearances",
  16: "Perfect for major renovations and construction sites",
  20: "Industrial grade for large commercial projects",
  40: "Maximum capacity for major construction work"
};

// Bin bag equivalents for each skip size
export const CAPACITY_EQUIVALENTS = {
  4: "≈ 40 bin bags",
  6: "≈ 60 bin bags",
  8: "≈ 80 bin bags",
  10: "≈ 100 bin bags",
  12: "≈ 120 bin bags",
  14: "≈ 140 bin bags",
  16: "≈ 160 bin bags",
  20: "≈ 200 bin bags",
  40: "≈ 400 bin bags"
};

// VAT calculation helper
export const calculateTotalPrice = (priceBeforeVat, vat) => {
  return Math.round(priceBeforeVat * (1 + vat / 100));
};