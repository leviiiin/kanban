import "./Header.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { useState } from "react";

const Header = () => {
  const { width } = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);

  const board_name = "Roadmap";
  return (
    <header className="header">
      {width <= 768 ? (
        <>
          <div className="header__mobile-left">
            <img className="logo__img" src="../../logo.svg" alt="logo" />
            <button
              className="header__mobile-btn"
              onClick={() => setShowMenu(true)}
            >
              <p className="header__board-name">{board_name}</p>
              {showMenu ? (
                <i className="bi bi-chevron-up header__mobile-btn__icon"></i>
              ) : (
                <i className="bi bi-chevron-down header__mobile-btn__icon"></i>
              )}
            </button>
          </div>
          <img src="../../dots.svg" alt="" />
        </>
      ) : (
        <>
          <div className="logo">
            <img className="logo__img" src="../../logo.svg" alt="logo" />
            <p className="logo__title">kanban</p>
          </div>
          <div className="header__flex">
            <img src="../../dots.svg" alt="" />
            <p className="header__board-name">{board_name}</p>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
