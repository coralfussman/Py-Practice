interface CardProps {
  name: string;
  img: string;
  count: string;
  key: string;
}
function Card({ name, img, count }: CardProps) {
  return (
    <div className="card">
      <div className="row m-2 justify-between">
        <h2 className="m-1">{name}</h2>
        <p className="m-1">♡</p>
      </div>
      <div className="location_img">
        <p className="overlay-text ">{count} volunteer effort</p>
        <img src={img} width="200px" alt="img" />
      </div>
    </div>
  );
}
export default Card;
