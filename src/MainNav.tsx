import React, { FunctionComponent, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export const MainNav: FunctionComponent<RouteComponentProps> = ({
  location,
}) => {
  const [showProject, setShowProject] = useState(false);
  const [showMethods, setShowMethods] = useState(false);
  const [showData, setShowData] = useState(false);

  const menuStates: any = {
    project: { status: showProject, set: setShowProject },
    methods: { status: showMethods, set: setShowMethods },
    data: { status: showData, set: setShowData },
  };

  const menu = [
    { link: "/", name: "Home" },
    {
      link: "/project",
      name: "Project",
      children: [
        { link: "/project/about", name: "About" },
        { link: "/project/publications", name: "Publications" },
        { link: "/project/contact", name: "Contact" },
        {
          link: "/project/team-and-collaborators",
          name: "Team & Collaborators",
        },
        { link: "/project/faq", name: "FAQ" },
        { link: "/project/how-to-cite", name: "How to cite?" },
      ],
    },
    {
      link: "/methods",
      name: "Methods",
      children: [
        {
          link: "/methods/strengths-and-limitations",
          name: "Strengths and Limitations",
        },
        {
          link: "/methods/experimental-design",
          name: "Experimental Design and Protocols",
        },
        { link: "/methods/statistical-design", name: "Statistical Design" },
      ],
    },
    {
      link: "/data",
      name: "Data",
      children: [
        {
          link: "/data/downloads",
          name: "Downloads",
        },
        {
          link: "/data/flow-files",
          name: "Flow files",
        },
        { link: "/data/new-cell-types", name: "New cell types" },
      ],
    },
  ];
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/3i-icon.png`}
            height="60px"
            className="d-inline-block align-middle"
          />{" "}
          <div className="d-inline-block align-middle text-primary">
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
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="uarr"
          type="button"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ml-auto text"
            activeKey={location?.pathname}
            style={{
              fontFamily: "'Merriweather Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            {menu.map((menuItem) => {
              if (!menuItem.children) {
                return (
                  <Nav.Link as={Link} key={menuItem.link} to={menuItem.link}>
                    {menuItem.name}
                  </Nav.Link>
                );
              } else {
                const key = menuItem.link.replace("/", "");

                return (
                  <NavDropdown
                    title={menuItem.name}
                    key={key}
                    id={key + "-dropdown"}
                    show={menuStates[key].status}
                    onMouseEnter={() => menuStates[key].set(true)}
                    onMouseLeave={() => menuStates[key].set(false)}
                    active={location.pathname.includes(key)}
                  >
                    {menuItem.children.map((childItem) => {
                      return (
                        <NavDropdown.Item
                          as={Link}
                          key={childItem.link}
                          to={childItem.link}
                        >
                          {childItem.name}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
