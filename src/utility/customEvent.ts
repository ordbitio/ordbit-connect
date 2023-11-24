import { CustomEvents } from "../common/enums";
import { WalletInfo } from "../common/interfaces";
import { CustomError } from "./customError";

export const EWalletConnectSuccess = (detail: WalletInfo) => {
  return new CustomEvent(CustomEvents.WALLET_CONNECT_SUCCESS, {
    bubbles: true,
    composed: true,
    detail,
  });
};

export const EWalletConnectFailed = (detail: CustomError) => {
  return new CustomEvent(CustomEvents.WALLET_CONNECT_FAILED, {
    bubbles: true,
    composed: true,
    detail,
  });
};

export const EWalletConnectModalOpened = (detail) => {
  return new CustomEvent(CustomEvents.WALLET_CONNECT_MODAL_OPENED, {
    bubbles: true,
    composed: true,
    detail,
  });
};

export const EWalletConnectModalClosed = (detail) => {
  return new CustomEvent(CustomEvents.WALLET_CONNECT_MODAL_CLOSED, {
    bubbles: true,
    composed: true,
    detail,
  });
};
