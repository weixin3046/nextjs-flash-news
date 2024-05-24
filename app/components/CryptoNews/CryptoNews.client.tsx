"use client";

import { useEffect, useState } from "react";
import { CryptoApi } from "@/app/api/crypto-api";

export function CryptoNews(p: { initialData: CryptoItem }) {
  const [crypto, setCrypto] = useState<CryptoItem>(p.initialData);
  const fetchCrypto = async () => {
    const cryptoResponse = await CryptoApi.fetchCrypto("bitcoin");
    setCrypto(cryptoResponse);
  };
  useEffect(() => {
    fetchCrypto();
    const intervalId = setInterval(fetchCrypto, 20000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    crypto && (
      <div>
        <div>
          <div>{crypto.name}</div>
          <div>{crypto.priceUsd}</div>
          <div>{crypto.changePercent24Hr}</div>
        </div>
      </div>
    )
  );
}
