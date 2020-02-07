import { SECTIONS } from "@config/sections";

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
  };
}

export const light: IColorScheme = {
  overlay: "rgba(45, 35, 46, 0.1)",
  body: "#FDFDFD",
  text: "#4B4B4B",
  sections: {
    [SECTIONS.HERO]: {
      background: "#F1C40F",
      lead: "#2D232E",
      text: "#714701",
      highlight: "#F1A30F",
    },
    [SECTIONS.ABOUT]: {
      background: "#F4FDFF",
      lead: "#0E2F37",
      text: "#446b80",
      highlight: "#C7DEE3",
    },
    [SECTIONS.EXPERIENCE]: {
      background: "#FDFDFD",
      lead: "#353535",
      text: "#7E7E7E",
      extra: "#7E7E7E",
      highlight: "#E6E6E6",
    },
    [SECTIONS.WRITINGS]: {
      background: "#FAF7ED",
      lead: "#373326",
      text: "#938F83",
      highlight: "#E4DFD1",
    },
    [SECTIONS.CONTACT]: {
      background: "#FAEDF4",
      lead: "#71043F",
      text: "#B497A7",
      extra: "#984672",
      highlight: "#DBBECE",
    },
  },
};

export const dark: IColorScheme = {
  ...light,
  overlay: "rgba(136,98,31,0.25)",
  body: "#000",
  text: "#666",
  sections: {
    ...light.sections,
    [SECTIONS.HERO]: {
      background: "#2D232E",
      lead: "#9E8212",
      text: "#88621f",
      highlight: "#514152",
    },
    [SECTIONS.ABOUT]: {
      background: "#222c37",
      lead: "#5fa5b5",
      text: "#3f7f8c",
      highlight: "#323f4f",
    },
  },
};
