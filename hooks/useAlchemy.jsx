import { useState, useEffect } from "react";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

export default function useAlchemy() {
  const [blockNumber, setBlockNumber] = useState(0);

  useEffect(() => {
    async function getBlock() {
      const web3 = createAlchemyWeb3(
        `${process.env.API_URL_ALCHEMY}/${process.env.API_KEY_ALCHEMY}`
      );
      const block = await web3.eth.getBlockNumber();
      setBlockNumber(block);
    }

    getBlock();
  }, [blockNumber]);

  return blockNumber;
}
