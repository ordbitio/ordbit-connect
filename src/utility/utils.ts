import { WalletInfo } from "../common/interfaces";

export const isInstanceofWalletInfo = (data) => {
  const _temp = data as WalletInfo;
  return (
    _temp.ordinalAddress !== undefined &&
    _temp.paymentAddress !== undefined &&
    _temp.provider !== undefined
  );
};
