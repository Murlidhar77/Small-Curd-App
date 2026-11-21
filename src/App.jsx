import React from "react";
import Navbar from "./assets/components/Navbar";
import Card from "./assets/components/Card";
import GetForm from "./assets/components/GetForm";
import { useState } from "react";
const App = () => {
  const [update, setupdate] = useState(null)
  const [toogle, settoogle] = useState(false);
  const [data, setdata] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || [];
  });
  function Deletecard(id) {
    setdata((prev) => {
      let newarr = prev.filter((item) => item.id !== id);

      localStorage.setItem("user", JSON.stringify(newarr));

      return newarr;
    });
  }

  function Updatecard(updatedata) {
    setupdate(updatedata)
    settoogle(true)
  }
  return (
    <>
      <Navbar settoogle={settoogle}></Navbar>
      {toogle ? (
        <div className="form">
          <GetForm update={()=>update(updatedata)} settoogle={settoogle} setdata={setdata} data={data} />
        </div>
      ) : (
        <div className="Cards flex  items-center m-4 gap-10">
          {data.map((element) => (
            <Card
            Updatecard={Updatecard}
              Deletecard={() => Deletecard(element.id)}
              key={element.id}
              element={element}
            ></Card>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
