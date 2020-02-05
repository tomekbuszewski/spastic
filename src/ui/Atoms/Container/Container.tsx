/**
 * @author tomekbuszewski
 * @since 2020-02-05 12:34:05
 */

import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

const Container = (props: Props) => (
  <div>{props.children}</div>
);

export {
  Container,
}