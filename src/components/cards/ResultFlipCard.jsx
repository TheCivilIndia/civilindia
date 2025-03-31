
import './FlipCard.css'; // Assuming the CSS is saved in the same folder

const FlipCard = ({ item }) => {
  return (
    <div className="flip-card my-7 mx-auto flex flex-col gap-4 ">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={item.img} alt="front" className="flip-card-img w-full " />
          {/* <p className="title pb-5">{item.name}</p> */}
        </div>
        <div className="flip-card-back">
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
