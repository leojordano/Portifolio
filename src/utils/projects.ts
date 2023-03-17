import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import BeliveImage from "@/images/proj_belive.png";
import CatAppImage from "@/images/proj_catapp.jpg";
import DefaultImage from "@/images/proj_default.jpg";
import PokemonImage from "@/images/proj_pokemon.jpg";
import { BsWordpress } from "react-icons/bs";
import {
  SiSass,
  SiJquery,
  SiReact,
  SiTypescript,
  SiElectron,
  SiTailwindcss,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

export interface ITecnology {
  icon: IconType;
  url: string;
}

export interface IProject {
  id: number;
  name: string;
  image: StaticImageData;
  url: string;
  description: string;
  githubUrl?: string;
  features?: string[];
  tecnologies?: ITecnology[];
}

export const Projects: IProject[] = [
  {
    id: 1,
    name: "Contrutora Belive",
    image: BeliveImage,
    description:
      "Site institucional desenvolvido em wordpress utilizando sass e jquery. Primeiro projeto onde trabalhei 100% por conta própria, foi finalizado em Janeiro de 2022. O site inteiro está customizavel, é possivel alterar todos os textos, imagens e cores, trabalhei em integrações com CRMs, animações e componentes reutilizaveis. Atualmente não sou responsavel pelo projeto.",
    url: "https://construtorabelive.com.br/",
    features: [
      "Integração com CRM automatidadas",
      "Animações em todo site",
      "Performance",
      "SEO",
    ],
    tecnologies: [
      {
        icon: BsWordpress,
        url: "https://wordpress.org/",
      },
      {
        icon: SiSass,
        url: "https://sass-lang.com/",
      },
      {
        icon: SiJquery,
        url: "https://jquery.com/",
      },
    ],
  },
  {
    id: 2,
    name: "Lista de Pokemon",
    image: PokemonImage,
    description:
      "Uma lista de pokemon simples com a finalidade de estudos, integração feita com a api publica de pokemon.",
    url: "https://pokemon-list-ocob7wqec-leojordano.vercel.app/",
    githubUrl: "https://pokemon-list-psi.vercel.app/",
    features: ["Lazy-loading para as imagens", "Like persistente nos cards"],
    tecnologies: [
      {
        icon: SiReact,
        url: "https://reactjs.org/",
      },
      {
        icon: SiTypescript,
        url: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    id: 3,
    name: "OnCode",
    image: DefaultImage,
    description:
      "Projeto feito para adicionar velocidade no desenvolvimento de multiplos projetos simples.",
    url: "https://github.com/leojordano/Tray-4Win/blob/master/windows_installer/OnCode.msi",
    githubUrl: "https://github.com/leojordano/Tray-4Win",
    tecnologies: [
      {
        icon: SiElectron,
        url: "https://www.electronjs.org/docs/latest",
      },
    ],
    features: [
      "Abrir projetos pelo tray do windows",
      "Abrir repositorio github do projeto",
      "Abrir repositorio pasta",
      "Abrir repositorio terminal na pasta do projeto",
    ],
  },
  {
    id: 4,
    name: "CatApp",
    image: CatAppImage,
    description: "Projeto para praticar VueJs e TailwhindCss",
    url: "https://catapplist.netlify.app/",
    githubUrl: "https://github.com/leojordano/cat-app",
    features: ["Layout mansory", "integração com a api de gatos"],
    tecnologies: [
      {
        icon: FaVuejs,
        url: "https://br.vuejs.org/",
      },
      {
        icon: SiTailwindcss,
        url: "https://tailwindcss.com/",
      },
    ],
  },
];
