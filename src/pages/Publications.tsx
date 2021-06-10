import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, FunctionComponent } from "react";
import { Container } from "react-bootstrap";

const publications = [
  {
    citation:
      "Bradley et al (2012) Mammalian Genome 23, 580-6. The mammalian gene function resource: the International Knockout Mouse Consortium. This paper gives an overview of the ES cell resources available through the International Knockout mouse consortium (IKMC).",
    link: "http://www.ncbi.nlm.nih.gov/pubmed/22968824",
    pdf: "bradley_2012_IKMC.pdf",
    pdfName: "Bradley 2012 IKMC.pdf",
  },
  {
    citation:
      "Skarnes et al. (2011) Nature, 474, 337-42. A conditional knockout resource for the genome-wide study of mouse gene function. This paper describes the knockout strategy across the IMPC.",
    link: "http://www.ncbi.nlm.nih.gov/pubmed/21677750",
    pdf: "skarnes_2011_KO_design.pdf",
    pdfName: "Skarnes 2011 KO design.pdf",
  },
  {
    citation:
      "White et al. (2013) Cell, 154, 452-64. Genome-wide generation and systematic phenotyping of knockout mice reveals new roles for many genes. This paper contains an overview over the first 250 lines phenotyped in the WTSI pipeline.",
    link: "http://www.ncbi.nlm.nih.gov/pubmed/23870131",
    pdf: "white_2013_MPG_screen.pdf",
    pdfName: "White 2013 MPG screen.pdf",
  },
  {
    citation:
      "Brown and Moore (2012) Mammalian Genome, 23, 632-60. The International Mouse Phenotyping Consortium: past and future perspectives on mouse phenotyping.",
    link: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3774932/",
    pdf: "brown_and_moore_2012_IMPC.pdf",
    pdfName: "Brown and Moore 2012 IMPC.pdf",
  },
  {
    citation:
      "Abeler-Dörner L, Laing AG, Lorenc A, Ushakov DS, Clare S, Speak AO, Duque-Correa MA, White JK, Ramirez-Solis R, Saran N, Bull KR, Morón B, Iwasaki J, Barton PR, Caetano S, Hng KI, Cambridge E, Forman S, Crockford TL, Griffiths M, Kane L, Harcourt K, Brandt C, Notley G, Babalola KO, Warren J, Mason JC, Meeniga A, Karp NA, Melvin D, Cawthorne E, Weinrick B, Rahim A, Drissler S, Meskas J, Yue A, Lux M, Song-Zhao GX, Chan A, Ballesteros Reviriego C, Abeler J, Wilson H, Przemska-Kosicka A, Edmans M, Strevens N, Pasztorek M, Meehan TF, Powrie F, Brinkman R, Dougan G, Jacobs W Jr, Lloyd CM, Cornall RJ, Maloy KJ, Grencis RK, Griffiths GM, Adams DJ, Hayday AC. High-throughput phenotyping reveals expansive genetic and structural underpinnings of immune variation. Nat Immunol. 2020 Jan;21(1):86-100. doi: 10.1038/s41590-019-0549-0. Epub 2019 Dec 16. PMID: 31844327; PMCID: PMC7338221.",
    link: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7338221/",
    pdf: "Abeler-Dorner - 2020.pdf",
    pdfName: "Abeler-Dörner - 2020.pdf",
  },
];

export const Publications: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">Publications</h1>
      {publications.map((publication) => (
        <Fragment key={publication.pdf}>
          <p>
            {publication.citation} <br />
            <a href={publication.link} target="_blank" rel="noreferrer">
              {publication.link}
            </a>
          </p>
          <p className="mb-5">
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "x-large" }} />{" "}
            <a href={`${process.env.PUBLIC_URL}/${publication.pdf}`}>
              {publication.pdfName}
            </a>
          </p>
        </Fragment>
      ))}
    </Container>
  );
};
