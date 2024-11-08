import { useState } from "react";
import Bag from "./components/Bag";
import Favorite from "./components/Favorite";
import ProductCard from "./components/ProductCard";
import { shoeProducts } from "./data";

function App(change) {
  
  const [bagItem, setbagItem] = useState([]);

  function handleAddtoBag(item, shoeSize) {
    setbagItem((prevVal)=> {
      const newItem = {size: shoeSize, ...item}

      return [...prevVal, newItem]
    });
    console.log(bagItem);
  }

  return (
    <>
      <main className="w-full h-full flex flex-col gap-5 px-10 justify-center">
        <div className="self-center flex flex-col items-center gap-2">
          <h1 className="font-black text-8xl">Midterm Exam</h1>
          <h2 className="text-xl">Talania, Gerard C.</h2>
        </div>
        <div className="flex gap-2 justify-center items-center mt-20 relative">
          <Favorite />
          <Bag items={bagItem}/>
        </div>
        <h4 className="uppercase text-xl font-bold">Shoes</h4>
        <div className="flex overflow-x-auto snap-x">
          {shoeProducts.map((item, index) => (
            <ProductCard item={item} key={index} addItem={handleAddtoBag} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;