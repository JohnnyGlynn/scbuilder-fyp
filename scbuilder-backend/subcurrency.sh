#!/bin/sh
cd /tmp/contracts > /dev/null
cp ~/trufflestuff/truffle-config.js . && cp ~/trufflestuff/package.json . && cp ~/trufflestuff/package-lock.json . && cp -R ~/trufflestuff/node_modules ./node_modules > /dev/null
echo -n | truffle init > /dev/null
truffle compile > /dev/null
truffle deploy --network ropsten-infura --reset | sed -n 's/.*> transaction hash:    //p'