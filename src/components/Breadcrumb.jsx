import React from "react";
import {Breadcrumb}  from "@fluentui/react";





const BreadCrumb = ({value}) => {



  return (
    <div className="Breadcrumb">
      <Breadcrumb items={value} />
    </div>
  );
};

export default BreadCrumb;
