import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
import { BsChevronDown, BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import ethIcon from "../assets/icon/ethereum-logo.png";
import uniswapLogo from "../assets/icon/uniswap.png";

export default function Navbar() {
  const stylesSwitchButton = {
    buttonActive: {
      backgroundColor: "black",
      color: "white",
    },
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Image
          className={styles.logo}
          width={60}
          height={60}
          src={uniswapLogo}
          alt="uniswap logo"
        />
        <Link href="/">Overview</Link>
        <Link href="/tokens/tokens" as="/tokens">
          <a className={styles.leftToken}>Tokens</a>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.dropdown}>
          <div className={styles.cryptoLogo}>
            <Image width={20} height={20} src={ethIcon} alt="ethereum icon" />
          </div>
          Ethereum
          <div className={styles.chevron}>
            <BsChevronDown />
          </div>
        </div>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search pools or tokens"
        />
        <div className={styles.menu}>
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
}
