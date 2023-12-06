import { useState } from "react";

function ListGroup() {
  let items = ["new york", "san francisco", "tokyo", "london", "paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const message = items.length === 0 && <p>no items found</p>;

  const handleClick = (event: MouseEvent, index: number) => {
    setSelectedIndex(index);
    console.log(event);
  };
  return (
    <>
      <h1>list</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={(event) => handleClick(event, index)}
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
