import HeartIcon from "./HeartIcon";
import { sizesArr } from "../data";
import { useState } from "react";

export default function ProductCard({ addItem, item, ...props }) {
  
  const [shoeSize, setshoeSize] = useState();

  const formattedNumber = item.price.toLocaleString();

  function handleSubmit(event){
    event.preventDefault();

    // const newItem = {size: shoeSize, ...item}
    // setbagItem([newItem]);
    // console.log(bagItem);

    addItem(item, shoeSize);
  }

  return (
    <div
      {...props}
      className="flex min-w-[45rem] snap-start font-sans bg-white rounded-lg overflow-hidden"
    >
      <div className="flex-none w-auto h-full aspect-square relative">
        <img
          src={`/${item.image}.png`}
          alt="Nike Go FlyEase"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {item.name}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            ₱{formattedNumber}
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            {item.description}
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-1">
          <p className="text-sm font-medium ">Select size</p>
          <div className="flex items-baseline mb-6 pb-6 border-b border-slate-200">
            <div className="gap-2 grid grid-cols-5 w-full text-sm">
              {sizesArr.map((size, index) => (
                <label key={index} className="relative">
                  <input
                    required
                    className="sr-only peer"
                    name="shoesize"
                    type="radio"
                    value={size}
                    checked={shoeSize == size}
                    onChange={()=>setshoeSize(size)}
                  />
                  <div className="w-14 h-9 cursor-pointer rounded-lg flex items-center justify-center 
                  text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white border border-slate-300">
                    {size}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
            >
              Add to bag
            </button>
            <button
              className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
              type="button"
            >
              <span className="flex gap-1 items-center justify-center">
                Favorite
                <HeartIcon width={`1.3rem`} height={`1.3rem`} strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
