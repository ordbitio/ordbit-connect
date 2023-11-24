import { css } from "lit";

export const ButtonStyles = css`
  :host {
    background-color: none;
    --btn-bg-color: orange;
    --btn-border: none;
    --btn-border-radius: 1rem;
    --btn-box-shadow: 0 0 5px #000;
    --btn-width: 10rem;
    --btn-height: 3rem;
    --btn-modal-backdrop-bg: none;
    --btn-modal-backdrop-border: none;
    --btn-modal-backdrop-color: none;
  }

  button {
    background-color: var(--btn-bg-color);
    width: var(--btn-width);
    height: var(--btn-height);
    border-radius: var(--btn-border-radius);
    font-size: 1.2rem;
    border: var(--btn-border);
    cursor: pointer;
    box-shadow: var(--btn-box-shadow);
  }

  button:hover {
    box-shadow: var(--btn-box-shadow);
  }

  #connect-modal-dialog {
    background: var(--btn-modal-backdrop-bg);
    border: var(--btn-modal-backdrop-border);
    background-color: var(--btn-modal-backdrop-color);
  }
`;
