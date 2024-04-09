import "./SidebarToggle.scss";

const SidebarToggle = ({ show, setShow }) => {
  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <button
      className={`sidebar-toggle ${!show ? "sidebar-close" : ""}`}
      onClick={toggleSidebar}
    >
      {show ? (
        <>
          <i className="bi bi-eye-slash sidebar-toggle__icon"></i>
          <p className="sidebar-toggle__close-text">Hide Sidebar</p>
        </>
      ) : (
        <>
          <i className="bi bi-eye-fill sidebar-toggle__icon"></i>
        </>
      )}
    </button>
  );
};

export default SidebarToggle;
