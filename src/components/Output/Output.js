import React from 'react';
import './Output.scss';
import Style from 'style-it';

const Output = React.forwardRef((props, ref) => {
  return (
    <section className='Output'>
      {
        Style.it(
          `${props.style}`,
          <div className='box' ref={ref}/>)
      }
    </section>
  );
});

export default Output;
