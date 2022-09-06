import React, { useState } from "react";
import { Announced } from "office-ui-fabric-react";
import { TextField } from "office-ui-fabric-react";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
} from "office-ui-fabric-react";
import { MarqueeSelection } from "office-ui-fabric-react";
import { Fabric } from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react";
import SideModal from "./common/SideModal";
import AddJob from "./AddJob";
import { useEffect } from "react";

const exampleChildClass = mergeStyles({
  display: "block",
  marginBottom: "10px",
});

const textFieldStyles = {
  root: { maxWidth: "300px" },
};

const DataLists = () => {
  const _allItems = [];
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState([]);
  const [selection, setSelection] = useState();
  function _getSelectionDetails() {
    const selectionCount = selection ? selection.getSelectedCount() : 0;

    switch (selectionCount) {
      case 0:
        return "No items selected";
      case 1:
        return "1 item selected: " + selection.getSelection()[0].name;
      default:
        return `${selectionCount} items selected`;
    }
  }
  const [state, setState] = useState({
    items: _allItems,
    selectionDetails: _getSelectionDetails(),
    columns: [],
  });

  //  handle column click
  const onColumnClick = (ev, column) => {
    const { items, columns } = state;

    // filter  coliumns by ascending and  decending order
    const newColumns = columns.slice();

    let currCol = newColumns.filter((currCol) => column.key === currCol.key)[0];

    newColumns.forEach((newCol) => {
      if (newCol === currCol) {
        currCol.isSortedDescending = !currCol.isSortedDescending;
        currCol.isSorted = true;
        // console.log('newcol',newCol)
        // console.log('currcol',currCol)
        currCol = currCol.isSortedDescending ? "descending" : "ascending";
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });

    const copyAndSort = (items, columnKey, isSortedDescending = false) => {
      const key = columnKey;

      return items
        .slice(0)
        .sort((a, b) =>
          (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1
        );
    };

    const newItems = copyAndSort(
      items,
      currCol.fieldName,
      currCol.isSortedDescending
    );

    if (newItems) {
      setState({
        columns: newColumns,
        items: newItems,
      });
    }
  };
  console.log('state',state)

  const _columns = [
    {
      key: "column1",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 400,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      onColumnClick: onColumnClick,
    },
    {
      key: "column2",
      name: "Description",
      fieldName: "description",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      onColumnClick: onColumnClick,
      onRender: (item) => {
        return (
          <span>
            {"lorem ipsum dolor sit amet consectetur adipiscing elit"}
          </span>
        );
      },
    },
    {
      key: "column3",
      name: "Created Date",
      fieldName: "createdDate",
      minWidth: 100,
      maxWidth: 120,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      onColumnClick: onColumnClick,
      onRender: (item) => {
        return <span>{"02/09/2022"}</span>;
      },
    },
    {
      key: "column4",
      name: "Modified",
      fieldName: "Modified",
      minWidth: 100,
      maxWidth: 110,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      onColumnClick: onColumnClick,
      onRender: (item, i) => {
        return <span>{`${i} Days ago`}</span>;
      },
    },
    {
      key: "column5",
      name: "Status",
      fieldName: "Status",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      onColumnClick: onColumnClick,
      onRender: (item) => {
        return <span>{"completed"}</span>;
      },
    },
  ];
  useEffect(() => {
    const _selection = new Selection({
      onSelectionChanged: () =>
        setState((prev) => {
          return { ...prev, selectionDetails: _getSelectionDetails() };
        }),
    });
    setSelection(_selection);
  }, []);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      _allItems.push({
        key: i,
        name: `#${i + 123} Business reports FY19`,
        value: "completed",
        status: "progress",
      });
    }
    setState((prev) => {
      return { ...prev, items: _allItems, columns: _columns };
    });
  }, []);

  // Populate with items for demos.

  const _onFilter = (ev, text) => {
    console.log(text);
    setState((prev) => {
      return {
        ...prev,
        items: text
          ? _allItems.filter((i) => i.name.toLowerCase().indexOf(text) > -1)
          : _allItems,
      };
    });
  };

  // handle onCLick on  column
  const _onItemInvoked = (item) => {
    setSelected(item);
    setOpen(!open);
  };

  return selection ? (
    <Fabric>
      {/* <div className={exampleChildClass}>{state.selectionDetails}</div> */}

      <MarqueeSelection selection={selection}>
        <DetailsList
          items={state.items}
          columns={state.columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.justified}
          selection={selection}
          selectionPreservedOnEmptyClick={true}
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          checkButtonAriaLabel="select row"
          onItemInvoked={_onItemInvoked}
        />
      </MarqueeSelection>

      <SideModal opened={open} setOpened={setOpen} data={selected}>
        <AddJob />
      </SideModal>
    </Fabric>
  ) : (
    <div>Loading</div>
  );
};

export default DataLists;
