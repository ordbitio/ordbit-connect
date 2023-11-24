import { WalletProvider } from "./enums";

export interface WalletInfo {
  ordinalAddress: string;
  paymentAddress: string;
  provider: WalletProvider;
}
