import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import React, { useContext, useEffect, useState } from "react";
import "./index.scss";

type IUser = {
  id: number;
  name: string;
  avatar: string;
};
export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header-area ${isSticky ? "is-sticky" : ""}`}>
        <div className="container">
          <div className="navbar_meme">
            <img
              src="https://theme.bitrixinfotech.com/meme-coin/assets/images/logo.png"
              alt="logo"
            />
          </div>
          <div className="navbar">
            <ul className="nav-item">
              <li id="slide-right" className="fontsize_navbar">
                HOME
              </li>
              <li id="slide-right" className="fontsize_navbar">
                ABOUT
              </li>
              <li id="slide-right" className="fontsize_navbar">
                WHERE TO BUY
              </li>
              <li id="slide-right" className="fontsize_navbar">
                TOKENOMICS
              </li>
              <li id="slide-right" className="fontsize_navbar">
                ROADMAP
              </li>
              <li id="slide-right" className="fontsize_navbar">
                TOKEN
              </li>
              <li id="slide-right" className="fontsize_navbar">
                CONTACT
              </li>
            </ul>
            <div className="header-btn ms-3">
              <a className="btn btn-secondary" href="">
                Phu-Dev
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
