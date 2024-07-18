import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import React, { useContext } from "react";
import "./index.scss";

type IUser = {
  id: number;
  name: string;
  avatar: string;
};
export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({}) => {
  return (
    <>
      <header className="header-area">
        <div className="container">
          <div className="navbar_meme">
            <img
              src="https://theme.bitrixinfotech.com/meme-coin/assets/images/logo.png"
              alt="logo"
            />
          </div>
          <div className="navbar">
            <div className="nav-item">
              <div className="fontsize_navbar">HOME</div>
              <div className="fontsize_navbar">ABOUT</div>
              <div className="fontsize_navbar">WHERE TO BUY</div>
              <div className="fontsize_navbar">TOKENOMICS</div>
              <div className="fontsize_navbar">ROADMAP</div>
              <div className="fontsize_navbar">TOKEN</div>
              <div className="fontsize_navbar">CONTACT</div>
            </div>
            <div className="header-btn ms-3">
              <a className="btn btn-secondary" href="">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
