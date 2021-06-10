import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import { About } from "./pages/About";
import "./App.scss";
import { Home } from "./Home";
import { MainNav } from "./MainNav";
import { ThreeiFooter } from "./ThreeiFooter";
import { Publications } from "./pages/Publications";
import { Contact } from "./pages/Contact";
import { Team } from "./pages/Team";
import { Faq } from "./pages/Faq";
import { HowToCite } from "./pages/HowToCite";
import { Limitations } from "./pages/Limitations";
import { ExperimentalDesign } from "./pages/ExperimentalDesign";
import { StatisticalDesign } from "./pages/StatisticalDesign";
import { Downloads } from "./pages/Downloads";
import { FlowFiles } from "./pages/FlowFiles";
import { NewCellTypes } from "./pages/NewCellTypes";

function App() {
  const MainBarWithRouter = withRouter(MainNav);
  const FooterWithRouter = withRouter(ThreeiFooter);

  return (
    <Fragment>
      <HashRouter basename="/">
        <MainBarWithRouter />
        <main className="main-content w-100">
          <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/project/about" component={About} />
              <Route
                exact
                path="/project/publications"
                component={Publications}
              />
              <Route exact path="/project/contact" component={Contact} />
              <Route
                exact
                path="/project/team-and-collaborators"
                component={Team}
              />
              <Route exact path="/project/faq" component={Faq} />
              <Route exact path="/project/how-to-cite" component={HowToCite} />
              <Route
                exact
                path="/methods/strengths-and-limitations"
                component={Limitations}
              />
              <Route
                exact
                path="/methods/experimental-design"
                component={ExperimentalDesign}
              />
              <Route
                exact
                path="/methods/statistical-design"
                component={StatisticalDesign}
              />
              <Route exact path="/data/downloads" component={Downloads} />
              <Route exact path="/data/flow-files" component={FlowFiles} />
              <Route
                exact
                path="/data/new-cell-types"
                component={NewCellTypes}
              />
            </Switch>
          </Container>
        </main>
        <FooterWithRouter />
      </HashRouter>
    </Fragment>
  );
}

export default App;
