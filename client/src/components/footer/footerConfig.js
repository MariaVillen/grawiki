import { Spanish, English } from "../../assets";

const footerLinkMenu = [
  {
    id: "0",
    title: "Institucional",
    links: [
      { id: "01", icon: false, text: "Quienes sómos?", link: "/aboutus" },
      { id: "02", icon: false, text: "Misión y Visión", link: "/mission" },
      { id: "03", icon: false, text: "Aviso Legal", link: "/legal" },
    ],
  },
  {
    id: "1",
    title: "Información",
    links: [
      { id: "11", icon: false, text: "Acerca de", link: "/aboutof" },
      {
        id: "12",
        icon: false,
        text: "Política de Privacidad",
        link: "/privacy",
      },
      { id: "13", icon: false, text: "Política de Cookies", link: "/cookies" },
    ],
  },
  {
    id: "2",
    title: "Ayuda",
    links: [
      { id: "21", icon: false, text: "Instrucciones de Uso", link: "/guide" },
      { id: "22", icon: false, text: "Contacto", link: "/contact" },
      { id: "23", icon: false, text: "F.A.Q.", link: "/faq" },
    ],
  },
  {
    id: "3",
    title: "Idiomas",
    links: [
      { id: "31", icon: English, text: "Inglés", link: "/en" },
      { id: "32", icon: Spanish, text: "Español", link: "/es" },
    ],
  },
];

export { footerLinkMenu };
