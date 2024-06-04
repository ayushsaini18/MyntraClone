import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
function Home() {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((displayItem) => (
          <HomeItem item={displayItem} key={displayItem.id} />
        ))}
      </div>
    </main>
  );
}

export default Home;
