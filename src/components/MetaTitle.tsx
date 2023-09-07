import Head from 'next/head';
import { ReactElement } from 'react';

interface MetaTitleProps {
  page: string | undefined;
}

function MetaTitle({ page }: MetaTitleProps): ReactElement | null {
  if (!page) return null;

  return (
    <Head>
      <title>{`${page} - [NAME]`}</title>
    </Head>
  );
}

export default MetaTitle;
