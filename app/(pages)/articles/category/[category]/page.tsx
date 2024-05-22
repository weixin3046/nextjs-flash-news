import { CATEGORIES_ITEMS } from "@/app/components/Nav/constant";
import Image from "next/image";

export default function CategoryDetailPage(p: {
  params: { category: keyof typeof CATEGORIES_ITEMS };
  searchParams: { date: string };
}) {
  const categoryItem = CATEGORIES_ITEMS[p.params.category];
  return (
    <div className="flex space-x-4">
      <Image
        src={categoryItem.src}
        alt={categoryItem.alt}
        className="w-10 h-10"
      />
      <h1 className="font-bold text-3xl capitalize">
        {p.params.category} News of {p.searchParams.date}
      </h1>
    </div>
  );
}
