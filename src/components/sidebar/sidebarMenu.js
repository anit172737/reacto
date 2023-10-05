import { Home, Grid, Layers, ChevronDown } from "react-feather";

const Menu = [
  {
    url: "/home",
    icon: <Home size={20} />,
    navName: "Home",
  },
  {
    url: "/intro",
    icon: <Grid size={20} />,
    navName: "Introduction",
  },
  {
    url: "/es6",
    icon: <Grid size={20} />,
    navName: "ES6",
  },
  {
    url: "/jsx",
    icon: <Grid size={20} />,
    navName: "JSX",
  },

  // {
  // url: "/components",
  //   icon: <Grid size={20} />,
  //   navName: "Components",
  //   dropIcon: <ChevronDown size={22} />,
  //   children: [
  //     {
  //       url: "/function-component",
  //       icon: <Layers size={18} />,
  //       navName: "Function",
  //     },
  //     {
  //       url: "class-component",
  //       icon: <Layers size={18} />,
  //       navName: "Class",
  //     },
  //   ],
  // },
  {
    icon: <Grid size={20} />,
    navName: "Interview",
    dropIcon: <ChevronDown size={22} />,
    children: [
      {
        url: "html-react",
        icon: <Layers size={18} />,
        navName: "HTML",
      },
      {
        url: "css-react",
        icon: <Layers size={18} />,
        navName: "CSS",
      },
      {
        url: "/interview-javascript",
        icon: <Layers size={18} />,
        navName: "Javascript",
      },
      {
        url: "interview-react",
        icon: <Layers size={18} />,
        navName: "React",
      },
    ],
  },
];

export default Menu;
