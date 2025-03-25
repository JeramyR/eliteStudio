function SectionDivider({ text }) {
  return (
    <div className="section-divider">
      <div className="line" />
      <span className="divider-text">{text}</span>
      <div className="line" />
    </div>
  );
}

export default SectionDivider;
