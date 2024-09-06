import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [length, setLength] = useState(12);
  let [allowNumber, setAllowNumber] = useState(false);
  let [allowCharacter, setAllowCharacter] = useState(false);
  let [password, setPassword] = useState("");
  let passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (allowNumber) {
      str += "0123456789";
    }
    
    if (allowCharacter) {
      str += "`!@#$%^&*()-+{}[]?><";
    }
    
    for (let i = 0; i < length; i++) {
      // Correct the index calculation
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }

    setPassword(pass);
  }, [length, allowNumber, allowCharacter]);
  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumber, allowCharacter]);
  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className="h-lvh w-full bg-black flex justify-center items-center">
        <div className="h-1/5 w-3/5 rounded-3xl" style={{ backgroundColor: "#4b6584", minHeight: "150px"}}>
          <div>
            <input
              type="text"
              readOnly
              name="password"
              id="password"
              className="p-2 rounded-l-lg"
              value={password} // Display the generated password
              ref={passRef}
              style={{ width: "75%", margin: "1.25rem 0em 1.25rem 1.25rem", outline: "none" }}
            />
            <button className="bg-blue-900 w-1/6 p-2 rounded-r-lg text-1xl"
              onClick={copyToClipboard}
            >copy</button>
          </div>
          <div className="flex justify-around">
            <div style={{ width: "40%" }} className="flex justify-center items-center">
              <input
                type="range"
                max={49}
                min={8}
                value={length}
                id="range"
                className="w-1/2 mr-2 cursor-pointer"
                onChange={(e) => setLength(parseInt(e.target.value))} // Parse value as a number
              />
              <label htmlFor="range">Length({length})</label>
            </div>
            <div style={{ width: "25%" }}>
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                onChange={() => {
                  setAllowNumber((prev) => !prev);
                }}
                checked={allowNumber} // Use checked instead of defaultChecked
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="numbers">Numbers</label>
            </div>
            <div style={{ width: "25%" }}>
              <input
                type="checkbox"
                name="characters"
                id="characters"
                onChange={() => {
                  setAllowCharacter((prev) => !prev);
                }}
                checked={allowCharacter} // Use checked instead of defaultChecked
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="characters">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
