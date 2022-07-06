import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <PageHeader title="🍌 Banana Auction Machine" subTitle={
        <span>
          <a href={"https://github.com/scaffold-eth/scaffold-eth-challenges/tree/banana-auction-machine"} target="_blank">fork/code</a>
        </span>
      } style={{ cursor: "pointer" }} />
    </a>
  );
}
