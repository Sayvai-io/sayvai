import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "Pricing",
  //   path: "/pricing",
  //   newTab: false,
  // },
  {
    id: 33,
    title: "Products",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Finance And Account",
        path: "/Finance&account",
        newTab: false,
      },
      {
        id: 42,
        title: "Fashion Industry",
        path: "/Fashion_Industry",
        newTab: false,
      },
      {
        id: 46,
        title: "Legal And Compliance",
        path: "/Leagal&Compliance",
        newTab: false,
      },
      {
        id: 47,
        title: "Sales And Support",
        path: "/Sales&Support",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },

];
export default menuData;
