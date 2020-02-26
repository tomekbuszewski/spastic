import * as React from "react";
import MarkdownComponent from "react-markdown";

import { Heading, ListItem, Paragraph, CodeBlock, Blockquote } from "@ui/Atoms";
import { List } from "@ui/Molecules";
import { scrollTo } from "@ui/helpers";

export const Markdown = (props: any) => (
  <MarkdownComponent
    escapeHtml={false}
    {...props}
    renderers={{
      linkReference: (innerProps: any) => (
        <a
          href={innerProps.href}
          onClick={() => scrollTo(innerProps.href.replace("#", ""))}
          {...innerProps}
        />
      ),
      paragraph: (innerProps: any) => <Paragraph {...innerProps} {...props} />,
      heading: (innerProps: any) => <Heading {...innerProps} {...props} />,
      list: (innerProps: any) => <List {...innerProps} {...props} inArticle />,
      listItem: (innerProps: any) => <ListItem {...innerProps} />,
      code: (innerProps: any) => <CodeBlock {...innerProps} />,
      blockquote: (innerProps: any) => <Blockquote {...innerProps} />,
    }}
  />
);
