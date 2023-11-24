import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ButtonStyles } from "./styles";

@customElement("ordbit-connect-button")
export class OrdbitButton extends LitElement {
  constructor() {
    super();
  }

  static override styles = ButtonStyles;

  @property({ type: Boolean })
  disabled = false;

  @property()
  loading = false;

  @query("#connect-modal-dialog") _connectModal!: HTMLDialogElement;

  private _handleClick() {
    this.disabled = true;
    this._connectModal.showModal();
  }

  private _handleClose(e) {
    this._connectModal.close();
    this.disabled = false;
    e.stopPropagation();
  }

  override render() {
    return html`
      <button @click=${this._handleClick} ?disabled="${this.disabled}">
        <slot></slot>
      </button>
      <dialog
        id="connect-modal-dialog"
        @WALLET_CONNECT_MODAL_CLOSED=${this._handleClose}
      >
        <ordbit-connect-modal id="connect-modal" />
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ordbit-button": OrdbitButton;
  }
}
