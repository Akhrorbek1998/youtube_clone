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

export const categories = [
    'All', 'Music', 'Jams', 'Now on air', 'Video games',
    'Sitcoms', 'Sketch show', 'Football', 'Recently published',
    'Viewed', 'New for you'
  ];

export const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop',
      title: "Endi dadam bo'ydoq (o'zbek kino) | Andy give it to you (Uzbek cinema)",
      channelName: 'navo.tv',
      channelAvatar: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop',
      verified: true,
      views: '12 million views',
      uploadTime: '2 years ago',
      duration: '1:26:43'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop',
      title: "Avaz Okhun - Uta emon hazillar | Avaz Oxun - O'ta yomon hazillar",
      channelName: 'YangiKulgu Official',
      channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      verified: true,
      views: '3.7 million views',
      uploadTime: '5 months ago',
      duration: '20:12'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=450&fit=crop',
      title: "🔴 France vs Argentina | The Final That Stopped Our Hearts",
      channelName: 'Cuồng Thể Thao',
      channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      verified: true,
      views: 'Viewers: 517',
      uploadTime: '',
      duration: '17:30',
      badge: 'ON AIR'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop',
      title: "FULL MATCH - Real Madrid 3-1 Barcelona | 2014/2015 El Clásico",
      channelName: 'LaLiga',
      channelAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      verified: true,
      views: '8.2 million views',
      uploadTime: '3 years ago',
      duration: '1:37:34'
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=800&h=450&fit=crop',
      title: "GIYBATCHI - Jam | Uzbek humor show",
      channelName: 'Jam',
      channelAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      verified: false,
      views: '2.1 million views',
      uploadTime: '1 month ago',
      duration: '15:22'
    },
    {
      id: 6,
      thumbnail: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=450&fit=crop',
      title: "AMAZONKA MAXLUQLARI - Documentary film",
      channelName: 'National Geographic Uzbekistan',
      channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      verified: true,
      views: '954K views',
      uploadTime: '2 weeks ago',
      duration: '15:44'
    }
  ];