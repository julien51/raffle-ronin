
A simple app to generate or host medatata for the raffle ronin NFT

# How to:

## Run locally

1. Check out the code
2. Install dependencies: `yarn`
3. Start server: `yarn run start`

Open web browser to `http://0.0.0.0:3000/tokens/7`
You can deploy this to the host of your choice as long as they support nodejs applications.

I have deployed to Heroku at this domain: https://raffle-ronin-metadata.herokuapp.com/

## Generate files

Alternatively you can easily generate all metadata files and upload to IPFS.

1. Check out the code
2. Install dependencies: `yarn`
3. `node bin/generate-metadata.js`

This will create a folder `out` that includes all of the metadata files. They can then upload "as a folder" to IPFS (don't forget to pin!)

## Update the contract to change the baseUrl

Whatever you end up chosing above, you will need to change the _BaseTokenUri_.
For this, the easiest is to go to [etherscan on your contract's page](https://etherscan.io/address/0xE7CB5E2E538fEc1492b66F180FAc6D4106991250#writeContract). Make sure you connect your wallet and then select the `setBaseTokenUri` method. In the `_baseTokenURI` enter the "base" URI for your tokens:
* If you hosted the application, then put the full application URL + the `/tokens/` path. For example, for the application I deployed on Heroku I would set `https://raffle-ronin-metadata.herokuapp.com/tokens/` (don't forget the trailing slash).

## Change the metadata

You can change the `template.js` file.
