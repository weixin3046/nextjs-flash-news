import { delayResponse } from "@/app/lib/mock";

export class CryptoApi {
  static async fetchCrypto(crypto: string): Promise<CryptoItem> {
    const cryptoResp: CryptoResponse = await (
      await fetch(`${process.env.NEXT_PUBLIC_CRYPO_BASE_URL}/assets/${crypto}`)
    ).json();
    return delayResponse(cryptoResp.data);
  }
}
