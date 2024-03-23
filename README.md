# Ordbit Connect

Ordbit-Connect is a suite of web components designed to facilitate the development of Web3 applications. These components can seamlessly integrate into leading frontend technologies such as React, Angular, Vue.js, as well as plain HTML. With Ordbit-Connect, developers can easily incorporate wallet connectivity and other functionalities into their applications, regardless of the chosen frontend framework.

# Installation

## Npm

You can install the package using npm

`npm i ordbit-connect`

## Yarn

You can install the package using yarn

`yarn add ordbit-connect`

## CDN

If you prefer to use a CDN, you can include [ordbit-connect] directly into your HTML file:

```
<!-- Replace 'x.x.x' with the desired version number,preferrably latest stable version -->
<script type="module" src="https://unpkg.com/ordbit-connect@x.x.x/umd/ordbit-wallet-connect.js"></script>
```

# Components

The package consists of the following components

## 1. ordbit-connect-button

### Description:

The ordbit-connect-button component serves as an entry point for users to connect their wallets. Upon clicking, it opens the ordbit-connect-modal, allowing users to connect their desired wallet.

### Usage:

```
<ordbit-connect-button class="connect-btn"></ordbit-connect-button>
```

### CSS Variables

Developers can use the following CSS variables to customize the styling of the `ordbit-connect-button` component:

- `--btn-bg-color`: Background color of the button. (Default: `orange`)
- `--btn-border`: Border of the button. (Default: `none`)
- `--btn-border-radius`: Border radius of the button. (Default: `1rem`)
- `--btn-box-shadow`: Box shadow of the button. (Default: `0 0 5px #000`)
- `--btn-width`: Width of the button. (Default: `10rem`)
- `--btn-height`: Height of the button. (Default: `3rem`)
- `--btn-modal-backdrop-bg`: Background color of the modal backdrop. (Default: `none`)
- `--btn-modal-backdrop-border`: Border of the modal backdrop. (Default: `none`)
- `--btn-modal-backdrop-color`: Color of the modal backdrop. (Default: `none`)

## 2. ordbit-connect-modal

### Description:

The ordbit-connect-modal component is a modal that lists supported wallets, allowing users to connect their desired wallet extension.

#### Functionality

Upon clicking on a supported wallet, the respective wallet extension is opened, enabling users to connect their wallet.

#### Supported Wallets

- Unisat
- Xverse
- Leather
- Okx

#### Events

Developers can listen for the following events to perform further operations. These events can be listened to from anywhere in the DOM, including from `ordbit-connect-button`:

- `WALLET_CONNECT_MODAL_CLOSED`: Triggered when the modal is closed manually by the user. No data is passed to the callback. NOTE: this event is not propogated outside of modal.
- `WALLET_CONNECT_FAILED`: Triggered when the user's attempt to connect a particular wallet fails or is aborted. Error information is passed to the callback.
- `WALLET_CONNECT_SUCCESS`: Triggered when the user successfully connects the wallet. Wallet information is passed to the callback. The structure of wallet info is as follows:

```javascript
{
  ordinalAddress: string;
  paymentAddress: string;
  provider: "NONE" | "UNISAT" | "XVERSE" | "OKX" | "LEATHER";
}
```

### CSS Variables

Developers can use the following CSS variables to customize the styling of the `ordbit-connect-modal` component:

- `--connect-wallet-modal-border`: Border of the modal. (Default: `none`)
- `--connect-wallet-modal-bg`: Background image of the modal. (Default: `none`)
- `--connect-wallet-modal-bg-color`: Background color of the modal. (Default: `none`)
- `--connect-wallet-modal-bg-color`: Background color of the modal with alpha transparency. (Default: `rgba(10, 10, 10, 0.8)`)
- `--connect-wallet-modal-heading-font-size`: Font size of the modal heading. (Default: `1.5rem`)
- `--connect-wallet-modal-font-family`: Font family of the modal text. (Default: `Calibri`)
- `--connect-wallet-modal-heading-font-color`: Font color of the modal heading. (Default: `#fff`)
- `--connect-wallet-modal-font-color`: Font color of the modal text. (Default: `#fff`)

### Example

```javascript
element.addEventListener("WALLET_CONNECT_MODAL_CLOSED", () => {
  console.error("Wallet modal closed");
});

element.addEventListener("WALLET_CONNECT_FAILED", (error) => {
  console.error("Wallet connection failed:", error);
});

element.addEventListener("WALLET_CONNECT_SUCCESS", (walletInfo) => {
  console.log("Wallet connected successfully:", walletInfo);
  /*
    Output format:
    {
        ordinalAddress: '...',
        paymentAddress: '...',
        provider: 'UNISAT' // Example
    }
    */
});
```

## Example Code

You can take the below code as reference to get started.

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <title>Ordbit Connect</title>
    <script
      type="module"
      src="https://unpkg.com/ordbit-connect@1.1.0/umd/ordbit-wallet-connect.js"
    ></script>
  </head>
  <body>
    <ordbit-connect-button id="wallet-connect"
      >Connect Wallet</ordbit-connect-button
    >

    <script>
      function attachListeners() {
        const element = document.getElementById("wallet-connect");

        element.addEventListener("WALLET_CONNECT_SUCCESS", (event) => {
          const data = event.detail;
          console.log("success = ", data);
          event.stopPropagation();
        });

        element.addEventListener("WALLET_CONNECT_FAILED", (event) => {
          const data = event.detail;
          console.log("failed = ", data);
          event.stopPropagation();
        });

        element.addEventListener("WALLET_CONNECT_MODAL_CLOSED", (event) => {
          const data = event.detail;
          console.log("closed = ", data);
          event.stopPropagation();
        });
      }

      window.onload = function () {
        attachListeners();
      };
    </script>
  </body>
</html>
```
