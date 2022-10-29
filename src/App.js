import React, { useEffect, useState } from "react";
import InsertTODO from "./InsertTODO";
import { getToDB } from "./PouchDB";
import TODOLIST from "./TODOLIST";

const App = () => {
  const [itemsList, setItemsList] = useState([]);

  async function getToDBFun() {
    const data = await getToDB();
    setItemsList(data?.rows);
  }

  useEffect(() => {
    getToDBFun();
  }, []);
  return (
    <div>
      <InsertTODO getToDBFun={getToDBFun} />
      <TODOLIST itemsList={itemsList} getToDBFun={getToDBFun} />
    </div>
  );
};

export default App;
