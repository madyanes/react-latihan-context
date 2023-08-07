import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
import Posts from '../components/Posts';

function Tutorial() {
  const { locale } = React.useContext(LocaleContext)

  return (
    <>
      <h1>Tutorial</h1>
      <Posts locale={locale} />
    </>
  );
}

export default Tutorial;
