import React, { FunctionComponent, useEffect, useState } from "react";
import { Alert, Breadcrumb, Button, Container, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { tsvParse } from "d3-dsv";
import { Legend } from "./Legend";

export interface IDetailsProps {
  cellType?: string;
  procedure?: string;
  gene?: string;
  cellTypeParameterMap?: any;
}

const getCellColor = ["white", "#acacac", "#416ec5", "#c9505d"];

export const Details: FunctionComponent<IDetailsProps> = ({
  cellTypeParameterMap,
}) => {
  let { gene, cellType, procedure } = useParams<IDetailsProps>();
  cellType = decodeURIComponent(cellType || "");
  const [tableRows, setTableRows] = useState<Array<any>>([]);
  const [tableColumns, setTableColumns] = useState<Array<any>>([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/${gene}.tsv`)
      .then((res) => (res !== null ? res.text() : ""))
      .then(
        (result: string) => {
          const parameters = cellTypeParameterMap
            .filter((mapping: any) =>
              cellType
                ? mapping.cellType.toLowerCase() === cellType?.toLowerCase()
                : mapping.cellType.toLowerCase() === cellType?.toLowerCase()
            )
            .map((mapping: any) => mapping.parameterId);
          let detailsData = [...tsvParse(result)];
          if (cellType)
            detailsData = detailsData.filter((row) =>
              parameters.includes(row.parameterId)
            );
          if (procedure)
            detailsData = detailsData.filter(
              (row) => row.displayProcedureName === procedure
            );
          const groupedByParameter: any = {};
          const extraCols: Array<string> = [];
          detailsData.forEach(
            ({ parameterId, sex, genotype, significanceValue }: any) => {
              if (!groupedByParameter[parameterId])
                groupedByParameter[parameterId] = {};
              const sexGenotypeKey = sex + " " + genotype;
              if (!extraCols.includes(sexGenotypeKey))
                extraCols.push(sexGenotypeKey);
              if (!groupedByParameter[parameterId][sexGenotypeKey])
                groupedByParameter[parameterId][sexGenotypeKey] = 0;
              groupedByParameter[parameterId][sexGenotypeKey] =
                groupedByParameter[parameterId][sexGenotypeKey] <
                significanceValue
                  ? significanceValue
                  : groupedByParameter[parameterId][sexGenotypeKey];
            }
          );
          extraCols.sort((a, b) => (a > b ? 0 : -1));
          setTableColumns(() => ["Parameter", "Assay"].concat(extraCols));
          const newTableRows = detailsData
            .filter(
              (v, i, a) =>
                a.map((ai) => ai.parameterId).indexOf(v.parameterId) === i
            )
            .map((d) => {
              const row: any = {
                parameterId: d.parameterId,
                Parameter: d.parameterName,
                Assay: d.displayProcedureName,
                procedureName: d.procedureName,
                mgi: d.mgiAccessionId,
              };
              extraCols.forEach((c: string) => {
                if (d.parameterId)
                  row[c] = groupedByParameter[d.parameterId][c]
                    ? groupedByParameter[d.parameterId][c]
                    : 0;
              });
              return row;
            });
          setTableRows(newTableRows);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [cellType, procedure, cellTypeParameterMap, gene]);
  return (
    <Container className="mt-5">
      <h1>
        Gene: {gene}{" "}
        <Button
          variant="primary"
          size="sm"
          onClick={() =>
            window.open(
              `https://www.mousephenotype.org/data/genes/${tableRows[0]["mgi"]}#order`
            )
          }
        >
          View data / order mice at IMPC
        </Button>
      </h1>
      {cellType ? (
        <h2>Cell type: {cellType}</h2>
      ) : (
        <h2>Procedure: {procedure}</h2>
      )}
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/data/">Data</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{gene}</Breadcrumb.Item>
      </Breadcrumb>

      {tableRows.length > 0 ? (
        <>
          <Legend></Legend>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                {tableColumns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((v: any) => (
                <tr
                  key={v.parameterId}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(
                      `https://www.mousephenotype.org/data/genes/MGI:1914792?dataQuery=${v.parameterId}&dataSearch=${v.procedureName}&dataLifeStage=Early%20adult`
                    );
                  }}
                >
                  {tableColumns.map((col, i) =>
                    ["Parameter", "Assay"].includes(col) ? (
                      <td key={v.parameterId + i}>{v[col]}</td>
                    ) : (
                      <td
                        key={v.parameterId + i}
                        style={{ backgroundColor: getCellColor[v[col]] }}
                      ></td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <Alert variant="danger" className="my-5">
          No data available!
        </Alert>
      )}
    </Container>
  );
};
