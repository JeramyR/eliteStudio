import { forwardRef } from 'react';

function SectionDivider(props, ref) {
  return (
    <div ref={ref} className="section-divider">
      <div className="line" />
      <span className="divider-text">{props.text}</span>
      <div className="line" />
    </div>
  );
}

export default forwardRef(SectionDivider);
