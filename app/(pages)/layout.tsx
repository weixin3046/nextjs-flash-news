import Nav from "@/app/components/Nav/Nav";
import dynamic from "next/dynamic";

const ClockNoSSR = dynamic(() => import("@/app/components/Clock/Clock"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8">
      <div className="h-12">
        <ClockNoSSR /> {/**在服务器中使用客户端组件 */}
      </div>
      <div className={`flex`}>
        <Nav />
        <div className="px-8 mt-16 w-full">{children}</div>
      </div>
    </div>
  );
}
