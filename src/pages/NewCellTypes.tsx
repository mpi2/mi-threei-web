import React, { FunctionComponent } from "react";
import { Container } from "react-bootstrap";

export const NewCellTypes: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">New Cell Types</h1>
      <p>
        We are conducting a semi-supervised analysis of our flow data &ndash;
        trying to let mathematical algorithms find new phenotypes in new subsets
        that we didn&rsquo;t look at when we followed our gating strategy.
        It&rsquo;s a complex dataset and we are currently in the process of
        finding the best ways to interpret and display the results. Watch this
        space!
      </p>
    </Container>
  );
};
