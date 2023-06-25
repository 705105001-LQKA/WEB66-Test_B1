import { useState, useEffect } from "react";

const Header = (props) => {
  // const a = "";
  // useEffect(() => {
  //   props.value.map((item, i) =>
  //     item.checked == true ? (a = i - 1) : (a = a)
  //   );
  // });
  return (
    <div className="header">You have {props.value.length} tasks left!</div>
  );
};

export default Header;
