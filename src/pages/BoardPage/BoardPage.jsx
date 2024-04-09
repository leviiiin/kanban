import "./BoardPage.scss";
import { useState } from "react";
import Header from "../../layouts/Header/Header";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Board from "../../layouts/Board/Board";

const BoardPage = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="board-page">
      <Header sidebarVisible={showSidebar} />
      <div className="board-page__flex">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Board />
      </div>
    </div>
  );
};

export default BoardPage;
