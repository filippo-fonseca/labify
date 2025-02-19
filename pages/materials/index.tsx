import Link from "next/link";

const Method = () => {
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
        <h1>Materials</h1>
        <p>
          <p>1. Falling object (baseball)</p>
          <p>2. Measuring tape or tape measurex</p>
          <p>3. Stopwatch/timer</p>
          <p>4. Pencil</p>
          Falling object (baseball), Measuring tape or tape measure,
          stopwatch/timer, pencil
        </p>
      </div>
    </div>
  );
};

export default Method;
