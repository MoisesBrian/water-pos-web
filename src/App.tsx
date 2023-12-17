import "./App.css";
import NavList from "./components/NavList";
import AppBar from "./components/appbar/AppBar";
import PointOfSale from "./pages/pointOfSale/PointOfSale";
import svg from "/src/assets/react.svg";
const App = () => {
  const items = ["Point of Sale", "Customers", "Inventory", "Meter Reading"];
  return (
    <div className="row">
      <div className="col-2">
        <NavList
          items={items}
          onSelect={() => {}}
          logo={<img src={svg} alt="My SVG File" width="100" height="100" />}
        ></NavList>
      </div>
      <div className="col-10" style={{ background: " #bbeeff" }}>
        <AppBar></AppBar>
        <div className="page">
          <PointOfSale></PointOfSale>
        </div>
      </div>
    </div>
  );
};

export default App;
