import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  // return <div className="m-auto max-w-7xl lg:max-w-7xl md:max-w-4xl">{children}</div>;
  return <div className="py-4 px-6">{children}</div>;
}

export default Container;