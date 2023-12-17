import { ReactNode, useState } from "react";
interface Props {
  items: string[];
  logo: ReactNode;
  onSelect: (item: string) => void;
}
const NavList = ({ items, logo, onSelect }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="text-center">
      {logo}

      <ul className="list-group list-group-flush pt-3">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
