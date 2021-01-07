import { Modal, InputNumber } from "antd";
import React, { useState } from "react";

import "./App.css";
import IconPicker from "./components/IconPicker";
import * as faIconsObj from "react-icons/fa";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [Icon, setIcon] = useState(null);
  const [pickerHeight, setPickerHeight] = useState(500);
  const [pickerWidth, setPickerWidth] = useState(500);
  const [rowsInOnePage, setRowsInOnePage] = useState(10);
  const [columnsInOnePage, setColumnsInOnePage] = useState(10);
  const [iconHeight, setIconHeight] = useState(10);
  const [iconWidth, setIconWidth] = useState(10);

  let iconStyleObj = {
    width: 100,
    height: 100,
  };

  return (
    <>
      <Modal
        title="Select App Icon"
        visible={isModalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        bodyStyle={{ width: pickerHeight, height: pickerWidth }}
      >
        <IconPicker
          rowsInOnePage={rowsInOnePage}
          columnsInOnePage={columnsInOnePage}
          iconHeight={iconHeight}
          iconWidth={iconWidth}
          onSelect={(icon) => {
            setIcon(icon);
            setModalVisible(false);
          }}
          pickerHeight={pickerHeight}
          pickerWidth={pickerWidth}
        />
      </Modal>

      {/* inputs */}
      <span>PickerHeight </span>
      <InputNumber value={pickerHeight} onChange={setPickerHeight} min={1} />
      <br />
      <span>PickerWidth </span>
      <InputNumber value={pickerWidth} onChange={setPickerWidth} min={1} />
      <br />
      <span>Rows in One Page </span>
      <InputNumber value={rowsInOnePage} onChange={setRowsInOnePage} min={1} />
      <br />
      <span>Columns in One Page </span>
      <InputNumber
        value={columnsInOnePage}
        onChange={setColumnsInOnePage}
        min={1}
      />
      <br />
      <span>Icon Heigth </span>
      <InputNumber value={iconHeight} onChange={setIconHeight} min={1} />
      <br />
      <span>Icon Width </span>
      <InputNumber value={iconWidth} onChange={setIconWidth} min={1} />

      {/* iconSelector */}
      <div className="iconContainer" onClick={() => setModalVisible(true)}>
        {Icon ? (
          React.createElement(faIconsObj[Icon], {
            style: iconStyleObj,
          })
        ) : (
          <span>Choose Icon</span>
        )}
      </div>
    </>
  );
}

export default App;
