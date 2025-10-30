import {
  Home,
  TrendingUp,
  Youtube,
  Folder,
  History,
  Clock,
  Star,
  ThumbsUp,
  Music,
  Gamepad2,
  ChevronDown,
} from "lucide-react";

import img1 from "./assets/images/channel-img1.png";
import img2 from "./assets/images/channel-img2.png";
import img3 from "./assets/images/channel-img3.png";
import img4 from "./assets/images/channel-img4.png";
import img5 from "./assets/images/channel-img5.png";
import img6 from "./assets/images/channel-img6.png";

export const mainMenuItems = [
  { id: 1, name: "Home", icon: <Home />, path: "/" },
  { id: 2, name: "Trending", icon: <TrendingUp />, path: "/trending" },
  { id: 3, name: "Subscriptions", icon: <Youtube />, path: "/subscriptions" },
];

export const libraryItems = [
  { id: 4, name: "Library", icon: <Folder />, path: "/library" },
  { id: 5, name: "History", icon: <History />, path: "/history" },
  { id: 6, name: "Watch later", icon: <Clock />, path: "/watch-later" },
  { id: 7, name: "Favourites", icon: <Star />, path: "/favourites" },
  { id: 8, name: "Liked videos", icon: <ThumbsUp />, path: "/liked" },
  { id: 9, name: "Music", icon: <Music />, path: "/music" },
  { id: 10, name: "Games", icon: <Gamepad2 />, path: "/games" },
  { id: 11, name: "Show more", icon: <ChevronDown />, path: "#" },
];

export const subscriptions = [
  { id: 1, name: "Gussie Singleton", avatar: img1, path: "/gussie-singleton" },
  { id: 2, name: "Nora Francis", avatar: img2, path: "/nora-francis" },
  { id: 3, name: "Belle Briggs", avatar: img3, path: "/belle-briggs" },
  { id: 4, name: "Eunice Cortez", avatar: img4, path: "/eunice-cortez" },
  { id: 5, name: "Emma Hanson", avatar: img5, path: "/emma-hanson" },
  { id: 6, name: "Leah Berry", avatar: img6, path: "/leah-berry" },
];
