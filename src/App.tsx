import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new york", "san francisco", "tokyo", "london", "paris","new york", "san francisco", "tokyo", "london", "paris","new york", "san francisco", "tokyo", "london", "paris","new york", "san francisco", "tokyo", "london", "paris"];

  const handleSelection = (item:string)=>{
    console.log(item)
  }
  
  return (
    <div>
      <ListGroup items={items} heading="cities" onSelectItem={handleSelection}/>
    </div>
  );
}
export default App;
