import Image from "next/image";
import localFont from "next/font/local";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function Home() {
  const [count, setCount] = useState(0);
const [isShow, setIsShow] = useState(true);
const [text,setText] = useState("");
  // const handleClick = (e) =>{
  //   setCount((count)=> count + 1);
  //   setCount((count)=> count + 1);
  // };

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);
const handleChange = (e)=>{
  if(e.target.value.length > 5){
    alert("5文字以内で入力してください");
  }
  setText(e.target.value);
};

  const handleDesplay = useCallback(()=>{
    setIsShow((isShow)=> !isShow);
  },[]);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  // const handleClick= useCallback((e)=> {
  //   console.log(e.target)
  //   e.preventDefault();
  // },[]);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <Main page="index" />
      {isShow? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDesplay}>{isShow? "非表示":"表示"}</button>
      {/* <Link href="/about"
        onClick={handleClick}>
        ボタン
      </Link> */}
     <input type="text" onChange={handleChange} value={text}/>
      <Footer />
    </div>
  );
}
