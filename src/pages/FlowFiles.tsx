import React, { FunctionComponent } from "react";
import { Container } from "react-bootstrap";

export const FlowFiles: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">Flow Files</h1>
      <p>
        We phenotyped the blood of over 12,700 mice, and spleen mesenteric lymph
        nodes and bone marrow of over 3400 mice. Using one panel for bone
        marrow, two panels for blood, three panels for mesenteric lymph nodes
        and three to four panels for spleen, we generated over 50,000 FCS files.
        We are in the process of making all FCS files available on
        FlowRepository&nbsp;
        <a href="https://flowrepository.org/" target="_blank" rel="noreferrer">
          https://flowrepository.org
        </a>
        . See links below for managable data files for download.
      </p>
      <ul>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYXF"
            target="_blank"
            rel="noreferrer"
          >
            Myeloid cell panel spleen
          </a>
        </li>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYXB"
            target="_blank"
            rel="noreferrer"
          >
            T cell panel mesenteric lymph node
          </a>
        </li>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYX9"
            target="_blank"
            rel="noreferrer"
          >
            T cell panel spleen IMPC
          </a>
        </li>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYXG"
            target="_blank"
            rel="noreferrer"
          >
            Myeloid cell panel mesenteric lymph node
          </a>
        </li>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYXN"
            target="_blank"
            rel="noreferrer"
          >
            IMPC P2 panel spleen
          </a>
        </li>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYXQ"
            target="_blank"
            rel="noreferrer"
          >
            Bone marrow panel
          </a>
        </li>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYXE"
            target="_blank"
            rel="noreferrer"
          >
            B cell panel mesenteric lymph node
          </a>
        </li>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYPJ"
            target="_blank"
            rel="noreferrer"
          >
            PBMC panel1
          </a>
        </li>
        <li>
          <a
            href="https://flowrepository.org/id/FR-FCM-ZYPK"
            target="_blank"
            rel="noreferrer"
          >
            PBMC panel2
          </a>
        </li>
      </ul>
      <p>
        Please contact project manager Lucie Abeler-D&ouml;rner if you any
        questions about the data&nbsp;
        <a href="mailto:lucie.abeler-dorner@bdi.ox.ac.uk">Send email</a>. To
        learn more about panels, antibodies and protocols, please have a look at
        the Methods section on this webpage. If you are interested in fancy flow
        analysis, also have a look at our semi-supervised analysis project under
        &ldquo;New cell types&rdquo;.
      </p>
    </Container>
  );
};
