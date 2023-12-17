import "./ProductCard.css";
interface Props {
  title: string;
  price: string;
  onSelect: () => void;
}
const ProductCard = ({ title, price, onSelect }: Props) => {
  return (
    <div className="card item" style={{ width: "12rem" }} onClick={onSelect}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <h6 className="card-subtitle mb-2 text-body-secondary">
          Card subtitle
        </h6> */}
        <p className="card-text">Price: P{price}</p>
        {/* <a href="#" className="card-link">
      Card link
    </a>
    <a href="#" className="card-link">
      Another link
    </a> */}
      </div>
    </div>
  );
};

export default ProductCard;
