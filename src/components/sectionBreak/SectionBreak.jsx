function SectionDivider(props) {
  return (
    <div className="section-divider">
      <div className="line-break" />
      <span className="divider-text">{props.text}</span>
      <div className="line-break" />
    </div>
  );
}

export default SectionDivider;
