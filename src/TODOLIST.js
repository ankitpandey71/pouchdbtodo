import React, { useEffect, useState } from "react";
import { getToDB, removeToDB } from "./PouchDB";

const TODOList = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    getToDBFun();
  }, []);

  async function getToDBFun() {
    const data = await getToDB();
    setItemsList(data?.rows);
    // console.log("getToDBFun");
    // console.log("itemsList mai hain ", data.rows, "comingitems");
    // return itemsList;
  }

  const removeTodo = (ref) => {
    const newTodo = itemsList.filter((item) => item.id !== ref);
    setItemsList(newTodo);
    removeToDB(ref);
  };

  return (
    <div>
      <ul className="ml-5">
        {itemsList.map((itemvalue) => {
          return (
            <div className="space-y-5 flex space-x-5 items-center">
              <div className="items-center">
                <li className="mt-3">{itemvalue.doc.task}</li>
              </div>
              <div className=" space-x-5 space-y-2">
                <button onClick={() => removeTodo(itemvalue.id)}>X</button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TODOList;
