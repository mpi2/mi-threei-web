import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";

export const Faq: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">FAQ - Frequently Asked Questions</h1>
      <h3>
        There is no such thing as a free lunch, so where&rsquo;s the catch?
      </h3>
      <p>
        There is no catch. The Wellcome Trust has invested this money to create
        a resource for the scientific community. In fact, we are not only paid
        to conduct the phenotyping but also to promote the uptake of mouse lines
        and the use of the phenotyping data we generate so please use this
        resource and let us know if you have any questions. Of course, the data
        is freely available, so your competitor will be able to look at it, too.
        We still think you get a really good deal by combining our data with
        your expert knowledge to create new hypotheses and by taking on
        gold-standard knockout mouse lines which have undergone stringent
        quality control from ES cells to final genotyping.
      </p>
      <h3>Can I order mice or ES cells?</h3>
      <p>
        The 3i consortium does not distribute any material itself, but mice and
        ES cells can be obtained from the International Mouse Phenotyping
        Consortium (IMPC). Type your gene of interest into the search box on
        www.mousephenotype.org and follow the link to ES cells or mice.
      </p>
      <h3>How can I access the raw data?</h3>
      <p>
        FCS files will shortly be available on&nbsp;
        <a href="https://flowrepository.org/" target="_blank" rel="noreferrer">
          FlowRepository
        </a>
        . DSS histology, ANA and ear epidermis images are available on the&nbsp;
        <a
          href="https://dev.mousephenotype.org/data/search/impc_images?kw=*"
          target="_blank"
          rel="noreferrer"
        >
          IMPC image portal
        </a>
        . Most of the remaining data can be downloaded as csv file in the Data
        Downloads section on this webpage.
      </p>
      <h3>Can I use 3i protocols for my own research?</h3>
      <p>
        Yes, the project is entirely open access. Protocols can be found in the
        Methods section. Please acknowledge the use of 3i protocols in your
        grants, posters, talks and publications: &ldquo;The protocol was
        developed by the 3i consortium (www.immunophenotype.org); Wellcome Trust
        grant [100156].&rdquo;
      </p>
      <h3>Can I use 3i data in a grant or paper?</h3>
      <p>
        Yes, the data is also open access. It is mandatory to acknowledge the
        consortium for the generation of the data: &ldquo;&ldquo;This project
        (or table/figure xxx) uses data generated by the 3i consortium
        (www.immunophenotype.org); Wellcome Trust grant [100156].&rdquo;
      </p>
      <h3>Can I send you my mice for phenotyping?</h3>
      <p>
        Unfortunately, we cannot phenotype external mice in the Sanger pipeline.
        However, we are aiming to provide all our protocols online to enable you
        to run a 3i-like phenotyping yourself. If you have any questions or
        would like to collaborate with any of the partners, please contact the
        members of the consortium directly or send an email to project manager
        Lucie Abeler-D&ouml;rner&nbsp;
        <a href="mailto:lucie.abeler-dorner@bdi.ox.ac.uk">Send email</a>.
      </p>
    </Container>
  );
};
