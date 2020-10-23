import Home from "../../components/Home";
import Link from "next/link";

const Results = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "32px",
      }}
      className="materials-bck"
    >
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
        <h1>Results</h1>
        {/* <h3 style={{ marginLeft: "32px", maxWidth: "95%", fontSize: "32px" }}>
          An object in perfect free fall is accelerating at a constant rate of
          9.8 m/s2 towards the ground (Freefall, 2020). If the height of the
          object is altered, but the acceleration stays the same, according to
          a=ΔV/t, the final velocity should increase at equal increments. This
          would be shown by an R2 value of 1 on a scatter graph.
        </h3> */}
        <div style={{ marginLeft: "5%", maxWidth: "90%" }}>
          <img
            height="600px"
            src="https://i.ibb.co/qCSbyD2/Screen-Shot-2020-10-23-at-12-21-41.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Results;
