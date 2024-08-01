import React from "react";
import Link from "next/link";

import Styles from "./Discover.module.css";

const Discover = () => {
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "NFT-Details",
    },
    {
      name: "Account settings",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },
    {
      name: "Connect wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <Link href={{ pathname: `${el.link}` }}>
          <div key={i} className={Styles.discover}>
            {el.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Discover;
