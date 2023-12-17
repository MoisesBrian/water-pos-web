import { OrderList } from "../../../model/OrderList";
import { ProductModel } from "../../../model/ProductModel";
import ProductCard from "./ProductCard";
import "./ProductSelection.css";
interface ProductSelectionProps {
  onClick: (
    item: Array<{
      title: string;
      price: string;
      id: string;
      purchase: boolean;
    }>
  ) => void;
}
const ProductSelection = ({ onClick }: ProductSelectionProps) => {
  return (
    <div
      className="card selection-body p-3"
      style={{ width: "100%", height: "89vh" }}
    >
      <ForRefill onClick={onClick}></ForRefill>
      <ForPurchase onClick={onClick}></ForPurchase>
    </div>
  );
};

export default ProductSelection;
interface ItemProps {
  onClick: (
    item: Array<{
      title: string;
      price: string;
      id: string;
      purchase: boolean;
    }>
  ) => void;
}
export const ForRefill = ({ onClick }: ItemProps) => {
  return (
    <div className="container col" style={{ width: "100%", height: "42vh" }}>
      <div className="row">
        <div className="col">
          <h5>For Refill</h5>
        </div>
        <hr />
        {/* <div className="col-10">
          <hr />
        </div> */}
      </div>
      <div className="wrap-container">
        {ProductModel.map((item) => (
          <ProductCard
            title={item.title}
            price={item.price}
            key={item.id}
            onSelect={() => {
              OrderList.push({
                title: item.title,
                price: item.price,
                id: item.id,
                purchase: true,
              });
              onClick([
                {
                  title: item.title,
                  price: item.price,
                  id: item.id,
                  purchase: true,
                },
              ]);
              // console.log(OrderList);
              // SelectedItems.add();
            }}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};
export const ForPurchase = ({ onClick }: ItemProps) => {
  return (
    <div className="container" style={{ width: "100%", height: "42vh" }}>
      <div className="row">
        <div className="col">
          <h5>For Purchase</h5>
        </div>
        <hr />
      </div>
      <div className="wrap-container">
        {ProductModel.map((item) => (
          <ProductCard
            title={item.title}
            price={item.price}
            key={item.id}
            onSelect={() => {
              OrderList.push({
                title: item.title,
                price: item.price,
                id: item.id,
                purchase: false,
              });
              onClick([
                {
                  title: item.title,
                  price: item.price,
                  id: item.id,
                  purchase: true,
                },
              ]);
              // console.log(OrderList);
              // SelectedItems.add();
            }}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};
