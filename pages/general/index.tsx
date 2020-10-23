import Home from "../../components/Home";
import Link from "next/link";

const General = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "32px",
      }}
      className="general-bck"
    >
      {/* <header>
        <button
          style={{
            border: "none",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        >
          Back to dashboard
        </button>
      </header> */}
      <Link href="/">
        <img
          height="50px"
          src="https://www.flaticon.com/svg/static/icons/svg/545/545680.svg"
          style={{
            marginRight: "88%",
            marginTop: "-20px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        ></img>
      </Link>
      <div
        style={{
          backgroundColor: "white",
          height: "700px",
          width: "90%",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "15px",
          padding: "15px",
        }}
        className="general-box"
      >
        <h1>General</h1>
        <p>
          <strong>Goal:</strong> To determine if the height impacts the final
          velocity of an object in free fall.{" "}
        </p>
        <p>
          <strong>Independent Variable:</strong> Height of the Object (m)
          Dependent Variable: Final Velocity (m/s)
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Equation:</strong> a = (Vf - Vi) / t
        </p>
        <img
          height="200px"
          src="https://upload.wikimedia.org/wikipedia/en/1/1e/Baseball_%28crop%29.jpg"
        ></img>
        <img
          height="200px"
          src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
        ></img>
        <div style={{ display: "flex" }}>
          <div
            style={{
              textAlign: "justify",
              marginLeft: "50px",
              maxWidth: "45%",
            }}
          >
            <h2>Story</h2>
            <p>
              I've always loved building things; in fact, it's my primarily goal
              in life. Specifically, I thrive best when I'm presented with the
              challenge of building tools that actually help others and serve
              them with true value. So when I was presented with the opportunity
              to do so for this lab experiment (along with Mark Music), I was
              all for it. Not only that, but going above and beyond to create
              comething that could potentially help others understand a certain
              subject (in this case gravitational physics) in a better way is
              something I will never say no to.
            </p>
          </div>

          <div
            style={{
              textAlign: "justify",
              marginLeft: "50px",
              maxWidth: "45%",
            }}
          >
            <h2>Methodology</h2>
            <p>
              Besides executing the experiment to its completeness, Mark and I
              decided to take it one step further. Our entire project comprises
              this very web app, a beautifully made video, and the required lab
              report as well. More specifically, the tech stack utilized for
              this app includes the following:{" "}
              <div>
                <ul>
                  <li>TypeScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>HTML and CSS principles</li>
                </ul>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
