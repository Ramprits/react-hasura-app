import React from "react";

import VerticalNav3 from "../components/vertical-navs/VerticalNav";
import Header1 from "../components/headers/Header";

export default function Index() {
  return (
    <React.Fragment>
      <VerticalNav3
        content={{
          brand: {
            text: "Dhanai fruits mart",
            image: "mui-assets/img/logo-pied-piper-white.png",
            width: "120",
          },
          link1: "Home",
          link2: "Product",
          link4: "Contact",
        }}
        bucketMain={[<Header1 content={null} />]}
      />
    </React.Fragment>
  );
}
