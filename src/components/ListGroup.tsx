import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const message = items.length === 0 && <p>no items found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent, index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={(event) => {
              handleClick(event, index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
