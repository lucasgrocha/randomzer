import React from 'react';

interface Props {
  word: string;
}

const Word: React.FC<Props> = (props) => {
  return (
    <span>
      { props.word }
    </span>
  );
}

export default Word;