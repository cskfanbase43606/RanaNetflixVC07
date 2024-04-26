import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

const List = ({ title, param }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchData(param).then((res) => setListData(res.data.results));
  }, [param]);

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{title}</h2>
        <div className="col">
          <div className="row__posters">
            {listData.map((item) => (
              <img
                className="row__poster row__posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
