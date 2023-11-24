import { css } from "lit";

export const OrdbitWalletCardStyles = css`
  :host {
    --wallet-card-bg-color: grey;
  }

  .wallet-card-container {
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 100px;
    align-items: center;
    background-color: var(--wallet-card-bg-color);
    border-radius: 0.8rem;
    justify-content: space-between;
    padding: 0.8rem;
    overflow: hidden;
  }

  #wallet-icon {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 0.8rem;
  }

  #connect-btn {
    background-color: #3cb371;
    border: none;
    border-radius: 0.5rem;
    padding: 4px 10px 4px 10px;
    cursor: pointer;
  }
`;
