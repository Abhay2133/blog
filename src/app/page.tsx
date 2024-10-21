// import Image from "next/image";

import Articles from "@/app/ui/articles";
import articles from "../data/articles";

export default function Home() {
  return (
    <>
      <nav className="flex h-[50px] items-center  px-5">
        <h1 className="text-xl ">BLOG</h1>
      </nav>
      <main className="">
        <Articles articles={articles} />
      </main>
      <footer className="flex justify-between px-5 py-2">
        <div>&copy; {new Date().getFullYear()} All rights are reserved.</div>
        <div className="space-x-4">
          {footerLinks.map(
            (item: { label: string; href: string }, i: number) => (
              <a key={i} href={item.href}>{item.label}</a>
            )
          )}
        </div>
      </footer>
    </>
  );
}



const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Categories", href: "/categories" },
  { label: "Contact", href: "/contact" },
  { label: "Archive", href: "/archive" },
  { label: "Subscribe", href: "/subscribe" },
  { label: "Login", href: "/login" },
];

const footerLinks = [
  { label: "About", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Me", href: "#" },
  { label: "About", href: "#" },
];
