export interface ITheme {
  colors: {
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
    base: "red",
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
