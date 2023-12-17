import { OrderList } from "../../model/OrderList";
import "./PointOfSale.css";
import ProductSelection from "./itemSelection/ProductSelection";
import OrderSummary from "./orderSummary/OrderSummary";
import { useState } from "react";
const PointOfSale = () => {
  const [orderList, setOrderList] = useState(OrderList);
  return (
    <div className="row mt-3">
      <div className="col-7 main">
        <ProductSelection
          onClick={() => {
            // setOrderList(OrderList);
            setOrderList([...OrderList]);
            console.log("MAIN", orderList);
          }}
        ></ProductSelection>
      </div>
      <div className="col-5 order">
        <OrderSummary data={orderList}></OrderSummary>
      </div>
    </div>
  );
};

export default PointOfSale;
