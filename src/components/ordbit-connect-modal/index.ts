import { CSSResultGroup, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ConnectModalStyles } from "./styles";
import { EWalletConnectModalClosed } from "../../utility/customEvent";
import { WalletProvider } from "../../common/enums";

@customElement("ordbit-connect-modal")
export class OrdbitConnectModal extends LitElement {
  static override styles?: CSSResultGroup | undefined = ConnectModalStyles;

  @property()
  showModal = false;

  protected handleClose() {
    const closeEvent = EWalletConnectModalClosed({});

    this.dispatchEvent(closeEvent);
  }

  protected override render() {
    return html`
      <div class="modal-container">
        <div class="heading-container">
          <div></div>

          <div id="heading"><span>Connect Wallet</span></div>

          <div id="modal-close-btn" @click=${this.handleClose}>Close</div>
        </div>

        <div class="available-wallets-container">
          <div class="wallet-item">
            <ordbit-wallet-card
              imageUrl="https://static.ordbit.io/wallets/unisat-icon.png"
              provider=${WalletProvider.UNISAT}
            />
          </div>
          <div class="wallet-item">
            <ordbit-wallet-card
              imageUrl="https://static.ordbit.io/wallets/xverse-icon.png"
              provider=${WalletProvider.XVERSE}
            />
          </div>
          <div class="wallet-item">
            <ordbit-wallet-card
              imageUrl="https://static.ordbit.io/wallets/okx-icon.png"
              provider=${WalletProvider.OKX}
            />
          </div>
          <div class="wallet-item">
            <ordbit-wallet-card
              imageUrl="https://static.ordbit.io/wallets/leather-icon.png"
              provider=${WalletProvider.LEATHER}
            />
          </div>
        </div>
      </div>
    `;
  }
}
