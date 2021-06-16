import { FunctionComponent } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Project: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">3i Project</h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Project</Breadcrumb.Item>
      </Breadcrumb>
      <ul>
        <li>
          <Link to="/project/about">About</Link>
        </li>
        <li>
          <Link to="/project/publications">Publications</Link>
        </li>
        <li>
          <Link to="/project/contact">Contact</Link>
        </li>
        <li>
          <Link to="/project/team-and-collaborators">
            Team &amp; Collaborators
          </Link>
        </li>
        <li>
          <Link to="/project/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/project/how-to-cite">How to cite?</Link>
        </li>
      </ul>
    </Container>
  );
};
