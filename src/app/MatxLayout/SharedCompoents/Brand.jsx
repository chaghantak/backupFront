import React from "react";

const Brand = ({ children }) => {
  return (
    <div className="flex items-center justify-between brand-area">
      <div className="flex items-center brand">
        <img src="/assets/images/logo2.png" alt="company-logo" style={{height:"4.5vh", width:"100%"}} />
        {/* <span className="brand__text" style={{}}>ADD</span> */}
      </div>
      {children}
    </div>
  );
};

export default Brand;
