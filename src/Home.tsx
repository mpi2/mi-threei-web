import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Jumbotron,
  Modal,
  Row,
  Alert,
} from "react-bootstrap";
import { MyResponsiveHeatMapCanvas } from "./Heatmap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { GeneFilter } from "./GeneFilter";
import { CellTypeFilter } from "./CellTypeFilter";

export const Home: FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<Array<any>>([]);
  const [options, setOptions] = useState([]);
  const [selectedGenes, setSelectedGenes] = useState<Array<string>>([]);
  const [selectedCellType, setSelectedCellType] = useState<any>(null);

  let filteredData: Array<any> =
    selectedGenes.length > 0
      ? data.filter((d: any) => selectedGenes.includes(d.gene))
      : data;

  filteredData = filteredData.filter((d) =>
    selectedCellType ? d[selectedCellType.key] === 3 : true
  );

  const heatmapHeight =
    filteredData.length * 20 > 500 ? filteredData.length * 20 : 500;

  const cellTypes = [
    { key: "alphaDeltaTCells", display: "γδ T cells" },
    { key: "nKCells", display: "NK Cells" },
    { key: "nktCells", display: "NKT Cells" },
    { key: "bCellPrecursors", display: "B cell precursors" },
    { key: "dendriticCells", display: "Dendritic Cells" },
    { key: "granulocytes", display: "Granulocytes" },
    { key: "tregCells", display: "Treg Cells" },
    { key: "cD4TCells", display: "CD 4 TCells" },
    { key: "monocytesMacrophages", display: "Monocytes / Macrophages" },
    { key: "totalAlphBetaTCells", display: "Total αβ T cells" },
    { key: "bCells", display: "B cells" },
    { key: "cd8TCells", display: "CD 8 T Cells" },
    { key: "dSSChallenge", display: "DSS Challenge" },
    { key: "influenza", display: "Influenza" },
    { key: "trichurisChallenge", display: "Trichuris Challenge" },
    { key: "salmonellaChallenge", display: "Salmonella Challenge" },
  ];

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/three-i-cell-heatmap.json`)
      .then((res) => res.json())
      .then(
        (result) => {
          setOptions(result.map((r: any) => r.gene));
          result.sort((a: any, b: any) =>
            b.totalSignificanceScore > a.totalSignificanceScore ? 1 : -1
          );
          setData(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <Fragment>
      <Jumbotron fluid>
        <Container>
          <h1>3i Project</h1>
          <h3 className="text-muted">
            Over 300 Immunological Phenotypes and 500 Mouse KO Lines!
          </h3>

          <Button variant="primary" onClick={handleShow}>
            Learn more!
          </Button>

          <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
              <Modal.Title>Project overview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                The 3i project has established that genetics plays an important
                role in shaping the immune system. By using a high-throughput,
                high-density immunophenotyping platform we identified 140 genes
                (out of 530 screened) that have an impact on the immune system
                when knocked out in C57BL/6N mice.
              </p>
              <div className="text-center">
                <img
                  alt=""
                  src={`${process.env.PUBLIC_URL}/project_overview.jpeg`}
                  style={{ width: "100%", maxWidth: "800px" }}
                  className="d-inline-block align-middle"
                />
              </div>{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Jumbotron>
      <Container>
        <h1 className="text-center">Explore 3i data</h1>

        {!isLoaded ? (
          "loading"
        ) : (
          <>
            <Row>
              <Col>
                <GeneFilter
                  options={options}
                  onChange={setSelectedGenes}
                ></GeneFilter>
              </Col>
              <Col>
                <CellTypeFilter
                  options={cellTypes}
                  onChange={setSelectedCellType}
                ></CellTypeFilter>
              </Col>
            </Row>
            <Row>
              <Col>
                {selectedGenes.length > 0 ? (
                  <h5 className="text-center">
                    Showing data for genes in [
                    {selectedGenes.map((g, i) => (
                      <>
                        {" "}
                        <Badge variant="info">{g}</Badge>
                        {selectedGenes.length !== i + 1 ? <span>,</span> : null}
                      </>
                    ))}{" "}
                    ]{" "}
                    {selectedCellType ? (
                      <span>
                        and significant for{" "}
                        <Badge variant="info">{selectedCellType.display}</Badge>
                      </span>
                    ) : null}
                  </h5>
                ) : (
                  <h5 className="text-center">
                    {" "}
                    {selectedCellType ? (
                      <span>
                        Showing data for genes significant for{" "}
                        <Badge variant="info">{selectedCellType.display}</Badge>
                      </span>
                    ) : null}
                  </h5>
                )}
              </Col>
            </Row>
            <Row className={filteredData.length > 0 ? "d-block" : "d-none"}>
              <Col
                style={{
                  width: "100%",
                  height: heatmapHeight + "px",
                }}
              >
                <MyResponsiveHeatMapCanvas
                  data={filteredData}
                  columns={cellTypes}
                ></MyResponsiveHeatMapCanvas>
              </Col>
            </Row>
            <Row className={filteredData.length === 0 ? "d-block" : "d-none"}>
              <Alert variant="danger">
                No matching data for your filters, try changing them!
              </Alert>
            </Row>
          </>
        )}
      </Container>

      {error ? "error!" : null}
    </Fragment>
  );
};
