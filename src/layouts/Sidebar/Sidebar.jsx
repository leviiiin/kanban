import "./Sidebar.scss";
import useWindowSize from "../../hooks/useWindowSize";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import SidebarToggle from "../../components/SidebarToggle/SidebarToggle";
import { useState } from "react";
import BoardContainer from "../../components/BoardContainer/BoardContainer";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowSize();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setShowSidebar(!showSidebar);
  };

  if (width < 768) return null;

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
      <BoardContainer />
      <div>
        <ThemeToggle />
        <SidebarToggle show={sidebarOpen} setShow={toggleSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
