import localFont from "next/font/local";

export const firaGo = localFont({
  src: [
    {
      path: "./fonts/FiraGO-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/FiraGO-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/FiraGO-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./fonts/FiraGO-Bold.woff",
      weight: "700",
    },
  ],
});
