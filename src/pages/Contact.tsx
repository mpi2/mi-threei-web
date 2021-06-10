import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";
import { Container } from "react-bootstrap";

export const Contact: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">Contact</h1>
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
