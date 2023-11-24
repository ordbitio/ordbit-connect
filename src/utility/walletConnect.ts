import { Errors, WalletProvider } from "../common/enums";
import { WalletInfo } from "../common/interfaces";
import { CustomError } from "./customError";
import {
  AddressPurposes,
  GetAddressOptions,
  GetAddressResponse,
  getAddress,
} from "sats-connect";

export const connectUnisat = async (): Promise<WalletInfo | CustomError> => {
  const _window = window as any;

  if (typeof _window.unisat !== "undefined") {
    try {
      const currentAccount = await _window.unisat.requestAccounts();

      const walletInfo: WalletInfo = {
        ordinalAddress: currentAccount?.[0] || "",
        paymentAddress: currentAccount?.[0] || "",
        provider: WalletProvider.UNISAT,
      };

      return walletInfo;
    } catch (e) {
      return new CustomError(
        Errors.WALLET_CONNECTION_REQUEST_ERROR,
        "error connecting wallet"
      );
    }
  } else {
    return new CustomError(
      Errors.WALLET_EXTENSION_NOT_FOUND,
      "Unisat wallet extension not found"
    );
  }
};

export const connectXverse = async (): Promise<WalletInfo | CustomError> => {
  const _window = window as any;

  const walletInfo: WalletInfo = {
    ordinalAddress: "",
    paymentAddress: "",
    provider: WalletProvider.XVERSE,
  };

  if (typeof _window.BitcoinProvider !== "undefined") {
    try {
      let status: boolean = false;

      const getAddressOptions: GetAddressOptions = {
        payload: {
          purposes: [AddressPurposes.ORDINALS, AddressPurposes.PAYMENT],
          message: "Address for receiving Ordinals",
          network: {
            type: "Mainnet",
          },
        },
        onFinish: (response: GetAddressResponse) => {
          response.addresses.forEach((addr) => {
            if (addr.purpose === AddressPurposes.PAYMENT) {
              walletInfo.paymentAddress = addr.address;
            }
            if (addr.purpose === AddressPurposes.ORDINALS) {
              walletInfo.ordinalAddress = addr.address;
            }
          });

          if (
            walletInfo.ordinalAddress === "" ||
            walletInfo.paymentAddress === ""
          ) {
            return new CustomError(
              Errors.WALLET_CONNECTION_REQUEST_ERROR,
              "error connecting wallet"
            );
          }
          status = true;

          return walletInfo;
        },
        onCancel: () => {
          status = false;
          return new CustomError(
            Errors.WALLET_CONNECTION_REQUEST_ERROR,
            "error connecting wallet"
          );
        },
      };

      await getAddress(getAddressOptions);

      if (status) {
        return walletInfo;
      } else {
        return new CustomError(
          Errors.WALLET_CONNECTION_REQUEST_ERROR,
          "error connecting wallet"
        );
      }
    } catch (e) {
      return new CustomError(
        Errors.WALLET_CONNECTION_REQUEST_ERROR,
        "error connecting wallet"
      );
    }
  } else {
    return new CustomError(
      Errors.WALLET_EXTENSION_NOT_FOUND,
      "Xverse wallet extension not found"
    );
  }
};

export const connectLeather = async (): Promise<WalletInfo | CustomError> => {
  const _window = window as any;

  if (typeof _window.LeatherProvider !== "undefined") {
    try {
      const userAddresses = await _window.btc?.request("getAddresses");

      const taprootAddress = userAddresses.result.addresses.find((addr) => {
        return addr.symbol === "BTC" && addr.type === "p2tr";
      });

      const walletInfo: WalletInfo = {
        ordinalAddress: taprootAddress.address,
        paymentAddress: taprootAddress.address,
        provider: WalletProvider.LEATHER,
      };

      return walletInfo;
    } catch (e) {
      return new CustomError(
        Errors.WALLET_CONNECTION_REQUEST_ERROR,
        "error connecting wallet"
      );
    }
  } else {
    return new CustomError(
      Errors.WALLET_EXTENSION_NOT_FOUND,
      "Unisat wallet extension not found"
    );
  }
};

export const connectOkx = async (): Promise<WalletInfo | CustomError> => {
  const _window = window as any;

  if (typeof _window.okxwallet !== "undefined") {
    try {
      const currentAccount = await _window.okxwallet.bitcoin.connect();

      const walletInfo: WalletInfo = {
        ordinalAddress: currentAccount.address,
        paymentAddress: currentAccount.address,
        provider: WalletProvider.OKX,
      };
      return walletInfo;
    } catch (e) {
      return new CustomError(
        Errors.WALLET_CONNECTION_REQUEST_ERROR,
        "error connecting wallet"
      );
    }
  } else {
    return new CustomError(
      Errors.WALLET_EXTENSION_NOT_FOUND,
      "Unisat wallet extension not found"
    );
  }
};
