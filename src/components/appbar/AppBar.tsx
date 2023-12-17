import "./AppBar.css";
const AppBar = () => {
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()}`;
  return (
    <div className="header p-2">
      <div className="row header-content">
        <div className="col text-start">
          <h5>Hello, Raphael Isla!</h5>
        </div>
        <div className="col text-end">
          <h5>{formattedDate}</h5>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
