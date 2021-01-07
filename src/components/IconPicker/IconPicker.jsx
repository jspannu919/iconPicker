import * as faIconsObj from "react-icons/fa";
import { Row, Col, Pagination } from "antd";
import React, { useState } from "react";

import "./iconPicker.css";

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  onSelect,
  pickerHeight = 500,
  pickerWidth = 500,
}) => {
  // for pagination
  const [pageNumber, setPageNumber] = useState(1);

  //icon style object as per props
  let iconStyle = { width: iconWidth, height: iconHeight };

  //count of total icons and the icons to display
  let totalDisplayedIcons = rowsInOnePage * columnsInOnePage;
  let totalIcons = Object.keys(faIconsObj).length;

  //content array to accomodate the rows and columns of icons
  let content = [];

  //Fetch icons as per the pagination and convert to React Element
  let icons = Object.keys(faIconsObj)
    .slice((pageNumber - 1) * totalDisplayedIcons)
    .map((Icon) =>
      React.createElement(faIconsObj[Icon], {
        style: iconStyle,
        onClick: () => onClickHandler(Icon),
      })
    );

  //Render rows and columns dynamicaaly as per the props
  for (let rowsCnt = 1; rowsCnt <= rowsInOnePage; rowsCnt++) {
    let columns = [];
    for (let columnsCnt = 1; columnsCnt <= columnsInOnePage; columnsCnt++) {
      columns.push(
        <Col>{icons[(rowsCnt - 1) * columnsInOnePage + (columnsCnt - 1)]}</Col>
      );
    }
    content.push(
      <Row gutter={10} justify="center" align="middle">
        {columns}
      </Row>
    );
  }

  //set icon in calling window
  function onClickHandler(selectedIcon) {
    onSelect(selectedIcon);
  }

  return (
    <div style={{ width: pickerWidth, height: pickerHeight }}>
      <Pagination
        size="small"
        className="pagination"
        current={pageNumber}
        total={totalIcons}
        onChange={setPageNumber}
        pageSize={totalDisplayedIcons}
        showSizeChanger={false}
        hideOnSinglePage
      />
      {content}
    </div>
  );
};

export default IconPicker;
