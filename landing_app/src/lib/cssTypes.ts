// Create a single utility file for extended CSS properties
// src/lib/cssTypes.ts
export interface ExtendedCSSProperties extends React.CSSProperties {
  WebkitMaskImage?: string;
  MozMaskImage?: string;
  msMaskImage?: string;
  OmaskImage?: string;
  // Add other vendor prefixes as needed
}
