"use client";
import { ArticleCategory } from "@/app/types/article-type";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem(p: {
  category: ArticleCategory;
  alt: string;
  src: StaticImageData;
}) {
  const pathName = usePathname();
  const isActive = `/articles/category/` + p.category === pathName;
  return (
    <Link
      href={"/articles/category/" + p.category}
      className={`flex items-center gap-2 h-12 p-3 hover:bg-slate-100 transform transition hover:scale-105 rounded-xl ${
        isActive && "bg-orange-50"
      }`}
    >
      <div className="flex  justify-center items-center  rounded-full border w-10 h-10 border-[#bbc2cc]">
        <Image src={p.src} alt={p.alt} className="w-5 h-5" />
      </div>
      <div className="capitalize font-semibold">{p.category}</div>
    </Link>
  );
}
