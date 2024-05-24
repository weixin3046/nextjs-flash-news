import { NAV_ITEMS } from "@/app/constant";
import Image from "next/image";
import LogoPng from "@/public/logo.png";
import NavItem from "./NavItem";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={LogoPng} alt="logo" className="w-40" />
      </Link>
      <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) => (
          <NavItem {...navItem} key={navItem.category} />
        ))}
      </nav>
    </div>
  );
}
