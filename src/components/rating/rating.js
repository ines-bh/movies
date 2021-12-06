import { Rate } from "antd";

const Rating = ({ Rating, isFilter, ratingValue, setRatingValue }) => {
  const handleChange = (value) => {
    setRatingValue(value);
  };
  return (
    <span>
      {isFilter ? (
        <Rate onChange={handleChange} value={ratingValue} />
      ) : (
        <Rate disabled value={Rating} />
      )}
    </span>
  );
};

export default Rating;
