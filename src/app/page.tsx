import Header from "@/components/Home/Header";
import Work from "@/components/Home/Work";
import Links from "@/components/Links/Links";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-3 row-start-2 items-start ">
      <Header />
      <Work />
      <Links />
    </main>
  );
}
