import React from "react";

export default function Game(props) {
  const { join_id, players } = props;
  return (
    <div>
      <div>ID: {join_id}</div>

      <div className="flex">
        <div className="mr-10">
          {["", 15, 16, 17, 18, 19, 20, "bull"].map(value => {
            return <div className="score__item">{value}</div>;
          })}
        </div>
        {players.map(({ id, name, score }) => (
          <div key={id} className="mr-10">
            <div className="score__item">{name}</div>
            <div className="score__item">{score[15] || 0}</div>
            <div className="score__item">{score[16] || 0}</div>
            <div className="score__item">{score[17] || 0}</div>
            <div className="score__item">{score[18] || 0}</div>
            <div className="score__item">{score[19] || 0}</div>
            <div className="score__item">{score[20] || 0}</div>
            <div className="score__item">{score["bull"] || 0}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
