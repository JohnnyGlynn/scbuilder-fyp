#!/bin/sh
cd /tmp/contracts > /dev/null
cp ../truffle-config/truffle-config.js . && cp ../truffle-config/package.json . && cp ../truffle-config/package-lock.json . && cp -R ../truffle-config/node_modules ./node_modules > /dev/null
echo -n | truffle init > /dev/null
truffle compile > /dev/null
truffle deploy --network ropsten-infura --reset | sed -n 's/.*> transaction hash:    //p'