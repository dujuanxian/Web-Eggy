import React from 'react';
import './Output.scss';
import styled from 'styled-components';

function getBoxStyle(code) {
  return /[^{\}]+(?=})/.exec(code);
}

const Output = React.forwardRef((props, ref) => {
  const Box = styled.div`${getBoxStyle(props.code)}`;

  return (
    <section className='Output'>
      <Box className="box" ref={ref} />
    </section>
  );
});

export default Output;
