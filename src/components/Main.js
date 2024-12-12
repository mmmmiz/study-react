import {Links} from "../components/Links";
import {Hedline} from "../components/Headline";

export function Main(props) {
  return (
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hedline  page={props.page}
        // onClick={()=>alert('クリックされました！')}
        >
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          src/pages/{props.page}.js
        </code>
        </Hedline>
        <Links />
      </main>

  );
}
