import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { SECTIONS } from "@config/sections";

import {
  Grid,
  Heading,
  HEADING_SIZES,
  Paragraph,
  PARAGRAPH_VARIANTS,
  Section,
} from "@ui/Atoms";
import { MoreLink, Overlay, WorkItem } from "@ui/Molecules";

storiesOf("Demos/Sections", module).add("Work Experience", () => {
  const [visible, setVisible] = React.useState<number[]>([0, 1, 2]);
  const showMore = () => setVisible(vis => vis.map(i => i + 1));
  const showLess = () => setVisible(vis => vis.map(i => i - 1));

  return (
    <React.Fragment>
      {boolean("With overlay", true) && <Overlay />}
      <Section name={SECTIONS.EXPERIENCE}>
        <Grid
          gridColumnsMobile="1fr"
          gridColumnsTablet="repeat(4, 1fr)"
          as="article"
        >
          <Heading right padded size={HEADING_SIZES.NORMAL} tablet={[1, 3]}>
            Work Experience<u>.</u>
          </Heading>
          <Grid
            as="ul"
            mobile={[1, 5]}
            tablet={[1, 5]}
            gridColumnsTablet="repeat(4, 1fr)"
          >
            <nav>
              <Paragraph
                variant={PARAGRAPH_VARIANTS.BOLD}
                as={"button"}
                onClick={showLess}
                disabled={visible[0] <= 0}
              >
                less
              </Paragraph>
              <Paragraph
                as="button"
                variant={PARAGRAPH_VARIANTS.BOLD}
                onClick={showMore}
                disabled={visible[2] >= 6}
              >
                more
              </Paragraph>
            </nav>
            <WorkItem
              position={"Position 0"}
              work={"Workplace"}
              from={"2020.02"}
              to={"ongoing"}
              visible={visible.includes(0)}
            />
            <WorkItem
              position={"Position 1"}
              work={"Workplace"}
              from={"2020.02"}
              to={"ongoing"}
              visible={visible.includes(1)}
            />
            <WorkItem
              position={"Position 2"}
              work={"Workplace"}
              from={"2020.02"}
              to={"ongoing"}
              visible={visible.includes(2)}
            />
            <WorkItem
              position={"Position 3"}
              work={"Workplace"}
              from={"2020.02"}
              to={"ongoing"}
              visible={visible.includes(3)}
            />
            <WorkItem
              position={"Position 4"}
              work={"Workplace"}
              from={"2020.02"}
              to={"ongoing"}
              visible={visible.includes(4)}
            />
            <WorkItem
              position={"Position 5"}
              work={"Workplace"}
              from={"2020.02"}
              to={"ongoing"}
              visible={visible.includes(5)}
            />
            <WorkItem
              position={"Position 6"}
              work={"Workplace"}
              from={"2020.02"}
              to={"ongoing"}
              visible={visible.includes(6)}
            />
          </Grid>
          <MoreLink
            right
            hrefProps={{ download: true, href: "https://buszewski.com" }}
          >
            Get my résumé as .pdf<u>.</u>
          </MoreLink>
        </Grid>
      </Section>
    </React.Fragment>
  );
});
