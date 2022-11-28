import { useState } from "react";

const data = [
  {
    id: "1",
    comment: "first data",
  },
  {
    id: "2",
    comment: "second data",
  },
  {
    id: "3",
    comment: "third data",
  },
];

function BeforePostPage() {
  const [postItem, setPostItem] = useState();

  const getData = () => {
    setPostItem(data);
  };

  return (
    <>
      {postItem &&
        postItem.map((postData) => (
          <div>
            <h2>{postData.id}</h2>
            <span>{postData.comment}</span>
          </div>
        ))}

      <button onClick={getData}> 데이터 받아오기 </button>
    </>
  );
}
export default BeforePostPage;
