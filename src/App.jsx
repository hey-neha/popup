import { useState } from "react";
import "./App.css";

import ModelOne from "./Components/ModelOne";

function App() {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <button className="btn-open"
        onClick={() => {
          setShowModel(true);
        }}
      >
        Open Model
      </button>
      {showModel ? (
        <ModelOne showModel={showModel} setShowModel={setShowModel} />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
