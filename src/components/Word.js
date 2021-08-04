import React from 'react';

const Word = (props) => {

  const { id, en, pl } = props;

  return (
    <><h3>{'Word nr ' + id}</h3>
      <h4>{'Word in english: ' + en.toUpperCase()}</h4>
      <h4>{'Word in polish: ' + pl}</h4>
    </>
  )
}

export default Word;