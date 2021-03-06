import * as React from "react";
import MarkdownComponent from "react-markdown";

import { LinkWrapper } from "@components/LinkWrapper";
import {
  Heading,
  ListItem,
  Paragraph,
  CodeBlock,
  Blockquote,
  HorizontalLine,
} from "@ui/Atoms";
import { List, Table } from "@ui/Molecules";
import { scrollTo } from "@ui/helpers";

export const Markdown = (props: any) => (
  <MarkdownComponent
    escapeHtml={false}
    {...props}
    renderers={{
      // linkReference: (innerProps: any) => (
      //   <a
      //     href={innerProps.href}
      //     onClick={e => {
      //       scrollTo(innerProps.href, e);
      //     }}
      //     {...innerProps}
      //   >
      //     {innerProps.children}
      //   </a>
      // ),
      // link: (innerProps: any) => <LinkWrapper {...innerProps} />,
      thematicBreak: (innerProps: any) => <HorizontalLine {...innerProps} />,
      paragraph: (innerProps: any) => <Paragraph {...innerProps} {...props} />,
      heading: (innerProps: any) => (
        <Heading {...innerProps} {...props} as={`h${innerProps.level}`} />
      ),
      list: (innerProps: any) => <List {...innerProps} {...props} inArticle />,
      listItem: (innerProps: any) => <ListItem {...innerProps} />,
      code: (innerProps: any) => <CodeBlock {...innerProps} />,
      blockquote: (innerProps: any) => <Blockquote {...innerProps} />,
      table: (innerProps: any) => <Table {...innerProps} />,
    }}
  />
);
