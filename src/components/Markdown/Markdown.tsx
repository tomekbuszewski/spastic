import * as React from "react";
import MarkdownComponent from "react-markdown";

import { Heading, ListItem, Paragraph } from "@ui/Atoms";
import { List } from "@ui/Molecules";
import { scrollTo } from "@ui/helpers";

export const Markdown = (props: any) => (
  <MarkdownComponent
    escapeHtml={false}
    {...props}
    renderers={{
      // link: (innerProps: any) => { console.log(props, innerProps); return <a {...innerProps} {...props} />},
      linkReference: (innerProps: any) => (
        <a
          href={innerProps.href}
          onClick={() => scrollTo(innerProps.href.replace("#", ""))}
          {...innerProps}
        />
      ),
      paragraph: (innerProps: any) => <Paragraph {...innerProps} {...props} />,
      heading: (innerProps: any) => <Heading {...innerProps} {...props} />,
      list: (innerProps: any) => <List {...innerProps} {...props} />,
      listItem: (innerProps: any) => <ListItem {...innerProps} />,
    }}
  />
);