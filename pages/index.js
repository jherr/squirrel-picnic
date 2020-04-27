import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>Squirrel Picnic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div>It has been</div>
      <div className="count">
        <span>0</span>
      </div>
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

export default Home;
