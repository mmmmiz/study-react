import Image from "next/image";
import localFont from "next/font/local";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";


//------------------------------------フォント読み込み
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


//------------------------------------コンポーネントここから

export default function Home() {
  const [count, setCount] = useState(0);
const [isShow, setIsShow] = useState(true);
const [text,setText] = useState("");
const [array,setArray] = useState([]);
//------------------------------------カウンター設置

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((prevcount) => prevcount + 1);
    }
  }, [count]);
  //------------------------------------inputの文字制限

  const handleChange = (e)=>{
  if(e.target.value.length > 5){
    alert("5文字以内で入力してください");
  }
  setText(e.target.value);
};
//------------------------------------カウンター表示非表示

  const handleDesplay = useCallback(()=>{
    setIsShow((previsShow)=> !previsShow);
  },[]);

//------------------------------------マウントによる背景色の出し分け

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);
//------------------------------------inputで入力した文字を配列に追加して表示

  const handleAdd= useCallback(()=>{
    setArray((prevArray)=> {
      if(prevArray.some((item)=> item === text)){
        alert("同じ要素があります");
        return prevArray;
      }
      return [...prevArray,text];
    });
  },[text]);
  // const handleClick= useCallback((e)=> {
  //   console.log(e.target)
  //   e.preventDefault();
  // },[]);
//------------------------------------表示エレメント

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <Main page="index" />
      {isShow? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDesplay}>{isShow? "非表示":"表示"}</button>
     <input type="text" onChange={handleChange} value={text}/>
     <button onClick={handleAdd}>追加</button>
     <ul>{array.map((item) =>{
      return <li key = {item}> {item}</li>
     })}</ul>
      <Footer />
    </div>
  );
}
