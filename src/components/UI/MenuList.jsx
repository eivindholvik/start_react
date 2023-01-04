import React from "react";

function MenuList(props){
  let temp = props.menuList.map((ele) => {
    return <li>{ele}</li>;
  });

  console.log(temp);

  return <>{temp}</>;
}

export default MenuList;