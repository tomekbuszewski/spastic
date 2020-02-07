interface IColorSection {
  background: string;
  lead: string;
  text: string;
  highlight: string;
  extra?: string;
}

export interface IColorScheme {
  [index: string]: any;

  overlay: string;
  body: string;
  text: string;
  sections: {
    [k: string]: IColorSection;
  }
}

export const light: IColorScheme = {
  overlay: "rgba(45, 35, 46, 0.1)",
  body: "#FDFDFD",
  text: "#4B4B4B",
  sections: {
    hero: {
      background: "#F1C40F",
      lead: "#2D232E",
      text: "#876814",
      highlight: "#F1A30F",
    },
    blue: {
      background: "#F4FDFF",
      lead: "#0E2F37",
      text: "#53909E",
      highlight: "#C7DEE3",
    },
    white: {
      background: "#FDFDFD",
      lead: "#353535",
      text: "#7E7E7E",
      extra: "#7E7E7E",
      highlight: "#E6E6E6",
    },
    brown: {
      background: "#FAF7ED",
      lead: "#373326",
      text: "#938F83",
      highlight: "#E4DFD1",
    },
    red: {
      background: "#FAEDF4",
      lead: "#71043F",
      text: "#B497A7",
      extra: "#984672",
      highlight: "#DBBECE",
    }
  },
};

export const dark: IColorScheme = {
  ...light,
  overlay: "rgba(136,98,31,0.25)",
  body: "#000",
  text: "#666",
  sections: {
    ...light.sections,
    hero: {
      background: "#2D232E",
      lead: "#9E8212",
      text: "#88621f",
      highlight: "#514152",
    },
    blue: {
      background: "#222c37",
      lead: "#5fa5b5",
      text: "#3f7f8c",
      highlight: "#C7DEE3",
    },
  },
};
