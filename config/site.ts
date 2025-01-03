import { Session } from "next-auth";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Learn AI",
  description:
    "Build a foundation of machine learning and AI skills, and understand how to apply them in the real world..",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Courses",
      href: "/courses/python",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Admin",
      href: "/admin",
      shouldShow: (session: Session) => session?.user?.role === "admin",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },

    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    learn: "https://learn-ai.com",
  },
};
