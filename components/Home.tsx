import Head from "next/head";
import { Container } from "../styles/Home";
import { Header, Recognition } from "./styles";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flexbox">
        <Header>Labify</Header>

        <div className="box box-b light">
          <img
            height="75px"
            width="75px"
            src="https://i.ibb.co/p18QTGf/4074391.jpg"
          ></img>
          <p>A</p>
        </div>
        <div className="box box-c dark">
          <p>B</p>
        </div>

        <div className="box box-e dark">
          <p>D</p>
        </div>

        <div className="box box-c dark">
          <p>B</p>
        </div>

        <div className="box box-e dark">
          <p>D</p>
        </div>
        <div className="box box-f light">
          <p>E</p>
        </div>
        <div className="box box-f light">
          <p>E</p>
        </div>
        <div className="box box-e dark">
          <p>D</p>
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
        </Recognition>
      </footer>
    </Container>
  );
};

export default Home;
