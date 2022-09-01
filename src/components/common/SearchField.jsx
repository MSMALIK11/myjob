import React from "react";
import { SearchBox } from "@fluentui/react";

const SearchField = ({ width }) => {
  return (
    <div style={{ width: width }}>
      <SearchBox
        placeholder="search"
        styles={{
          root:{

          width:'100%'
            // borderRadius: 0,
            // border: "0px solid transparent",
            // background: "#F3F2F1",
           
          }
        }}
        onSearch={newValue => console.log('value is ' + newValue)}
      />
    </div>
  );
};

export default SearchField;
