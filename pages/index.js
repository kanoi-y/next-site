import Link from "next/link";
import Styles from "../styles/home.module.css";
import Content from "./components/content";
import Header from "./components/header";
import useSWR from "swr";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  let title = "ともすた";
  const { data, error } = useSWR("/api/message", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Content>
      <Header title={title}></Header>
      <h1 style={{ backgroundColor: `red` }} className={Styles.mytitle}>
        ともすた
      </h1>
      <p>{data.message}</p>
      <div>
        <Link href={`/about`} passHref>
          <button>About</button>
        </Link>
      </div>
      <style jsx>{`
  h1 {
    color: #fff;
  }}
`}</style>
    </Content>
  );
}
