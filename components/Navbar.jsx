import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
import { BsChevronDown, BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import ethIcon from "../assets/icon/ethereum-logo.png";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div>L</div>
        <Link href="#">Overview</Link>
        <Link href="#">Pools</Link>
        <Link href="/tokens">
          <a className={styles.leftToken}>Native Tokens</a>
        </Link>
        <Link href="/tokens">
          <a className={styles.leftToken}>CW-20 Tokens</a>
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
