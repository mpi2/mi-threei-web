import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Contact: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">Contact</h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/project/">Project</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
      </Breadcrumb>
      <p>
        For questions about 3i, please contact project manager Lucie
        Abeler-Dörner.
      </p>
      <p>
        <a href="mailto:lucie.abeler-dorner@bdi.ox.ac.uk">
          Send email <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </p>
    </Container>
  );
};
