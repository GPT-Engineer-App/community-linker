import { Home, Calendar, MessageSquare, Award } from "lucide-react";
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import Reputation from "./pages/Reputation.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Events",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
    page: <Events />,
  },
  {
    title: "Chat",
    to: "/chat",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <ChatPage />,
  },
  {
    title: "Reputation",
    to: "/reputation",
    icon: <Award className="h-4 w-4" />,
    page: <Reputation />,
  },
];
