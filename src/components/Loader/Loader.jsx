import React from "react";
import { DNA } from "react-loader-spinner";

function Loader() {
  return (
    <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Loader;
