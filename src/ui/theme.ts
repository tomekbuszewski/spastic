export interface ITheme {
  colors: {
    [k: string]: string;
  };
  breakpoints: {
    [k: string]: string;
  };
  fonts: {
    sizes: {
      [k: string]: number;
    };
    faces: {
      [k: string]: string;
    };
  };
}

export const BASE_SIZE = 8;

export const theme: ITheme = {
  colors: {
    brand: "var(--section-hero-background)",
  },
  breakpoints: {
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1200px)",
  },
  fonts: {
    sizes: {
      small: 1.5,
    },
    faces: {
      normal: "Manrope",
      bold: "Manrope ExtraBold",
      primary: "'Manrope', Helvetica, sans-serif",
      secondary:
        "'JetBrains Mono', 'Roboto Mono', Monaco, Consolas, monospaced",
    },
  },
};
