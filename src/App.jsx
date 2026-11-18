import React from "react";
import Navbar from "./assets/components/Navbar";
import Card from "./assets/components/Card";
import GetForm from "./assets/components/GetForm";
import { useState } from "react";
const App = () => {
  const [toogle, settoogle] = useState(false);
  const [data, setdata] = useState([]);

  function Deletecard(id) {
    setdata((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <>
      <Navbar settoogle={settoogle}></Navbar>
      {toogle ? (
        <div className="Cards flex  items-center m-4 gap-10">
          {data.map((element) => (
            <Card Deletecard={()=>Deletecard(id)} key={element.id} element={element}></Card>
          ))}
        </div>
      ) : (
        <div className="form">
          <GetForm settoogle={settoogle} setdata={setdata} />
        </div>
      )}
    </>
  );
};

export default App;
