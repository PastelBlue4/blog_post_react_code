import { useState } from "react";
import DataFetch from "./DataFetch";

function PostPage() {
  const [postItem, setPostItem] = useState();

  const getData = (data) => {
    setPostItem(data);
  };

  return (
    <>
      {postItem &&
        postItem.map((postData, index) => (
          <div key={index}>
            <h2>{postData.id}</h2>
            <span>{postData.comment}</span>
          </div>
        ))}
      <DataFetch getData={getData} />
    </>
  );
}
export default PostPage;
