import React from "react";
import Home from "../components/Home";
import Head from "next/head";

// https://drive.google.com/drive/folders/1LL-bC1ZyGm_h838Wt4NHTK9-O66OBx7T?usp=sharing
const Index = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Labify</title>
        </Head>
      </div>
      <div style={{ backgroundColor: "#EFF8F8" }}>
        <Home />
      </div>
    </div>
  );
};

export default Index;
