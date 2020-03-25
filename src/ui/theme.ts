export interface ITheme {
  animations: {
    easing: string;
    long: string;
    veryLong: string;
    med: string;
    short: string;
  };
  colors: {
    [k: string]: string;
  };
  breakpoints: {
    [k: string]: string;
  };
  fonts: {
    sizes: {
      [k: string]: string;
    };
    spacings: {
      [k: string]: string | number;
    };
    faces: {
      [k: string]: string;
    };
  };
}

export const BASE_SIZE = 8;

const rem = (input: number, base: number = BASE_SIZE): string => `${input / base}rem`;

export const theme: ITheme = {
  animations: {
    easing: "cubic-bezier(.06,.37,.42,.99)",
    long: "500ms",
    veryLong: "750ms",
    med: "300ms",
    short: "150ms",
  },
  colors: {
    brand: "var(--section-hero-background)",
  },
  breakpoints: {
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
    desktopLarge: "@media (min-width: 1200px)",
  },
  fonts: {
    sizes: {
      small: rem(12),
      smallDesktop: rem(16),
      medium: rem(20),
      mediumDesktop: rem(24),
      large: rem(36),
      largeDesktop: rem(42),
      huge: rem(40),
      hugeDesktop: rem(80),
    },
    spacings: {
      small: rem(26),
      medium: rem(32),
      mediumDesktop: rem(38),
    },
    faces: {
      normal: "Manrope",
      bold: "Manrope ExtraBold",
      primary: "'Manrope', Helvetica, sans-serif",
      serif: "Domine, Georgia, serif",
      secondary:
        "'JetBrains Mono', 'Roboto Mono', Monaco, Consolas, monospaced",
    },
  },
};
