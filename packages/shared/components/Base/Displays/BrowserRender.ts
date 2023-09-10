'use client';

import { type PropsWithChildren, type ReactNode, useState } from 'react';

import useMounted from 'shared/hooks/useMounted';

interface BrowserRenderProps {
  placeholder?: ReactNode;
}

function BrowserRender({ children, placeholder }: PropsWithChildren<BrowserRenderProps>) {
  const [onClient, setOnClient] = useState(false);

  useMounted(() => {
    setOnClient(true);
  });

  return onClient ? children : placeholder;
}

export default BrowserRender;
