// @ts-nocheck
import React, { FunctionComponent, useState } from "react";
import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

export interface IGeneFilterProps {
  options: Array<string>;
  onChange(options: Array<string>): any;
}

export const GeneFilter: FunctionComponent<IGeneFilterProps> = ({
  options,
  onChange,
}) => {
  const [selectedGenes, setSelectedGenes] = useState([]);
  return (
    <Form.Group style={{ marginTop: "20px" }}>
      <Form.Label>Filter by gene symbol</Form.Label>
      <Typeahead
        id="basic-typeahead-multiple"
        multiple
        onChange={(s) => {
          setSelectedGenes(s);
          onChange(s);
        }}
        options={options}
        placeholder="Select gene symbol..."
        selected={selectedGenes}
        clearButton
        allowNew
      />
    </Form.Group>
  );
};
