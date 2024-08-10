import React from 'react';
import { intl } from '@spuxx/js-utils';

export default function App(): React.ReactElement {
  return (
    <>
      <h1>{intl('app.title')}</h1>
    </>
  );
}
