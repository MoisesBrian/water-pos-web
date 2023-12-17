import Button from "../../../components/Button";
import "./OrderSummary.css";
interface Props {
  data: Array<{
    title: string;
    price: string;
    id: string;
    purchase: boolean;
  }>;
}
const OrderSummary = ({ data }: Props) => {
  return (
    <div className="container card text-center p-3" style={{ height: "89vh" }}>
      <h5>Order Summary</h5>
      <div className="customer-details">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Customer name"
          aria-label="default input example"
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Customer address"
          aria-label="default input example"
        />
      </div>
      <div className="summary-content">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>No.</th>
              <th>item</th>
              <th>service</th>
              <th>QTY</th>
              <th>unit price</th>
              <th>sub price</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.purchase ? "Purchase" : "Refill"}</td>
                <td>1</td>
                <td>{item.price}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container p-3 row">
        <div className="col">
          <Button
            color="danger"
            onPressed={() => {
              console.log("cancel/clear button!");
            }}
            child={"Cancel/Clear"}
          ></Button>
        </div>{" "}
        <div className="col">
          <Button
            color="primary"
            onPressed={() => {
              console.log("confirm button!");
            }}
            child={"Confirm/Pay"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
