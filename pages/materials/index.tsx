import Home from "../../components/Home";
import Link from "next/link";

const Materials = () => {
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
        {/* <h3 style={{ marginLeft: "32px", maxWidth: "95%", fontSize: "32px" }}>
          An object in perfect free fall is accelerating at a constant rate of
          9.8 m/s2 towards the ground (Freefall, 2020). If the height of the
          object is altered, but the acceleration stays the same, according to
          a=ΔV/t, the final velocity should increase at equal increments. This
          would be shown by an R2 value of 1 on a scatter graph.
        </h3> */}
        <div style={{ marginLeft: "5%", maxWidth: "90%" }}>
          <p>
            1. Choose an object that you will drop (tennis ball, pencil/pen,
            etc).
          </p>
          <p>
            2. On a wall measure 5 different height increments and mark them
            with a pencil on the wall.{" "}
            <ul style={{ listStyle: "none" }}>
              <li>a. 1m</li>
              <li>b. 1.3m</li>
              <li>c. 1.5m</li>
              <li>d. 1.8m</li>
              <li>e. 2m</li>
            </ul>
          </p>
          <p>
            3. Create a data table that includes the following information:
            Height, Time (5 trials), Average Time, Acceleration, Initial
            Velocity, Final Velocity (this is what you are solving for). Make
            sure your table has all the units and labels required.
          </p>
          <p>
            4. Hold the object up to the 1m increment and drop the object 5
            times. Each time you will time how long it takes the object to hit
            the ground using a stopwatch. Record the time in your data table.
          </p>
          <p>
            5. Once you have completed all five trials, move the object up to
            the next increment (1.3m) and repeat. Do this until you have tested
            each increment 5 times.
          </p>
          <p>
            6. Calculate the average time of free fall for each height and
            record it in your data table.
          </p>
          <p>
            7. Assume the acceleration of gravity for your falling object
            (9.8m/s2)
          </p>
          <p>
            8. Figure out what your Velocity initial is for your object and
            record it in the table (should be the same)
          </p>
          <p>
            9. Use your raw data to calculate for your Velocity Final and record
            in your data table.
          </p>
          <p>
            10. Create a scatter graph of Height (IV) versus Final Velocity
            (DV). Add a trendline, all proper labels and R2 value.
          </p>
          <p>11. Complete the Criteria C Section below.</p>
        </div>
      </div>
    </div>
  );
};

export default Materials;
