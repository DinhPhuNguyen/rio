import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import React, { useContext } from "react";
import "./index.scss";

export const Main: React.FC<RefineThemedLayoutV2HeaderProps> = ({}) => {
  return (
    <main className="main">
      <section className="main_container slider__bg position-relative">
        <div className="main_flex">
          <div className="main_left">
            <div className="main_conten">
              <h6 className="sub_title">About Tokens</h6>
              <h2 className="title">MEME Coins</h2>
              <h3>Meet around the globe</h3>
              <p>
                Welcome to the ultimate web destination for the hottest,
                trendiest, and most feature-packed cryptocurrency! We've got you
                covered with the latest memes, online community buzz, and
                everything social media has to offer. Say hello to the ultimate
                meme coin experience
              </p>
            </div>
            <div></div>
          </div>
          <div className="main_right">
            <img src="https://theme.bitrixinfotech.com/meme-coin/assets/images/slider/slider_img01.png" />
          </div>
        </div>
      </section>
      <section className="count-area position-relative">
        <div className="section_container">
          <div className="count-main d-flex justify-content-between">
            <div className="count-box text-center">
              <span>TOTAL SUPPLY</span>
              <h2>10B+</h2>
            </div>
            <div className="count-box text-center">
              <span>BUY TAX</span>
              <h2>0+</h2>
            </div>
            <div className="count-box text-center">
              <span>SELL TAX</span>
              <h2>0%</h2>
            </div>
            <div className="count-box text-center">
              <span>BUY BACK</span>
              <h2>2%+</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
