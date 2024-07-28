import React from "react";
import {Triangle} from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <Triangle
  visible={true}
  height="100"
  width="100"
  color="skyblue"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
};

export default Loader;
