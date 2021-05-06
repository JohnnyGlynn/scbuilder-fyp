#!/bin/sh
cd /tmp/contracts/
cp ~/trufflestuff/truffle-config.js . && cp ~/trufflestuff/package.json .
npm install
echo -n | truffle init
truffle compile
truffle deploy --network ropsten-infura --reset
cd /tmp && rm -rf /contracts