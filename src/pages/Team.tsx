import React, { FunctionComponent } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Team: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">Team &amp; Collaborators</h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/project/">Project</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Team &amp; Collaborators</Breadcrumb.Item>
      </Breadcrumb>
      <p>
        This project wouldn&rsquo;t have been possible without the contribution
        of many, many people. In total, almost 30 people have been employed on
        this project, some for a maternity leave only, some for well over 5
        years and counting, working on it for well over 80 years total. And that
        doesn&rsquo;t even include all the time that PIs and senior staff
        members put in. Thank you to everybody for your hard work and
        dedication.
      </p>
      <h2>Team King's College</h2>
      <ul>
        <li>Project management</li>
        <li>Flow-cytometric analysis of spleen, MLN and bone marrow</li>
        <li>Confocal analysis of ear epidermis</li>
        <li>Bioinformatics</li>
      </ul>
      <p>
        Adrian Hayday (Lead-PI), Lucie Abeler-D&ouml;rner (project manager and
        team leader), Adam Laing (flow), Dmitry Ushakov (microscopy), Anna
        Lorenc (bioinformatics), Namita Saran (flow), Keng Imm Hng (microscopy
        and flow), Susana Caetano (flow and microscopy), Anna Chan (flow),
        Agnieszka Przemska-Kosicka (flow)
      </p>
      <h2>Team Sanger</h2>
      <ul>
        <li>
          Breeding, maintaining of all mice, collection of all organs and
          samples
        </li>
        <li>Flow-cytometric analysis of blood</li>
        <li>Haematology and blood biochemistry (IMPC)</li>
        <li>
          Performance of all challenge experiments (Salmonella, DSS colitis,
          influenza, Trichuris)
        </li>
        <li>Analysis of Salmonella challenge</li>
        <li>Analysis of Trichuris challenge</li>
        <li>Maintenance of database / export of all data to the IMPC</li>
        <li>Statistics</li>
      </ul>
      <p>
        David Adams (Lead-PI), Gordon Dougan (PI), Jacqui White (Mouse Genetics
        Project), Ramiro Ramirez-Solis (Mouse Genetics Project), Annie Speak
        (blood, haematology and blood biochemistry (BHBB)), Simon Clare
        (challenge experiments, Salmonella), Maria Duque (Trichuris), Emma
        Cambridge (BHBB), Susana Caetano (BHBB), Carmen Ballesteros Reviriego
        (BHBB), Heather Wilson (BHBB), Leanne Kane (Salmonella), Katherine
        Harcourt (challenge experiments), Cordelia Brandt (challenge
        experiments), George Notley (mouse maintenance), Natasha Strevens
        (BHBB), Mark Griffiths (database), David Melvin (database), Natasha Karp
        (statistics) and many, many people working in mouse breeding and
        maintenance.
      </p>
      <h2>Team Cambridge</h2>
      <ul>
        <li>Cytotoxicity of splenic CD8 T cells</li>
      </ul>
      <p>Gillian Griffiths (PI), Philippa Barton</p>
      <h2>Team Oxford I</h2>
      <ul>
        <li>Antinuclear antibodies in serum</li>
      </ul>
      <p>
        Richard Cornall (PI), Katherine Bull, Tanya Cheetham, Eleanor Cawthorne,
        Matthew Edmans
      </p>
      <h2>Team Oxford II</h2>
      <ul>
        <li>Analysis of DSS colitis</li>
      </ul>
      <p>
        Kevin Maloy (PI), Fiona Powrie, Bel&eacute;n Mor&oacute;n-Flores, George
        Song-Zhao
      </p>
      <h2>Team Manchester</h2>
      <ul>
        <li>Preparation of Trichuris eggs, Trichuris analysis</li>
      </ul>
      <p>Richard Grencis (PI), Simon Forman</p>
      <h2>Team Imperial</h2>
      <ul>
        <li>Influenza analysis</li>
      </ul>
      <p>Clare Lloyd (PI), Jua Iwasaki, Faith Uwadiae</p>
      <h2>Team New York</h2>
      <ul>
        <li>Tuberculosis and hepatitis C infection of selected strains</li>
      </ul>
      <p>William Jacobs Jr (PI), Brian Weinrick</p>
      <h2>Team Vancouver</h2>
      <ul>
        <li>Semi-automated and unsupervised flow analysis</li>
      </ul>
      <p>
        Ryan Brinkman (PI), Albina Rahim, Sybil Drissler, Justin Meskas, Alice
        Yue.
      </p>
      <h2>Team EBI</h2>
      <ul>
        <li>
          Website development, integration with IMPC website, data management
        </li>
      </ul>
      <p>
        Terry Meehan (PI), Jonathan Warren (project lead, data integration, web
        development), Kola Babalola (data integration), Jeremy Mason (data
        integration), Amrutha Meeniga (web development).
      </p>
      <p>
        {" "}
        In 2021 this website was completely re-done. The redesign and
        re-implementation of the website was done by Federico López Gómez.
      </p>
    </Container>
  );
};
