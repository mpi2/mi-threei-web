import React, { FunctionComponent } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Downloads: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">Raw Data Downloads</h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/data/">Data</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Downloads</Breadcrumb.Item>
      </Breadcrumb>
      <p>
        Data for specific genes and assays: access through the heat map on our
        landing page. Click through until you see a graph of interest and obtain
        a csv file by pushing &ldquo;download&rdquo; button.
      </p>
      <p>
        Bulk quantification data (all tested genes, many parameters) can be
        found on this page. Data for flow cytometry assays, ear epidermis and
        DSS are also on github, together with the code used for&nbsp;
        <a href="https://github.com/AnnaLorenc/3i_heatmapping">heatmapping</a>.
      </p>
      <p>
        Raw flow cytometry data is available from the&nbsp;
        <a href="https://flowrepository.org/">FlowRepository</a>,
      </p>
      <p>
        It is mandatory to acknowledge the 3i consortium when using this data.
        To cite this data in publications and grant proposals, please use the
        following text:
      </p>
      <p>
        &ldquo;This project (or table/figure xxx) uses data generated by the 3i
        consortium (www.immunophenotype.org) which was funded by Wellcome Trust
        grant [100156].&rdquo;
      </p>
      <h2>Data downloads</h2>
      <h3>Flow Cytometry</h3>
      <p>
        Please note: after few months into the project, we slightly modified
        some of the flow cytometry panels to harmonize them with the panels used
        across the IMPC. All flow cytometry data acquired within this initial
        period were analysed by manual gating only. The files generated after
        the change were additionally gated with an automated, semi-supervised
        approach. We provide manual gating results for all the files, automated
        gating for the IMPC-synced data and a mapping to which version of gating
        was used for the final immunophenotyping.
      </p>
      <h3>Blood</h3>
      <ul>
        <li>
          <a href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_blood.csv">
            Manual gating
          </a>
        </li>
      </ul>
      <h3>Spleen flow-cytometric data</h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/threei_new/3i_bulkDown_manualspleen_190423.csv"
            target="_blank"
            rel="noreferrer"
          >
            Manual gating (3783 mice)
          </a>
        </li>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/threei_new/3i_bulkDown_autospleen_190423.csv"
            target="_blank"
            rel="noreferrer"
          >
            Automated gating (3029 mice)
          </a>
        </li>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_spleen_gating%20reference.csv"
            target="_blank"
            rel="noreferrer"
          >
            Mapping of samples to gating used
          </a>
        </li>
      </ul>
      <h3>Mesenteric lymph node flow-cytometric data</h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/threei_new/3i_bulkDown_manualMLN_190423.csv"
            target="_blank"
            rel="noreferrer"
          >
            MLN manual gating (3526 mice)
          </a>
        </li>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/threei_new/3i_bulkDown_autoMLN_190423.csv"
            target="_blank"
            rel="noreferrer"
          >
            MLN automated gating (2837 mice)
          </a>
        </li>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_MLN_gating_reference.csv"
            target="_blank"
            rel="noreferrer"
          >
            MLN mapping of samples to gating used
          </a>
        </li>
      </ul>
      <h3>Bone marrow flow-cytometric data</h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/threei_new/3i_bulkDown_manualBM_190423.csv"
            target="_blank"
            rel="noreferrer"
          >
            BM manual gating (3476 mice)
          </a>
        </li>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/threei_new/3i_bulkDown_autoBM_190423.csv"
            target="_blank"
            rel="noreferrer"
          >
            BM automated gating (2767 mice)
          </a>
        </li>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_BM_gating_reference.csv"
            target="_blank"
            rel="noreferrer"
          >
            BM mapping of samples to gating used
          </a>
        </li>
      </ul>
      <h3>Ear epidermis</h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_ear_epidermis.csv"
            target="_blank"
            rel="noreferrer"
          >
            imaging data quantification
          </a>
        </li>
      </ul>
      <h3>Antinuclear antibody</h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_antinuclear_antibodies.csv"
            target="_blank"
            rel="noreferrer"
          >
            data
          </a>
        </li>
      </ul>
      <h3>Cytotoxic T cell</h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_cytotoxic_T_cells.csv"
            target="_blank"
            rel="noreferrer"
          >
            data
          </a>
        </li>
      </ul>
      <h3> DSS colitis</h3>

      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_DSS_histology.csv"
            target="_blank"
            rel="noreferrer"
          >
            Histology scores
          </a>
        </li>
      </ul>
      <h3>
        <em>Trichuris muris</em>
      </h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_trichuris.csv"
            target="_blank"
            rel="noreferrer"
          >
            data
          </a>
        </li>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_bulkDown_fluSalmTrich_190612/trichuris_for_bulkdownload_190612.csv"
            target="_blank"
            rel="noreferrer"
          >
            worm presence data
          </a>
        </li>
      </ul>
      <h3>Influenza</h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_bulkDown_fluSalmTrich_190612/flu_for_bulk_download_190612.csv"
            target="_blank"
            rel="noreferrer"
          >
            weight/death data
          </a>
        </li>
      </ul>
      <h3>Salmonella</h3>
      <ul>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_bulkDown_fluSalmTrich_190612/Salmonella_weights_for_bulkdownload_190612.csv"
            target="_blank"
            rel="noreferrer"
          >
            weight data
          </a>
        </li>
        <li>
          <a
            href="ftp://ftp.ebi.ac.uk/pub/databases/impc/3i/forwebsite/3i_bulkDown_fluSalmTrich_190612/Salmonella_Elisa_for_bulkdownload_190612.csv"
            target="_blank"
            rel="noreferrer"
          >
            Elisa data
          </a>
        </li>
      </ul>
      <h3>
        We are in the process of making the remaining data available as well.
      </h3>
    </Container>
  );
};
