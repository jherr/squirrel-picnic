import Head from "next/head";
import Axios from "axios";
import { useQuery } from "react-query";

const getDays = async () => {
  const { data } = await Axios.get("/api/days");
  return data;
};

const Home = () => {
  const { data } = useQuery("user", getDays);
  return (
    <div className="container">
      <Head>
        <title>Squirrel Picnic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>It has been</div>
        {data && (
          <div className="count">
            <span>{data.days}</span>
          </div>
        )}
        <div>Days since the last time you made a squirrel picnic bench</div>
      </main>

      <style jsx>{`
        .count > span {
          padding: 30pt;
          border: 5px solid black;
          border-radius: 0.1em;
          font-size: 160pt;
          font-weight: bold;
        }
        main {
          font-family: arial, verdana, sans-serif;
          font-size: 80pt;
          text-align: center;
        }
        main > div {
          margin-bottom: 1em;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
