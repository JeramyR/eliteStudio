function SectionTitle({ text, level = 'h2' }) {
  const HeaderTag = level;
  return <HeaderTag className="section-title-container">{text}</HeaderTag>;
}

export default SectionTitle;
