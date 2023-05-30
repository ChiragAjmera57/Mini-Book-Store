import NonFiction from "./components/NonFiction";
import Fiction from "./components/Fiction";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

function App() {

  const [button,setbutton] = useState(true)
  const changename = () => {
    setbutton(false)
    document.getElementById('condition').textContent = ""
    const roo = ReactDOM.createRoot(document.getElementById('condition'));
roo.render(
  <React.StrictMode>
    <NonFiction />
   
  </React.StrictMode>
);
  };
  const changename2 = () => {
    setbutton(true)
    document.getElementById('condition').textContent = ""
    const roo2 = ReactDOM.createRoot(document.getElementById('condition'));
roo2.render(
  <React.StrictMode>
     <Fiction />
  </React.StrictMode>
);
  };
  return (
    <div>
      <h1>Mini Book Store</h1>


    {button?(<button onClick={() => changename()} data-testid="toggle-btn">
        Show Non-Fiction Books
      </button>):<button onClick={() => changename2()} data-testid="toggle-btn">
      Show Fictional Books
      </button>}


      
      <div id="condition" data-testid="conditional-container">
      
      </div>
    </div>
  );
}

export default App;
