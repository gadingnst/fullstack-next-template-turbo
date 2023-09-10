 
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { NextPageProps } from 'shared/@types/global';
import Image from 'shared/components/base/Images/Image';
import useMounted from 'shared/hooks/useMounted';

import styles from './AboutWrapper.client.module.css';

interface AboutWrapperProps {
  searchParams: NextPageProps['searchParams'];
}

function AboutWrapper(props: PropsWithChildren<AboutWrapperProps>) {
  const { children, searchParams } = props;
  const [maintainer, setMaintainer] = useState('');

  useMounted(() => {
    const Aborter = new AbortController();
    fetch('https://api.quran.gading.dev/', { signal: Aborter.signal })
      .then(raw => raw.json())
      .then(data => { setMaintainer(data.maintaner); });
    return () => {
      Aborter.abort();
    };
  });

  return (
    <div className="flex justify-center items-center w-full mb-10">
      <main className="mt-10">
        <h1 className="text-center text-xl mb-10">
          {maintainer || 'Loading...'}
        </h1>

        <div className={styles.avatar}>
          <Image
            alt="Sutan Gading Fadhillah Nasution"
            effect="blur"
            size={200}
            src="https://gading.dev/assets/images/authors/gading-talks.jpeg"
            wrapperClassName="rounded-full overflow-hidden cursor-grab active:cursor-grabbing"
          />
        </div>

        <div className="flex items-center justify-center my-8 flex-col">
          <p>
            Passed Query:
          </p>
          <p>
            {JSON.stringify(searchParams)}
          </p>
          <Link className="text-fuchsia-400 text-center mt-5 hover:underline underline-offset-4" href="/">
            Back to Homepage
          </Link>
        </div>

        {children}
      </main>
    </div>
  );
}

export default AboutWrapper;
