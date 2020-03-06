import React from 'react';
import './PlayerAnswer.scss';
import styled from 'styled-components';

function getBoxStyle(code) {
  return /[^{\}]+(?=})/.exec(code);
}

function PlayerAnswer(props) {
  const Box = styled.div`${getBoxStyle(props.code)}`;

  return (
    <section className='PlayerAnswer'>
      <Box className="box">
      </Box>
    </section>
  );
}

export default PlayerAnswer;
