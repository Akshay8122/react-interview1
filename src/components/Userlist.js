import React from "react";
import useApi from "../hooks/useApi";

function Userlist() {
  const { data, isLoading } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {/* <button onClick={fetchData}>Fetch</button> */}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

export default Userlist;
