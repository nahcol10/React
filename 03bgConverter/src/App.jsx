import { useState } from "react";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div className="h-lvh w-full m-0 p-0 flex justify-center"
      style={{backgroundColor:color}}
    >
      <div className="fixed bottom-10 w-9/12 h-12
       bg-gray-200 p-4 flex justify-around items-center rounded-2xl">
        <div className="bg-blue-500 text-white w-24 h-8 text-center rounded-md flex items-center justify-center cursor-pointer"
          onClick={() => setColor('blue')}
        >
          Blue
        </div>
        <div className="bg-red-500 text-white w-24 h-8 text-center rounded-md flex items-center justify-center cursor-pointer"
          onClick={() => setColor('red')}
        >
          Red
        </div>
        <div className="bg-black text-white w-24 h-8 text-center rounded-md flex items-center justify-center cursor-pointer"
          onClick={() => setColor('black')}
        >
          Black
        </div>
        <div className="bg-orange-400 text-white w-24 h-8 text-center rounded-md flex items-center justify-center cursor-pointer"
          onClick={() => setColor('orange')}
        >
         Orange
        </div>
      </div>
    </div>
  );
}

export default App;
