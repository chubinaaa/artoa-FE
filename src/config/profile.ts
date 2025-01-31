import { Icons } from "@/components/icons";

export const profileConfig = {
  sidebarItems: [
    {
      label: "My Profile",
      href: "/profile",
      icon: Icons.avatarIcon,
    },
    {
      label: "Reviews & Rating",
      href: "/profile/reviews",
      icon: Icons.star,
    },
    {
      label: "Order History",
      href: "/profile/orders",
      icon: Icons.history,
    },
    {
      label: "Settings",
      href: "/profile/settings",
      icon: Icons.settings,
    },
  ],
};
