import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

interface Props {
  words: string[];
}

const Roulette: React.FC<Props> = (props) => {
  const [prizeNumber] = useState(
    Math.floor(Math.random() * props.words.length)
  );

  const data = props.words.map((word) => {
    return { option: word };
  });

  return (
    <Wheel
      mustStartSpinning={true}
      prizeNumber={prizeNumber}
      data={data}
      backgroundColors={['#3e3e3e', '#df3428']}
      textColors={['#ffffff']}
      outerBorderColor={'white'}
      radiusLineColor={'white'}
    />
  );
};

export default Roulette;
