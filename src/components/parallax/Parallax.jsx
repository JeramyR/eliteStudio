const image = ['/images/bg-parallax-1.webp', '/images/bg-parallax-2.webp'];

function Parallax() {
  return (
    <div className="parallax-container">
      <div
        className="parallax-image"
        style={{
          backgroundImage: `url("${image[0]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
}

export default Parallax;
