const Photo = ({ image, width, height }) => {
  return (
    <>
      <div>
        <img
          src={`/images/${image}`}
          alt={`${image}`}
          width={width}
          height={height}
        />
      </div>
    </>
  );
};

export default Photo;
