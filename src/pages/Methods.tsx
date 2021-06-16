import { FunctionComponent } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Methods: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">3i Project Methods</h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Methods</Breadcrumb.Item>
      </Breadcrumb>
      <ul>
        <li>
          <Link to="/methods/strengths-and-limitations">
            Strengths and Limitations
          </Link>
        </li>
        <li>
          <Link to="/methods/experimental-design">
            Experimental Design and Protocols
          </Link>
        </li>
        <li>
          <Link to="/methods/statistical-design">Statistical Design</Link>
        </li>
      </ul>
    </Container>
  );
};
