# Smart Contract Builder

The premise of this application is to allow for anyone to deploy a smart contract onto the Ethereum Ropsten test network, without any prior programming knowledge.

The user simply has to make their contract selection, pay the fee and the system will take care of deployment for them, in an entirely "Code-free" approach.

## Prior to running this project

You will need to install the following

[Metamask](https://metamask.io/)

[Node.js](https://nodejs.org/en/)

[Golang](https://golang.org/)

Once Node.js is installed, run `npm install -g truffle` to install the truffle CLI tool.

Now run `npm install -g yarn` to install the yarn package manager.

Scaffold the project with `./setup.sh`

To setup the frontend

```
cd scbuilder-frontend/
npm install
```

Once this is done, you will need to open Metamask, change to the Ropsten test network.
Click buy, and you will be given the option to request testnet ether from a faucet. The faucet can be found [here.](https://faucet.metamask.io/)

To setup the backend and generate the binary file

```
cd scbuilder-backend/cmd/
go build
```

## Running the project

Run the following command to start the backend from the `scbuilder-backend/` directory

```
./cmd/cmd
```

Now navigate to the `scbuilder-frontend/` directory and run `yarn start`

The application will now be accessible from [http://localhost:3000](http://localhost:3000) in the browser.

## [Demo](https://youtu.be/Y7SbrCdxqnE)
