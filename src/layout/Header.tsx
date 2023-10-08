"use client";
// base
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
// pullic json
import Saler from "../../public/saler.json";
// lodash
import { map } from "lodash";
// components
import Logo from "@/compound/logo/Logo";
//  icons
import { Fragment } from "react";
import {
  CgSearch,
  HiOutlineShoppingBag,
  IoLocationSharp,
  TbHeart,
  VscBell,
} from "../compound/icons/index";
import HeaderMobile from "./Header-mobile";
import { MENU_LIST } from "./constains";

interface IPropsSaler {
  id: number;
  label: string;
}

export const Header = () => {
  const DataSaler = Saler.saler;

  return (
    <Fragment>
      {/* header mobile */}
      <HeaderMobile />
      {/* header desktop */}
      <header className="site-header ">
        <div className="top-menu-wrapper">
          <div className="top-menu container">
            <div />
            <div className="slides">
              <Swiper
                navigation={true}
                loop
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
              >
                {map(DataSaler, (item: IPropsSaler) => (
                  <SwiperSlide key={item.id}>
                    <h6 className="top-menu-slide">
                      {item.label} <span>details</span>
                    </h6>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="actions">
              <button className="action">Login</button>
              <button className="action">SignUp</button>
              <div className="action -location">
                <IoLocationSharp />
                VietNam
              </div>
            </div>
          </div>
        </div>
        {/* NavBar */}
        <div className="main-menu container">
          <div className="nav">
            <div className="wrapper">
              <Logo />
              <ul className="main-menu-list">
                {map(MENU_LIST, ({ label, route }) => (
                  <li className="item" key={label}>
                    <Link title={label} className="link" href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="search-site">
            <div className="field">
              <CgSearch size={20} />
              <input type="text" placeholder="What are you looking for ?" />
            </div>
            <div className="icons">
              <button type="button" className="header-icon-item">
                <VscBell size={24} />
              </button>
              <button type="button" className="header-icon-item">
                <HiOutlineShoppingBag size={24} />
              </button>
              <button type="button" className="header-icon-item">
                <TbHeart size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};