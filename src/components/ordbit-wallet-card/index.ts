import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OrdbitWalletCardStyles } from "./styles";
import {
  EWalletConnectFailed,
  EWalletConnectModalClosed,
  EWalletConnectSuccess,
} from "../../utility/customEvent";
import { WalletProvider } from "../../common/enums";
import {
  connectLeather,
  connectOkx,
  connectUnisat,
  connectXverse,
} from "../../utility/walletConnect";
import { WalletInfo } from "../../common/interfaces";
import { CustomError } from "../../utility/customError";
import { isInstanceofWalletInfo } from "../../utility/utils";

@customElement("ordbit-wallet-card")
export class OrdbitWalletCard extends LitElement {
  static override styles = OrdbitWalletCardStyles;

  @property()
  name;

  @property()
  imageUrl;

  @property()
  extensionUrl;

  @property()
  config;

  @property()
  provider;

  private async _handleWalletEventPublish(data: WalletInfo | CustomError) {
    if (isInstanceofWalletInfo(data)) {
      this.dispatchEvent(EWalletConnectSuccess(data as WalletInfo));
    } else if (data instanceof CustomError) {
      this.dispatchEvent(EWalletConnectFailed(data));
    }

    this.dispatchEvent(EWalletConnectModalClosed({}));
  }

  private async _handleConnectWallet() {
    let connectionState: WalletInfo | CustomError;

    switch (this.provider) {
      case WalletProvider.UNISAT:
        connectionState = await connectUnisat();
        this._handleWalletEventPublish(connectionState);
        break;

      case WalletProvider.XVERSE:
        connectionState = await connectXverse();
        this._handleWalletEventPublish(connectionState);
        break;

      case WalletProvider.LEATHER:
        connectionState = await connectLeather();
        this._handleWalletEventPublish(connectionState);
        break;

      case WalletProvider.OKX:
        connectionState = await connectOkx();
        this._handleWalletEventPublish(connectionState);
        break;
    }
  }

  protected override render() {
    return html`
      <div class="wallet-card-container">
        <div>
          <img id="wallet-icon" src=${this.imageUrl} />
        </div>
        <div>
          <button id="connect-btn" @click=${this._handleConnectWallet}>
            Connect
          </button>
        </div>
      </div>
    `;
  }
}
