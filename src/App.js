import { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchItem == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
