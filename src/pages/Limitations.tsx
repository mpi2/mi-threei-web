import React, { FunctionComponent } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Limitations: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">Strengths and Limitations</h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/methods">Methods</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Strengths and Limitations</Breadcrumb.Item>
      </Breadcrumb>
      <p>
        The strengths of the 3i project are the broadness and depth of its
        phenotyping, and the availability of data for download. The limitations
        of the project are the number of genes (530 out of 18,000) and the low
        number of animals phenotyped per strain (4-8, depending on the assay). A
        well-designed statistical pipeline mitigates the effect of the low
        numbers and allows us to still identify phenotypes with confidence (see
        below).
      </p>
      <h3>Strengths</h3>
      <ul>
        <li>A comprehensive immunological phenotyping of wild type mice</li>
        <li>A comprehensive immunological phenotyping of healthy KO mice</li>
        <li>
          Outcome measures for four challenges (Salmonella, Trichuris, influenza
          and DSS-induced colitis) in wild type and KO mice
        </li>
        <li>
          Extensive non-immune phenotyping data for all non-challenge mice
        </li>
        <li>Most raw data available for download</li>
        <li>
          A well-designed statistical evaluation to mitigate he effect of low
          numbers.
        </li>
      </ul>
      <h3>Limitations</h3>
      <ul>
        <li>Only 530 out of 18,000 possible KO strains phenotyped</li>
        <li>Only 4-8 mice per strain phenotyped</li>
      </ul>
      <p>
        The low number of animals per strain means that our power is only
        sufficient to detect large phenotypic changes. All red cells on the heat
        map are the result of a stringent statistical analysis combined with
        expert knowledge to weed out phenotypes that might have arisen due to
        technical variations. Because we have erred on the side of caution when
        calling a phenotype, there are probably many blue cells that would turn
        red had we screened more mice. We hope you will have a look at the
        positive and the negative phenotype data and use your own expertise and
        judgement to identify interesting findings that have not made our
        stringency cut-off but are still useful pieces of evidence for your own
        investigations.
      </p>
    </Container>
  );
};
