import React from "react";

type BazProps = {
  sauce: string;
  children?: React.ReactNode;
};

export const Baz: React.FC<BazProps> = (props) => {
  const { sauce, children } = props;

  return <div data-stuff={sauce}>{children}</div>;
};

type FooProps = {
  baz?: React.ReactElement<BazProps, typeof Baz>;
};

export const Foo: React.FC<FooProps> = (props) => {
  const { baz: Bar } = props;

  return <div>{Bar && <div>{Bar}</div>}</div>;
};

export const Bar = () => (
  <div>
    <Foo baz={<Baz sauce="stuff" />} />
    <Foo baz={<p>Hello</p>} />
  </div>
);
