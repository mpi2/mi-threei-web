import React, { FunctionComponent } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Data: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">3i Project Data</h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <ul>
        <li>
          <Link to="/">Explore the data</Link>
        </li>
        <li>
          <Link to="/data/downloads/">Downloads</Link>
        </li>
        <li>
          <Link to="/data/flow-files">Flow files</Link>
        </li>
        <li>
          <Link to="/data/new-cell-types">New cell types</Link>
        </li>
      </ul>
    </Container>
  );
};
