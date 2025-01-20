import { Icons } from "@/components/icons";

export const profileConfig = {
  sidebarItems: [
    {
      label: "My Profile",
      href: "/profile",
      icon: Icons.avatarIcon,
    },
    {
      label: "Security",
      href: "/profile/security",
      icon: Icons.shieldDone,
    },
    {
      label: "Order History",
      href: "/profile/orders",
      icon: Icons.work,
    },
    {
      label: "Reviews & Rating",
      href: "/profile/reviews",
      icon: Icons.star,
    },
  ],
};
