import React, { useEffect, useState } from "react";

function Compo2() {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + content)
      .then((response) => response.json())
      .then((json) => setItems(json));

    console.log("ComponentDidUpdate");
    return () => {
      // Clean Up Code
      console.log("Unmount");
    };
  }, [content]);
  return (
    <div>
      <h3> This Is Example Of UseEffect Hooks : </h3>
      <button onClick={() => setCount(count + 1)}> Count{count} </button>
      <button onClick={() => setContent("posts")}> Post </button>
      <button onClick={() => setContent("users")}> User </button>
      <button onClick={() => setContent("comments")}> Comments </button>
      <p> {content} </p>
      <p>
        
        {items &&
          items.map((item) => {
            return <a key={item.id}> {item.id} </a>;
          })}{" "}
      </p>
      <br />
      <br />
      ----------- The End of useEffect Method ----------
    </div>
  );
}

export default Compo2;
