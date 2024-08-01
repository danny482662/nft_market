#### MasterWallet

This is the main smart contract of our dApp. It holds the funds sent by liquidity providers and the loans.

Methods:

newLoan -> when someone wants to get a loan from our platform, after the appraisal is done and the maximum amount they can borrow is displayed, they will need to send the NFT to our NFTHolder SC (that implements the Receiver interface) and then this method will be called from our UI, with all the loan details filled in by the user. If all the conditions are met (the liquidity pool holds at least 5 times more WETH than the requested amount and the NFT was sent to our contract) the requested amount will be sent to the borrower

loanPaid -> when the user wants to pay the loan, he will see in the UI the debt amount. He will do the transaction from his wallet and input the tx hash for us to check if the loan was paid. Then, this method will be called so that the loan record for this borrower will be deleted and his NFT will be sent back to him

getLoanData -> a getter function that returns the details of user’s loan

loanDefault -> this method can be called by anyone that monitors the current loans and it will check if the loan period has indeed passed. In the case of a default, the NFT placed as collateral will be marked as auctionable in the Auctionable Smart Contract

depositTokens -> this method is for the liquidity providers to transfer their WETH to our pool. Firstly, it checks if the MasterWallet SC was approved by the WETH owner to spend the amount the owner wants to stake. In this case, it will transfer this amount from the owner's balance to itself and mint an equal amount of czWETH tokens to the liquidity provider’s wallet. These tokens represent their contribution to our pool.

withdrawFund -> this method can be called by a liquidity provider who wants to withdraw their WETH from our Wallet. It checks the corresponding czWETH balance of the user and if it’s higher than the withdraw amount, the WETh is transferred from our Wallet back to the provider and an equivalent amount of czWETH is burned from their wallet.

getBalanceofSC -> returns the WETH balance of the MasterWallet

There are also some governance methods that can only be called by the account that deployed the smart contract. In the future, we aim to create a DAO that will handle the governance.
	-changeInterest, changeManager, changeHolder, changeAuctionable

#### NFTholder

This smart contract inherits from IERC721Receiver to be able to receive the NFT sent by a borrower. It also has a function for transferring the NFT. Only allowed addresses can call the transfer method. Right now, only the MasterWallet and the Auctionable contracts are allowed.

#### Auctionable

This smart contract handles the auctions for all NFTs that were marked as being auctionable (the borrower has defaulted)

Methods:

	- markAsAuctionable -> called from the MasterWallet loanDefault method when a default is detected
	- tokenizeNFT -> all liquidity providers who staked more than 5 WETH are eligible to take part in the auction. From the eligible providers, we randomly select 100 who will have the right to participate. This method is called from the backend after we chose the auction participants. The method will deploy a new TokenNFT smart contract for the given NFT and will also call the airdrop method from the TokenNFT. This function is essentially sending a custom ERC20 token only to the 100 users that are allowed to bid on the NFT. 
	- startAuction -> this method is called from our backend when we wish to start the auction for a given NFT. The NFT needs to be tokenised by now. A new Auction smart contract is deployed and the NFT is marked as being inAuction
	- closeAuction -> called from our backend when we want to close the auction ( when the debt + interest is covered or the auction time expired). It will call the endAuction method from the corresponding Auction smart contract, it will send the NFT to the winner and it will also destruct the TokenNFT smart contract corresponding to the auctioned NFT since there is no use for it anymore.

#### TokenNFT

This smart contract is deployed whenever an NFT needs to be tokenised for an auction. It inherits the ERC20 and AccessControll contracts from OpenZeppelin, but it contains other methods as well.

Methods:

	- airdrop -> called from the tokenizeNFT method of the Auctionable smart contract, it will send the NFT token to all 100 providers that have the right to bid in the coming auction.
	- kill -> called from the closeAuction method of the AUctionable smart contract, it calls the selfdestruct() method that wipes the storage and all the data corresponding to this contract
	- getNFTAddr -> getter for the NFT address
	- getTokenId -> getter for the NFT tokenId
	- getOwners -> getter for the allowed bidders array


## Requirements
	## Node Version
	    16 | 18 | 20
	## OS
	    Windows 10 | Mac OS
	## Browser
		Chrome | Edge
## Key Technologies

- **Next.js**: We rely on Next.js for server-side rendering and building a robust React application.
- **Tailwind CSS**: Tailwind CSS helps us create responsive and user-friendly designs.
- **Solidity**: Solidity is the programming language for our smart contracts, enabling secure and trustless interactions.

## Getting Started

1. Clone this repository.
2. Install project dependencies using `npm install`.
3. Start the development server with `npm start`.
4. Access the Dapp on `http://localhost:3000`.
5. Access the Backend on `http://localhost:8080`.
## Contribution Guidelines

We welcome contributions from the community! Feel free to submit issues, fork the project, and create pull requests. Please adhere to our code of conduct.