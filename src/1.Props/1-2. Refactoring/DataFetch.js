function DataFetch({ getData }) {
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

  const onClick = () => {
    getData(data);
  };

  return (
    <>
      <button onClick={onClick}> 데이터 받아오기 </button>
    </>
  );
}
export default DataFetch;
