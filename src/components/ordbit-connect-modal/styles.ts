import { css } from "lit";

export const ConnectModalStyles = css`
  :host {
    --connect-wallet-modal-border: none;
    --connect-wallet-modal-bg: none;
    --connect-wallet-modal-bg-color: none;
    --connect-wallet-modal-bg-color: rgba(10, 10, 10, 0.8);
    --connect-wallet-modal-heading-font-size: 1.5rem;
    --connect-wallet-modal-font-family: Calibri;
    --connect-wallet-modal-heading-font-color: #fff;
    --connect-wallet-modal-font-color: #fff;
  }

  #modal-close-btn {
    cursor: pointer;
  }

  #modal-close-btn:hover {
    color: red;
  }

  .modal-container {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 300px;
    background-color: var(--connect-wallet-modal-bg-color);
    border-radius: 1rem;
    padding: 1rem;
    justify-content: start;
    align-items: center;
    box-shadow: 0 0 15px 2px #000;
    color: var(--connect-wallet-modal-font-color);
  }

  .heading-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
  }

  span {
    font-size: var(--connect-wallet-modal-heading-font-size);
    font-family: var(--connect-wallet-modal-font-family);
    font-weight: bold;
    color: var(--connect-wallet-modal-heading-font-color);
  }

  .available-wallets-container {
    width: 100%;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .wallet-item {
    overflow: hidden;
  }
`;
