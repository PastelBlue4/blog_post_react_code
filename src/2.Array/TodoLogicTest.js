import React, { useState } from "react";

export const TodoLogicTest = () => {
  const [testArray, setTestArray] = useState([
    { id: 1, category: "todo", contents: "do something 1 " },
    { id: 2, category: "todo", contents: "do something 2 " },
    { id: 3, category: "todo", contents: "do something 3 " },
  ]);

  console.log(testArray);

  const onCategoryChange = (newCategory, index) => {
    let newArray = [...testArray];
    newArray[index].category = newCategory;
    setTestArray(newArray);
  };

  return (
    <>
      {testArray.map((data, index) => (
        <div key={index + 223}>
          <div>id : {data.id}</div>
          <div>컨텐츠 : {data.contents}</div>
          <div>카테고리 : {data.category}</div>
          <button
            onClick={() => {
              onCategoryChange("done", index);
            }}
          >
            done
          </button>

          <button
            onClick={() => {
              onCategoryChange("todo", index);
            }}
          >
            todo
          </button>
        </div>
      ))}
    </>
  );
};
