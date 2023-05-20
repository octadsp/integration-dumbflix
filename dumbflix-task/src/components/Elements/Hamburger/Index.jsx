import React from "react";
import IconTab from "./IconTab";
import ListTab from "./ListTab";

function Index() {
  return (
    <>
      <div className="dropdown bg-light-black-300 rounded-lg p-1 ml-2 border border-gray-700">
        <label tabIndex={0} className="">
          <IconTab />
        </label>
        <ListTab />
      </div>
    </>
  );
}

export default Index;
