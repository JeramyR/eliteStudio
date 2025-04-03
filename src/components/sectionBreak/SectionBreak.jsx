function SectionDivider({ text, level = 'h3' }) {
  const HeadingTag = level;
  return (
    <HeadingTag className="section-divider">
      <div className="line-break" />
      <span className="divider-text">{text}</span>
      <div className="line-break" />
    </HeadingTag>
  );
}

export default SectionDivider;
