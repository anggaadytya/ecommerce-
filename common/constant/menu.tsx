import { FiGrid, FiShoppingBag, FiUsers } from "react-icons/fi";
import { menuType } from "../types/admin";

export const MENU_SIDEBAR: menuType[] = [
  {
    title: "Dashboard",
    link: "/admin",
    icon: <FiGrid />,
  },
  {
    title: "Products",
    link: "/admin/products",
    icon: <FiShoppingBag />,
  },
  {
    title: "Users",
    link: "/admin/users",
    icon: <FiUsers />,
  },
];
