import Link from "next/link";
import { Icons } from "../icons";

export function SocialIcons() {
  return (
    <div className="flex gap-8">
      <Link
        href="https://www.facebook.com/artoa.io/"
        aria-label="Visit our Facebook page"
      >
        <Icons.facebook />
      </Link>
      <Link
        href="https://www.instagram.com/"
        aria-label="Visit our Instagram page"
      >
        <Icons.instagram />
      </Link>
      <Link
        href="https://www.youtube.com/"
        aria-label="Visit our YouTube channel"
      >
        <Icons.youtube />
      </Link>
      <Link
        href="https://www.pinterest.com/"
        aria-label="Visit our Pinterest page"
      >
        <Icons.pinterest />
      </Link>
    </div>
  );
}
