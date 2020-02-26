/**
 * @author tomek
 * @since 2020-02-25 09:05:18
 */

import * as React from "react";
import Prism from "prismjs";

import { Markdown } from "@components";
import { HEADING_SIZES, PARAGRAPH_VARIANTS, Grid } from "@ui/Atoms";

interface Props {
  source: string;
}

const ArticleBody = (props: Props) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Grid gridColumnsDesktop="repeat(8, 1fr)">
      <Markdown
        source={props.source}
        variant={PARAGRAPH_VARIANTS.TEXT}
        size={HEADING_SIZES.ARTICLE}
        padded
      />
    </Grid>
  );
};

export { ArticleBody };
