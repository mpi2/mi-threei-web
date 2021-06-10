// @ts-nocheck
import React, { FunctionComponent, useState } from "react";
import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

export interface ICellTypeFilterProps {
  options: Array<any>;
  onChange(options: string): any;
}

export const CellTypeFilter: FunctionComponent<ICellTypeFilterProps> = ({
  options,
  onChange,
}) => {
  const [selectedCellType, setSelectedCellType] = useState([]);
  return (
    <Form.Group style={{ marginTop: "20px" }}>
      <Form.Label>Filter by cell type significance</Form.Label>
      <Typeahead
        id="basic-typeahead-multiple"
        single
        onChange={(s) => {
          setSelectedCellType(s);
          onChange(s[0]);
        }}
        labelKey="display"
        options={options}
        placeholder="Select cell type..."
        selected={selectedCellType}
        clearButton
      />
    </Form.Group>
  );
};
