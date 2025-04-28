import React, { FunctionComponent } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ThreeiFooter: FunctionComponent = () => {
  return (
    <footer className="footer py-5 bg-dark text-light">
      <Container>
        <Row>
          <Col>
            <Navbar.Brand as={Link} to="/" className="mb-2">
              <img
                alt=""
                src={`${process.env.PUBLIC_URL}/3i-icon-white.png`}
                height="60px"
                className="d-inline-block align-middle"
              />{" "}
              <div className="d-inline-block align-middle text-white">
                <span
                  style={{
                    //fontVariant: "small-caps",
                    fontFamily: "'Merriweather Sans', sans-serif",
                    fontWeight: "bolder",
                  }}
                >
                  Infection, Immunity <br />
                  Immunophenotyping{" "}
                </span>
              </div>
            </Navbar.Brand>
            <a
              href="https://ftp.ebi.ac.uk/pub/databases/impc/other/privacy-notices/Privacy-notice-for-IMPC-mousephenotype.org-EMBL-EBI.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-light text-center"
            >
              Data protection and Privacy Notice
            </a>
          </Col>

          <Col>
            <h4>Project</h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <Link to="/project/about" className="text-light">
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/project/publications" className="text-light">
                  Publications
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/project/contact" className="text-light">
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/project/team-and-collaborators"
                  className="text-light"
                >
                  Team &amp; Collaborators
                </Link>
              </li>
              <li>
                <Link to="/project/faq" className="text-light">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/project/how-to-cite" className="text-light">
                  How to cite?
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Methods</h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <Link
                  to="/methods/strengths-and-limitations"
                  className="text-light"
                >
                  Strengths and Limitations
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/methods/experimental-design" className="text-light">
                  Experimental Design and Protocols
                </Link>
              </li>
              <li>
                <Link to="/methods/statistical-design" className="text-light">
                  Statistical Design
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Data</h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <Link to="/data/downloads" className="text-light">
                  Downloads
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/data/flow-files" className="text-light">
                  Flow files
                </Link>
              </li>
              <li>
                <Link to="/data/new-cell-types" className="text-light">
                  New cell types
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
