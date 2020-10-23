import Head from "next/head";
import { Container } from "../styles/Home";
import { Header, Recognition, Title } from "./styles";
import Link from "next/link";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flexbox">
        <Header>Labify</Header>
        <Link href="/general">
          <div
            style={{
              backgroundColor: "#3EC4C4",
              border: "none",
              cursor: "pointer",
            }}
            className="box box-b light"
          >
            <img
              height="100px"
              width="100px"
              src="https://i.ibb.co/sVgQYfK/atom.png"
              style={{ marginTop: "32px" }}
            ></img>
            <Title style={{ fontSize: "26px", marginTop: "0px" }}>
              General
            </Title>
          </div>
        </Link>
        <div
          style={{ backgroundColor: "#AE6BEB", border: "none" }}
          className="box box-c dark"
        >
          <img
            height="100px"
            width="100px"
            src="https://i.ibb.co/NC9gQyW/flag.png"
            style={{ marginTop: "32px" }}
          ></img>
          <Title style={{ fontSize: "26px", marginTop: "0px" }}>
            Conclusion
          </Title>
        </div>
        <Link href="/hypothesis">
          <div
            style={{ backgroundColor: "#FFC643", border: "none" }}
            className="box box-e dark"
          >
            <img
              height="100px"
              width="100px"
              src="https://i.ibb.co/J5BvfQz/information.png"
              style={{ marginTop: "32px", cursor: "pointer" }}
            ></img>
            <Title style={{ fontSize: "26px", marginTop: "0px" }}>
              Hypothesis
            </Title>
          </div>
        </Link>

        <div
          style={{ backgroundColor: "#58BDFD", border: "none" }}
          className="box box-c dark"
        >
          <img
            height="100px"
            width="100px"
            src="https://i.ibb.co/hVGSKdm/clipboards.png"
            style={{ marginTop: "32px" }}
          ></img>
          <Title style={{ fontSize: "26px", marginTop: "0px" }}>More</Title>
        </div>

        <Link href="/materials">
          <div
            style={{ backgroundColor: "#797DFF", border: "none" }}
            className="box box-e dark"
          >
            <img
              height="100px"
              width="100px"
              src="https://i.ibb.co/Ks63fmZ/blur-1.png"
              style={{ marginTop: "32px", cursor: "pointer" }}
            ></img>
            <Title style={{ fontSize: "26px", marginTop: "0px" }}>
              Materials
            </Title>
          </div>
        </Link>
        <div
          style={{ backgroundColor: "#FE8F64", border: "none" }}
          className="box box-f light"
        >
          <img
            height="100px"
            width="100px"
            src="https://i.ibb.co/0tQzkbG/workflow.png"
            style={{ marginTop: "32px" }}
          ></img>
          <Title style={{ fontSize: "26px", marginTop: "0px" }}>Method</Title>
        </div>
        <div
          style={{ backgroundColor: "#FD749D", border: "none" }}
          className="box box-f light"
        >
          <img
            height="100px"
            width="100px"
            src="https://i.ibb.co/D1WYBJY/clipboard.png"
            style={{ marginTop: "32px" }}
          ></img>
          <Title style={{ fontSize: "26px", marginTop: "0px" }}>Results</Title>
        </div>
        <div
          style={{ backgroundColor: "#D579EE", border: "none" }}
          className="box box-e dark"
        >
          <img
            height="100px"
            width="100px"
            src="https://i.ibb.co/cQr3SMv/bar-chart.png"
            style={{ marginTop: "32px" }}
          ></img>
          <Title style={{ fontSize: "26px", marginTop: "0px" }}>Graph</Title>
        </div>
        <div
          style={{ backgroundColor: "#3CD0F2", border: "none" }}
          className="box box-e dark"
        >
          <img
            height="100px"
            width="100px"
            src="https://i.ibb.co/DYTcwKm/analytics.png"
            style={{ marginTop: "32px" }}
          ></img>
          <Title style={{ fontSize: "26px", marginTop: "0px" }}>Analysis</Title>
        </div>
      </div>

      <footer style={{ textAlign: "center", marginTop: "0" }}>
        <Recognition>
          Created with ❤️ by Filippo Fonseca (Software) and Mark Music (Video
          and Content)<br></br>
          Assignment: C-Lab -{" "}
          <i>
            How does height impact the final velocity of an object in free fall?
          </i>
          <br></br>
          <p>
            <a
              style={{ color: "#3854FC", textDecoration: "none" }}
              href="https://youtube.com"
              target="_blank"
            >
              Watch video
            </a>{" "}
            |{" "}
            <a
              style={{ color: "#3854FC", textDecoration: "none" }}
              href="https://github.com/filippo-fonseca/labify"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </Recognition>
      </footer>
    </Container>
  );
};

export default Home;
