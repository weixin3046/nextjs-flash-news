import { CryptoApi } from "@/app/api/crypto-api";
import { CryptoNews as CryptoNewsClient } from "@/app/components/CryptoNews/CryptoNews.client";

export async function CryptoNews() {
  const crypto = await CryptoApi.fetchCrypto("bitcoin");
  return (
    crypto && (
      <>
        <CryptoNewsClient initialData={crypto} />
      </>
    )
  );
}
