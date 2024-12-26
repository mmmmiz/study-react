// import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export function Hedline(props) {
  return (
    <>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            {props.title} by editing{" "}
            {props.children}
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        {/* <button onClick={props.onClick}>ボタン</button> */}
    </>
  );
}
