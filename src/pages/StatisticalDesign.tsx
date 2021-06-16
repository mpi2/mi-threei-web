//@ts-nocheck
import React, { FunctionComponent } from "react";
import { Accordion, Card, Container, Breadcrumb } from "react-bootstrap";
import TableauReport from "tableau-react-embed";
import { Link } from "react-router-dom";
export const StatisticalDesign: FunctionComponent = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5">Statistical Design</h1>
      <Breadcrumb className="bg-white">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/methods">Methods</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Statistical Design</Breadcrumb.Item>
      </Breadcrumb>
      <p>
        Due to different work flows, we use different statistical tests to
        determine if the phenotyping results of a knockout line differ from the
        wild type mice. The two main approaches we are using are a reference
        range approach for continuous data and a Fisher’s exact test for
        categorical data.
      </p>
      <p>
        Our statistical analysis is designed to differentiate as efficiently as
        possible between lines that show a phenotype and lines that do not.
        However, the criteria for calling a hit are very stringent, in order to
        make sure that when you order a mouse in, the phenotype we have observed
        will hold up. The other side of the coin is that we are likely to miss
        true hits, i.e. have a higher number of false negatives. Therefore we
        encourage you to take a look at the raw data for phenotypes you are
        interested in and judge for yourself if a borderline case might actually
        be a true phenotype, even if it hasn't met our very stringent
        statistical criteria.
      </p>
      <p>
        For every candidate hit identified in the high-throughput analysis, we
        went back to the underlying raw data (FCS files for flow cytometry etc)
        for the candidate strain and appropriate controls and a final call was
        made by an expert in the field.
      </p>
      <Accordion>
        {statisticalMethods.map((stat, index) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
              {stat.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}`}>
              <Card.Body>{stat.content}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <h2 className="mt-5 mb-3">Hit calling for specific assays</h2>
      <Accordion>
        {hitAssays.map((stat, index) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
              {stat.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}`}>
              <Card.Body>{stat.content}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <TableauReport url="https://public.tableau.com/views/MapoftheMouseImmuneSystem/3iFlowData?:embed=y&:display_count=y&:showTabs=y&:origin=viz_share_link" />
    </Container>
  );
};

const statisticalMethods = [
  {
    title: "Reference range",
    content: (
      <>
        <p>
          All tests from the observational screen are carried out on mice of the
          main Sanger phenotyping pipeline. An average of 84 mice are phenotyped
          every week on two separate days. Due to operational reasons, wild type
          controls are only processed on one of these days. Knockout mice enter
          the pipeline according to their age and mice from one strain are
          phenotyped on at least two different days to avoid any day effects.
          Due to this set-up, knockout mice cannot be compared to controls on
          the same day. Using daily controls would also not take advantage of
          the many wild type data points that are collected over time.
        </p>
        <p>Hence we wanted an approach which would:</p>
        <ol>
          <li>allow to use wild-type controls accumulated during the study</li>
          <li>
            allow to test also samples from days when controls were not tested
          </li>
          <li>be robust to any outliers and mitigate batch effects</li>
          <li>would work for assays with small number of animals per strain</li>
          <li>allow sex-specific testing</li>
        </ol>
        <p>
          Therefore we decided to use reference range (RR) approach to analyse
          the data.
        </p>
        <p>
          Data from at least 70 wild type mice was used to generate a reference
          range. Knockout lines are considered to be significantly different
          from wild type mice if 60% of the mice for this strain lie outside the
          middle 95% of wild type data points, i.e. if they lie above the 97.5th
          or below the 2.5th percentile of the wild type data. For assays with 2
          or 3 mice per gender, separate RRs are constructed for male and female
          mice, but hits are only called if 60% of samples across both genders
          are outside their respective reference ranges (3 out of 4 or 4 out of
          6). For assays with at least 4 mice per gender (Blood flow cytometry),
          males and females are assessed fully separately.
        </p>
        <p>
          For flow cytometry assays of tissues other than blood, we constructed
          time-window reference range (TRR), by comparing each KO mouse to at
          least 70 WT of matching sex closest in time and combining relation to
          TRR (&ldquo;within&rdquo;, &ldquo;above&rdquo;, &ldquo;below&rdquo;)
          across all KO mouse from a strain.
        </p>
        <p>
          The reference range approach does not take into account the actual
          distribution of the knockout data, therefore a p-value cannot be
          calculated. Assuming that all samples are independent of each other,
          false positive rates vary between 1 in 4.8 million for 7 mice per
          gender per knockout line (e.g. 16 week blood) and 1 in 16,000 for 4
          mice per knockout line (e.g. for cytotoxicity).
        </p>
      </>
    ),
  },
  {
    title: "Fisher’s exact test",
    content: (
      <>
        <p>
          The screen for antinuclear antibodies in serum and the test for worm
          burden in Trichuris infection have a very different data structure
          than the other assays, as wild types are usually negative and
          positivity is a strong indication for an abnormal phenotype. These
          assays are therefore analysed with the categorical Fisher&rsquo;s
          exact test.
        </p>
        <p>
          Even though the intensity of antinuclear antibody is quantified on a
          continuous scale, the main readout is the presence or absence of
          antibody staining. The data is split into negative (scores 0-1) and
          positive samples (scores 2-5) and analysed categorically. Similarly,
          worms in the cecum could be counted to assess worm burden, but the
          more important finding is that worms are present at all.
        </p>
      </>
    ),
  },
];

const hitAssays = [
  {
    title:
      "Flow-cytometric analysis of spleen, mesenteric lymph nodes, and bone marrow",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>
          Cell numbers for each population, expressed as percentage of parent
          gate, percentage of CD45+ cells.
        </p>
        <h3>Statistical test:</h3>
        <p>
          Sex-specific, time-window reference range (TRR), manual verification
          of candidate hits
        </p>
        <h3>Details</h3>
        <p>
          Reference ranges were constructed using the 70 wt mice of the same sex
          that were closest in time (TRR). Cell subset measurements for all mice
          are available to download from the &ldquo;More data&rdquo; tab. Data
          and code used for identification of candidate hits are available on
          github. Final calls were made by an experienced researcher after
          reanalysis of the data in FlowJo.
        </p>
        <p>
          The project started in late autumn 2013. In mid-2014, we decided to
          change the original antibody panels to make them more compatible with
          the IMPC panels and to replace a few antibodies that had not been
          working as well as expected. For the T cell panel, this change
          happened on 9th of June 2014, for the B cell panel on 15th of
          September 2014. Data collected before and after the panel changes are
          not directly comparable and were analysed separately (constructing
          separate reference ranges before and after the panel change).
          &nbsp;&nbsp;
        </p>
        <p>
          We were aware at the start of the project that manual gating of all
          FCS files would be very time-consuming and started immediately to
          explore different algorithms to automate the gating process. However,
          quality control of ongoing phenotyping meant that we still had to gate
          all files manually before the automated gating was in place. We
          eventually teamed up with&nbsp;
          <a href="http://www.terryfoxlab.ca/people-detail/ryan-brinkman/">
            Ryan Brinkman&rsquo;s team in Vancouver
          </a>
          . and developed a semi-supervised gating algorithm for all our panels
          except blood after the initial panel change in summer 2014. Getting
          this right and performing the required validations took longer than
          anticipated and we therefore ended up with a complete set of manually
          gated data and an almost complete set of data gated automatically with
          a semi-supervised algorithm. Both datasets are available in the data
          download section.
        </p>
        <p>
          Data sent to the IMPC for graphing on the website is based on manual
          gating. For the consortium publication, we reanalysed all available
          data with the semi-supervised algorithm and refined the hit calling
          accordingly. Hits displayed online are therefore based on manual
          gating but verified with automated gating. We found that automated
          gating reduced temporal drift in many parameters but had not a huge
          impact on the hit calling as the reference range only calls extreme
          phenotypes. For further analysis, especially for potential phenotypes
          that have not made our stringent cut-off criteria, we recommend using
          the automated data wherever possible.
        </p>
        <p>
          Automated semi-supervised gating Computational gating was performed by
          Ryan Brinkman&rsquo;s team with&nbsp;
          <a href="https://www.bioconductor.org/packages/release/bioc/html/flowClean.html">
            flowClean
          </a>
          , UFO, and&nbsp;
          <a href="https://www.bioconductor.org/packages/release/bioc/html/flowDensity.html">
            flowDensity
          </a>
          &nbsp;. FlowClean was used to perform acquisition-based quality
          checking to remove anomalous events. Files with fewer than 20,000
          events were removed from further analysis. UFO was used to identify
          outlier samples (e.g., batch effects). FlowDensity was used to
          enumerate cell populations by automating a predefined gating approach
          using sequential, supervised bivariate gating analysis to set the best
          cut-off for an individual marker using characteristics of the density
          distribution. The parameters for each individual cell population were
          pre-defined once for all files. The automated analysis data was
          validated against matched manually analysed data.
        </p>
      </>
    ),
  },
  {
    title: "Flow-cytometric analysis of blood",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>
          Cell numbers for each population, expressed as percentage of parent
          gate and as absolute numbers
        </p>
        <h3>Statistical test:</h3>
        <p>
          Sex-specific reference range, manual verification of candidate hits
        </p>
        <h3>Details</h3>
        <p>
          Cell subset measurements for all mice are available to download from
          the &ldquo;More data&rdquo; tab. Data and code used for identification
          of candidate hits are available on&nbsp;
          <a
            href="https://github.com/AnnaLorenc/3i_heatmapping"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          . Final calls were made by an experienced researcher after reanalysis
          of the data in FlowJo.
        </p>
        <p>
          The blood data was analysed by us and by the IMPC. The reference range
          approach has been used extensively by WTSI and 3i, but is currently
          not available as a test in the IMPC statistical pipeline. The IMPC has
          therefore analysed the same blood data using a mixed model approach
          which is less stringent and leads to more hits. Hits in blood
          immunophenotyping will therefore differ between this webpage and the
          IMPC webpage. Our approach is more conservative and very unlikely to
          contain false positive results. The IMPC analysis offers an assessment
          of which genes score a hit with a less stringent statistical approach.
        </p>
      </>
    ),
  },
  {
    title: "Microscopic analysis of immune cells in the ear epidermis",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>
          Number of cells per field of view, percentage of interacting cells,
          cell volume, cell shape (roundness), number and length of dendrites
        </p>
        <h3>Statistical test:</h3>
        <p>
          Reference range, manual verification of candidate strains Measurements
          for all mice are available to download from the &ldquo;More
          data&rdquo; tab. Data and code used for identification of candidate
          hits are available on&nbsp;
          <a
            href="https://github.com/AnnaLorenc/3i_heatmapping"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          . Final calls were made by an experienced researcher after
          reinspection of the raw and processed data in Definiens Developer.
        </p>
      </>
    ),
  },
  {
    title: "Cytotoxicity of splenic CD8 T cells",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>
          Cytotoxicity is expressed as percent killing in comparison to the
          positive control, data is generated for five different effector:target
          ratios
        </p>
        <p>&nbsp;</p>
        <h3>Statistical test:</h3>
        <p>Reference range</p>
        <h3>Details:</h3>
        <p>
          Since the assay generates a curve consisting of different
          target:effector ratios rather than a single value, a curve is
          considered to be outside the reference range if three consecutive
          values lie outside their reference range interval. Data for all mice
          is available to download from the &ldquo;More data&rdquo; tab.
        </p>
      </>
    ),
  },
  {
    title: "Antinuclear antibodies (ANA)",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>Scores corresponding to intensity of antibody staining</p>
        <h3>Statistical test</h3>
        <p>Fisher&rsquo;s exact test</p>
        <h3>Details:</h3>
        <p>
          Approximately 10% of wild type mice show a positive staining for
          antinuclear antibodies. Against this background, 4 out of 6 samples
          for a given knockout line need to be positive to reach a p-value below
          0.01. Data for all mice is available to download from the &ldquo;More
          data&rdquo; tab.
        </p>
      </>
    ),
  },
  {
    title: "Influenza challenge",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>
          Weight loss: Percentage of reduction in body weight compared to the
          start of the experiment, from daily weight measurements Survival:
          Number of mice having to be sacrificed because of excessive weight
          loss before the end of the experiment
        </p>
        <h3>Statistical test:</h3>
        <p>
          Mixed model with concurrent wt controls for weight loss,
          Fisher&rsquo;s exact test for the number of sacrificed mice
        </p>
        <h3>Details:</h3>
        <p>
          Weight loss hits were identified by fitting a robust mixed model
          (corresponding to two-way Anova) with a p-value cut-off of 0.0001, in
          comparison to concurrent wt controls, taking into account sex and
          genotype, using the R package&nbsp;
          <a href="http://bioconductor.org/packages/release/bioc/html/PhenStat.html">
            Phenstat
          </a>
          . Residuals were assumed to be normally distributed. Calls were made
          when a genotype has a significant main effect on weight loss.
        </p>
      </>
    ),
  },
  {
    title: "Salmonella challenge",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>
          Colony forming units (CFU) of bacteria cultured on LB agar isolated
          from spleen and liver homogenates, titers of antigen-specific
          antibodies in serum measured by ELISA
        </p>
        <h3>Statistical approach:</h3>
        <p>Mann-Whitney-U test</p>
        <h3>Details:</h3>
        <p>
          Hits were identified by a Mann-Whitney-U test with a p-value cut-off
          of 0.05 in comparison to concurrent WT controls. The analysis combined
          data from male and female mice. Significant lines were retested with a
          second cohort. A final call was made on the combined data from both
          experiments.
        </p>
      </>
    ),
  },
  {
    title: "Trichuris challenge",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>Presence or absence of worms in the cecum as categorical measure</p>
        <h3>Statistical test:</h3>
        <p>Fisher&rsquo;s exact test</p>
        <h3>Details:</h3>
        <p>
          Wild type mice clear a Trichuris muris infection completely. Presence
          of worms in the cecum at day 33 therefore indicates a higher
          susceptibility. Approximately 10% of wild type mice have a low number
          of worms in the cecum at day 33. Against this background, 4 out of 6
          samples for a given knockout line need to be positive to reach a
          p-value below 0.01. Data for all mice is available to download from
          the &ldquo;More data&rdquo; tab.
        </p>
      </>
    ),
  },
  {
    title: "DSS challenge",
    content: (
      <>
        <h3>Type of data:</h3>
        <p>
          Histology scores: Histology sections from mid and distal colon are
          assessed in four different categories indicating damage to the gut.
          Categories are scored individually (each on scale 0-3) and combined as
          a total score. Weight loss: Percentage of reduction in body weight
          compared to the start of the experiment, from the daily weight
          measurements. Survival: Number of mice having to be sacrificed because
          of excessive weight loss before the end of the experiment.
        </p>
        <p>
          Weight loss: Percentage of reduction in body weight compared to the
          start of the experiment, from the daily weight measurements.
        </p>
        <p>
          Survival: Number of mice having to be culled because of excessive
          weight loss before the end of the experiment.
        </p>
        <h3>Statistical test:</h3>
        <p>
          Weight loss/ histology scores: sex-matched reference range, 70
          individuals closest in starting weight (histology) or age (weight
          loss).
        </p>
        <p>
          Survival: Fisher&rsquo;s exact test with a p-value cut-off of 0.01,
          comparing the frequency of sacrificed mice in a mutant strain with the
          wt population, combining data from both sexes.
        </p>
        <h3>Details</h3>
        <p>
          Measurements for all mice are available to download from the
          &ldquo;More data&rdquo; tab. Data and code used for identification of
          candidate hits are available on&nbsp;
          <a
            href="https://github.com/AnnaLorenc/3i_heatmapping"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          . Final calls were made by an experienced researcher after
          reinspection of the raw and processed data.
        </p>
      </>
    ),
  },
];
