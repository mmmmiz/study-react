import Image from "next/image";

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Deploy now \u2192",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Read our docs →",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Deploy now2",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Read our docs2",
  },
];
export function Links() {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      {ITEMS.map((item) => (
              <a
              key={item.description}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            <p>{item.description}</p>
          </a>
        ))}
    </div>
  );
}
