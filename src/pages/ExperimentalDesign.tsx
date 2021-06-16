import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";
import { Accordion, Card, Container, Table } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExperimentalDesign.scss";

const observationProtocols = [
  {
    title:
      "Flow-cytometric analysis of spleen, mesenteric lymph nodes and bone marrow",
    description:
      "For each knockout strain, we analyse spleen, mesenteric lymph nodes and bone marrow of 3 female and 3 male mice. The flow-cytometric analysis comprises all major immune cell compartments of these organs.",
    documents: [
      {
        title: "Bone marrow Preparation Protocol",
        file: "Bonemarrowpreparation-protocol.pdf",
      },
      {
        title: "MLN Preparation Protocol",
        file: "MLN preparation-protocol.pdf",
      },
      {
        title: "Setup and Panels",
        file: "Set-upandpanels.pdf",
      },
      {
        title: "Spleen Preparation Protocol",
        file: "Spleenpreparation-protocol.pdf",
      },
      {
        title: "Staining Protocol",
        file: "Staining-protocol.pdf",
      },
    ],
  },
  {
    title: "Flow-cytometric analysis of peripheral blood lymphocytes",
    description:
      "For each knockout strain, we analyse peripheral blood lymphocytes at six week of age of 4 male and 4 female mice. Perioheral blood lymphovytes at 16 weeks of age of 7 female and 7 male is analysed by the Sanger core phenotyping team in addition to the 3i assays. The Sanger core assays also include a haematological analysis. The flow-cytometric analysis comprises all major immune cell compartments in the blood.",
    documents: [
      {
        title: "Flow Analysis Blood Protocol",
        file: "Flow analysisblood-protocol.pdf",
      },
      {
        title: "Setup and panels for PBL 16 and 6 weeks - v1",
        file: "Setup and panels for PBL 16 and 6 weeks_v1.pdf",
      },
    ],
  },
  {
    title: "Cytotoxic T cell function",
    description:
      "For each knockout strain, the cytotoxicity of splenic CD8 T cells from 2 female and 2 male mice is assessed in a kill assay using P14 cells. Cytotoxic T cells are crucial for killing virus-infected and cancerous cells in mice and humans.",
    documents: [
      {
        title: "Cytotoxic T cell function Protocol",
        file: "Cytotoxic T cell function - protocol.pdf",
      },
    ],
  },
  {
    title: "Antinuclear antibodies",
    description:
      "For each knockout strain, the serum of 3 female and 3 male mice is tested for the presence of antinuclear IgG antibodies. Antinuclear antibodies are a key hallmark of many autoimmune diseases in mice as well as humans. Standard clinical chemistry parameters are assessed in addition by the Sanger core phenotyping team.",
    documents: [
      {
        title: "Antinuclear antibodies Protocol",
        file: "Antinuclear antibodies - protocol.pdf",
      },
    ],
  },
  {
    title: "Microscopic analysis of immune cells in the epidermis",
    description:
      "In order to also include immune cells in the tissue, we analyse the immunological composition of the ear epidermis in 2 female and 2 male mice of each knockout strain, focussing on number, size and shape of Langerhans cells and dendritic epidermal T cells (DETC). The majority of immune cells in mice and humans is found in the tissues where they orchestrate local immune responses, but due to obvious difficulties, they are rarely being looked at in patients.",
    documents: [
      {
        title: "Ear epidermal sheet isolation",
        file: "Ear epidermal sheet isolation.pdf",
      },
      {
        title: "Epidermal sheet staining - protocol",
        file: "Epidermal sheet staining - protocol.pdf",
      },
    ],
  },
];

const challengeProtocols = [
  {
    title: "Salmonella typhimurium infection",
    description:
      "For each knockout strain, 4 female and 4 male mice are intraperitoneally infected with strain M525, and weight is monitored daily. Half of the mice are sacrificed after 14 days, the other half after 28 days. The liver is collected for bacterial counts and for histology. Wild type littermates from various knockout lines are used as controls.",
  },
  {
    title: "Influenza infection",
    description:
      "For each knockout strain, 3 female and 3 male mice are infected intranasally with strain X-31, and weight is monitored daily. After 10 days, the mice are sacrificed and immune cells from the lung are collected by bronchoalveolar lavage. Wild type littermates from various knockout lines are used as controls.",
    documents: [
      {
        title: "Bronchoalveloar lavage Protocol",
        file: "Bronchoalveloar lavage - protocol.pdf",
      },
    ],
  },
  {
    title: "Trichuris muris infection",
    description:
      "For each knockout strain, 6 female mice are infected with Trichuris muris eggs by oral gavage, and weight is monitored daily. After 33 days, the mice are sacrificed and the cecum is assessed for the presence or absence of worms. Serum is collected for confirmation of productive infection. Wild type littermates from various knockout lines are used as controls.",
    documents: [
      {
        title: "Trichuris muris infection Protocol",
        file: "Trichuris muris infection - protocol",
      },
    ],
  },
  {
    title: "DSS colitis",
    description:
      "For each knockout strain, 4 male mice receive 1.5% dextran sodium sulphate in drinking water for 7 days, and weight is monitored daily. After 10 days, the mice are sacrificed and samples from the medial and distal gut are collected for histological analysis. Wild type littermates from various knockout lines and wild type mice from a separate colony type colony housed in the same facility are used as controls.",
  },
  {
    title: "Mycobacterium tuberculosis infection",
    description:
      "For selected knockout strains, 25 male mice are infected with a low dose aerosol of strain H37Rv. After 24 hours, 3 weeks and 6 weeks, 5 mice each are sacrificed and lung and spleen are collected for bacterial counts. 10 mice are kept for survival analysis.",
  },
];

export const ExperimentalDesign: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5" id="the-mice">
        The Mice
      </h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/methods/">Methods</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Experimental Design and Protocols
        </Breadcrumb.Item>
      </Breadcrumb>
      <article>
        <p>
          The Wellcome Trust Sanger Institute currently generates 160 knockout
          mouse lines a year, all of which are phenotyped by the 3i consortium.
          One third of the genes are chosen for their likely involvement in
          human diseases (e.g. as shown in GWAS studies), one third are chosen
          from suggestions of participating scientists and one third are
          randomly selected from the International Knockout Mouse Consortium
          (IKMC) embryonic stem cell pool (see below). Approximately 25% of the
          knockout lines generated are embryonically lethal and are phenotyped
          as heterozygotes. Whilst lines homozygous for the targeted alleles
          present with a higher hit rate, lines assessed in the heterozygous
          state were still remarkably informative. A characterization of the
          first 250 knockout mouse lines that completed the Sanger phenotyping
          pipeline pre-3i has been published by&nbsp;
          <a
            href="http://www.ncbi.nlm.nih.gov/pubmed/23870131"
            target="_blank"
            rel="noreferrer"
          >
            White et al.
          </a>
          &nbsp;(Cell 2013).
        </p>
      </article>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Embryonic stem cells
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                All ES cells are derived from the resources generated by&nbsp;
                <a
                  href="https://www.mousephenotype.org/about-ikmc"
                  target="_blank"
                  rel="noreferrer"
                >
                  IKMC,
                </a>
                &nbsp;an ongoing effort to create knockout ES cells for every
                protein-coding gene in the mouse. At the moment, all ES cells
                used have been generated with traditional techniques. In the
                future, some of the lines will likely be generated by CRISPR
                technology.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Knockout Strategy
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                Most of the knockouts lines are generated by a knock-in first
                approach (Skarnes et al, Nature 2011). This technique combines
                the advantages of a reporter-tagged allele with a conditional
                knockout approach (see figure 1).&nbsp;
              </p>
              <div className="text-center m-2">
                <img
                  src={`${process.env.PUBLIC_URL}/knockout-first-471x451.png`}
                  alt="knockout-first process diagram"
                />
              </div>

              <p>
                Historically, approximately 25% of knockout lines at Sanger have
                been phenotyped as tm1b alleles and 75% as tm1a alleles. An
                internal study showed that 60% of the tm1a lines were complete
                knockouts, 16% were hypomorphs and 24% had residual gene
                activity. By the end of 2014, all lines will be analysed in
                their tm1b form. The knock-in first approach relies on the
                identication of a critical exon common to all trascript variants
                that, when deleted, creates a frame-shift mutation. The critical
                exon is defined by a computer-assisted procedure and flanked by
                loxP sites. Upstream, an FRT-flanked lacZ-loxP-neomycin cassette
                is inserted. The lacZ-loxP-neomycin cassette contains a splice
                acceptor and also codes for a poly-A tail. In its full-length
                form (tm1a), the construct therefore generates a null allele by
                creating a shortened transcript that lacks the critical exon. A
                lacZ reporter knockout (tm1b) can be generated by exposing mice
                or cells to Cre recombinase. Alternatively, exposure to Flp
                recombinase will create a wild type allele (tm1c) which can then
                be used to create conditional knockout strains by crossing the
                mice to a tissue-specific Cre-expressing strain. Genes expressed
                in ES cells are usually targeted with a promoterless construct,
                genes not expressed with a promoter-driven construct.
                Promoter-driven constructs carry a slightly higher risk for
                off-target effects. If the target gene is small and does not
                contain a critical exon, an exon is split by the targeting
                cassette imbedded in an artificial intron. More detailed
                information on the constructs used can be found in the&nbsp;
                <a
                  href="http://www.mousephenotype.org/data/documentation/aboutImpc#howdoesimpcwork"
                  target="_blank"
                  rel="noreferrer"
                >
                  targeting strategy section of the IMPC website.
                </a>
              </p>

              <h3>How to order a knockout mouse or an ES cell line</h3>

              <p>
                3i itself does not distribute any materials, but mice and ES
                cells can be requested via the IMPC for a fee from repositories
                in Europe or the US. Please search for your gene of interest on
                the&nbsp;
                <a
                  href="http://www.mousephenotype.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IMPC website to find out which products are available.
                </a>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <h1 className="mt-5 mb-5" id="experimental">
        Experimental Design and Protocols
      </h1>
      <h2 id="observational">Observational screen</h2>
      <p>
        The observational screen aims to detect any immunological disturbances
        that occur in key immunological sites in the steady state. Unless stated
        otherwise, mice are sacrificed at 16 weeks of age.
      </p>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Organ / Test</th>
            <th>No. of Mice</th>
            <th>Readout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spleen, MLN, Bone marrow</td>
            <td>3F3M</td>
            <td rowSpan={2}>
              <div>Flow cytometry</div>
            </td>
          </tr>
          <tr>
            <td>Blood</td>
            <td>7F7M</td>
          </tr>
          <tr>
            <td>Antinuclear antibodies</td>
            <td>3F3M</td>
            <td rowSpan={2}>
              <div>Microscopy</div>
            </td>
          </tr>
          <tr>
            <td>Ear epidermis</td>
            <td>2F2M</td>
          </tr>
          <tr>
            <td>Cytotoxic T lymphocytes</td>
            <td>2F2M</td>
            <td>
              <div>All assay</div>
            </td>
          </tr>
        </tbody>
      </Table>
      <Accordion>
        {observationProtocols.map((observationProtocol, index) => (
          <Card key={`${observationProtocol.title}_${index}`}>
            <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
              {observationProtocol.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}`}>
              <Card.Body>
                <p>{observationProtocol.description}</p>
                <h4>Related documents</h4>
                <ul className="list-unstyled">
                  {observationProtocol.documents.map((doc, index) => (
                    <li key={`sub_${observationProtocol.title}-${index}`}>
                      <FontAwesomeIcon
                        key={doc.file}
                        icon={faFilePdf}
                        style={{ fontSize: "x-large" }}
                      />{" "}
                      <a
                        href={`${process.env.PUBLIC_URL}/${doc.file}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <h2 className="mt-5" id="challenges">
        Challenges
      </h2>
      <p>
        In order to find defects in the knockout mice that only become apparent
        when the immune system is challenged, we subject the mice to a broad
        spectrum of challenges. A Salmonella typhimurium infection as an example
        of a bacterial infection is carried out by the team of Gordon Dougan at
        the Wellcome Trust Sanger Institute. For the 3i assays, we chose
        influenza as a viral infection, Trichuris muris as a parasite infection
        and DSS colitis as an example of a chemical stressor. Selected strains
        will furthermore be infected with Mycobacterium tuberculosis.
      </p>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Challenge</th>
            <th>No. of Mice</th>
            <th>Readouts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Samonella</td>
            <td>4F4M</td>
            <td>
              Bacterial counts <br />
              Antibody titers
            </td>
          </tr>
          <tr>
            <td>Influenza</td>
            <td>3F3M</td>
            <td>Daily weights</td>
          </tr>
          <tr>
            <td>Trichuris</td>
            <td>6F</td>
            <td>
              Worm burden <br /> Antibody titers
            </td>
          </tr>
          <tr>
            <td>DSS colitis</td>
            <td>4F</td>
            <td>
              Histology <br />
              Daily weights
            </td>
          </tr>
          <tr>
            <td>Tuberculosis</td>
            <td>selected</td>
            <td>
              Bacterial counts <br />
              Daily weights
            </td>
          </tr>
        </tbody>
      </Table>
      <Accordion>
        {challengeProtocols.map((observationProtocol, index) => (
          <Card key={`${observationProtocol.title}_${index}`}>
            <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
              {observationProtocol.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}`}>
              <Card.Body>
                <p>{observationProtocol.description}</p>
                {observationProtocol.documents ? (
                  <>
                    <h4>Related documents</h4>
                    <ul className="list-unstyled">
                      {observationProtocol.documents.map((doc, index) => (
                        <li key={`sub_${index}`}>
                          <FontAwesomeIcon
                            key={doc.file}
                            icon={faFilePdf}
                            style={{ fontSize: "x-large" }}
                          />{" "}
                          <a
                            href={`${process.env.PUBLIC_URL}/${doc.file}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {doc.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <h2 className="mt-5" id="flow">
        Flow Cytrometry: gating
      </h2>
      <ul>
        <li>Gating strategy</li>
        <li>Manual and Automated Gating</li>
      </ul>
      <p>
        All FCS files were gated manually at the time of acquisition. Non-blood
        FCS files gathered after panel change were reanalysed afterwards with
        automated gating by Ryan Brinkman team Link todo. Data presented through
        the IMPC portal is based on manual gating. We used automated gating
        whenever possible. For strains where some samples were reanalysed with
        automated gating and others analysed only with manual gating, we used
        for each sample the best available data (so preferably automated-gating
        derived) and compared it to the appropriate reference range. Only then
        results were aggregated for the strain.
      </p>
      <p>
        In the Data download section we provide information about what sort of
        gating was used for any specific sample.
      </p>
    </Container>
  );
};
