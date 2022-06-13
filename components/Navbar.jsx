import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { useWindowSize } from "react-use";
import { BsChevronDown, BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import ethIcon from "../assets/icon/ethereum-logo.png";
import uniswapLogo from "../assets/icon/uniswap.png";

export default function Navbar() {
  const { width } = useWindowSize();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        {width > 1200 && mounted ? (
          <>
            <Image
              className={styles.logo}
              width={50}
              height={50}
              src={uniswapLogo}
              alt="uniswap logo"
            />
            <Link href="/">Overview</Link>
            <Link href="/tokens/tokens" as="/tokens">
              <a className={styles.leftToken}>Tokens</a>
            </Link>
          </>
        ) : (
          <>
            <Image
              className={styles.logo}
              width={60}
              height={60}
              src={uniswapLogo}
              alt="uniswap logo"
            />
            <div className={styles.leftResponsive}>
              <Link href="/">Overview</Link>
              <Link href="/tokens/tokens" as="/tokens">
                <a className={styles.leftToken}>Tokens</a>
              </Link>
            </div>
          </>
        )}
      </div>

      <div className={styles.right}>
        {width > 1200 && mounted ? (
          <>
            <div className={styles.dropdown}>
              <div className={styles.cryptoLogo}>
                <Image
                  width={20}
                  height={20}
                  src={ethIcon}
                  alt="ethereum icon"
                />
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
          </>
        ) : (
          <>
            <div className={styles.rightResponsive}>
              <div className={styles.dropdown}>
                <div className={styles.cryptoLogo}>
                  <Image
                    width={20}
                    height={20}
                    src={ethIcon}
                    alt="ethereum icon"
                  />
                </div>
                Ethereum
                <div className={styles.chevron}>
                  <BsChevronDown />
                </div>
              </div>

              <div className={styles.menu}>
                <BsThreeDots />
              </div>
            </div>
            <input
              className={styles.searchBar}
              type="text"
              placeholder="Search pools or tokens"
            />
          </>
        )}
      </div>
    </div>
  );
}
