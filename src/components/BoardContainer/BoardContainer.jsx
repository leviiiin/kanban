import { useState } from "react";
import "./BoardContainer.scss";

const BoardContainer = () => {
  const [activeBoard, setActiveBoard] = useState(0);
  const boards = ["Board - 1", "Board - 2", "Board - 3"];

  const handleBoardClick = (index) => {
    setActiveBoard(index === activeBoard ? null : index);
  };

  return (
    <div className="board-container">
      <p className="all-board">All boards ({boards.length})</p>
      <div className="board__list">
        {boards.map((board, i) => (
          <div
            key={i}
            className={`board__item ${i === activeBoard ? "active-board" : ""}`}
            onClick={() => handleBoardClick(i)}
          >
            {i === activeBoard ? (
              <img src="../../page-white-icon.png" alt="icon" />
            ) : (
              <img src="../../page-icon.png" alt="icon" />
            )}
            <p key={i} className={`${i === activeBoard ? "active-board" : ""}`}>
              {board}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardContainer;
