import { NAV_ITEMS } from "./constant";
import Image from "next/image";
import LogoPng from "@/public/logo.png";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <div>
      <Image src={LogoPng} alt="logo" className="w-40" />
      <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) => (
          <NavItem {...navItem} key={navItem.category} />
        ))}
      </nav>
    </div>
  );
}
