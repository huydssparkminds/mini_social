import Home from "@/pages/Home/Home";
import Post from "@/pages/Post/Post";
import Profile from "@/pages/Profile/Profile";
import { GoHome, GoCopy, GoGlobe } from "react-icons/go";

export const PublicRoute = [
  {
    path: "/",
    component: Home,
    icon: GoHome,
    title: "Home",
  },
  {
    title: "Post",
    path: "/post",
    icon: GoGlobe,
    component: Post,
  },
  {
    title: "Profile",
    path: "/profile/:id",
    component: Profile,
    icon: GoCopy,
  },
];

export const NavRouter = [
  {
    title: "Home",
    path: "/",
    icon: GoHome,
  },
  {
    title: "Profile",
    path: "/profile/:id",
    icon: GoCopy,
  },
  {
    title: "Post",
    path: "/post",
    icon: GoGlobe,
  },
];
