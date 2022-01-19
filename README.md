NFT Exchange Platform 


Blockchain Mini Project Course

Sahar Cohen & Yuval Ziv

First Semester, 2021-2022


### Project Goal

Our goal was to build a blockchain platform for NFT exchange. We created the ability for any user that wants to sell or buy an NFT  to easily do so. Using a user-friendly interface, our customers can use this platform to offer their NFT and buy NFTs world wide. 

### Project Outline

Using the blockchain platform, we created a Hyperledger Besu website that relies on Ganache accounts and the Meta Mask extension which enabled us to access and connect an Ethereum enabled distributed application (or DApp) in our browser. Our users will be able to create an account, offer their own NFT for sale, browse other users’ offers, buy NFT using the MetaMask Ethereum wallet, and rate other users based on their NFT. 

 ### The Blockchain Platform

What is Blockchain? Blockchain is a shared ledger that is in charge of recording transactions and tracking assets. Unlike big  centralized companies like Facebook, Amazon, or our personal banks, the blockchain platform portrays decentralized ledger options, which allows all users the ability to keep track of what is happening, without a third party that controls it. You may like to think of it as a virtual notebook - each block in the blockchain portrays a page in the notebook, which is shared and controlled by all users, unlike the centralized model we know today, where specific users, or owners, can control and make decisions. 
Each page in the notebook, or block, is connected to the next page by a mathematical problem, more specifically a cryptographic equation. 
This leads us to the next topic - Proof of Work and Proof of Stake, which are two consensus models that are used to ensure the validity of the transactions. 
Proof of Work - a model that requires solving a complex mathematical equation using computing power. The users compete against each other in order to solve the equation, and those that solve it first are given the right to validate the transaction, which in return are rewarded with digital currency for their validation work. The computing power requires a lot of energy power, which is very expensive and not environmentally friendly. 
Proof of Stake - enables the user to stake their digital coins, which gives them the right to validate new block transactions. The user’s ability to put their coins at ‘stake’ is given to them based on their record, how long they have been staking their coins, and of course the amount of money that they are willing to put at stake for the validation. An algorithm is used to determine which user is chosen to stake their digital coins, based on all their information. It requires less energy, is more secure, and is more scalable. 


## Besu Ethereum: 
Besu is a Java based Ethereum client, a piece of software that is designed to implement the Ethereum protocol, that can be run on private and public networks, as well as test nets like the one used in our DApp - Truffle. The hyperledger besu has a wide range of features, which gives the platform versatility to support a wide range of uses. 

## Ganache: 
Ganache is a personal blockchain for rapid Ethereum application development. Allows the developer to create a private Ethereum based blockchain to run tests and execute commands while controlling how the blockchain operates. In other words, it gives the ability to perform all actions on the blockchain with no cost. This platform allowed us to connect our DApp to Ethereum ‘accounts’ and portrayed a real blockchain environment. 	

## MetaMask: 
MetaMask is a software crypto wallet that is used to interact with the Ethereum blockchain. It allowed us to connect to our wallet, which was portrayed by the Ganache accounts, and was the gateway to the interaction with our DApp.We created a local network based on our local host, added our own ganache accounts, and with each transaction paid the gas fee needed. This tool was a crucial aspect of developing our DApp, testing it, and using it to perform the transactions available.



### Project Diagram 




![Capture](https://user-images.githubusercontent.com/96061606/150117775-53001b06-ce43-4936-93b0-b79f5a68d33d.PNG)

Prerequisites:
Download and run Ganache. 
Install Metamask chrome extension, and open an account.
Connect to the MetaMask using the account from Ganache, using the special key. 
Compile truffle and migrate the smart contract
Project Diagram Flow:
Users access our NFT marketplace platform, and are identified by their Metamask account .The first time use will require the users to sign in, then they will automatically be connected. Without the first connection to MetaMask, the user will not be able to browse the site. 
	# On upload:
The user will  choose their NFT from their local computer, and upload it to IPFS (P2P, distributed network to store and share data). It will  then be deployed to the smart contract.


### Smart Contracts: 

A "smart contract" is a program that runs on the Ethereum blockchain. It's a collection of code and data  that resides at a specific address on the Ethereum blockchain. Smart contracts have a balance and they can send transactions over the network. They are not controlled by a user, but are deployed to the network and run as programmed beforehand. User accounts using the DApp can then interact with a smart contract by clicking on functions that submit transactions,  which execute a function defined on the smart contract. They cannot be deleted, and interactions with them are irreversible.
Our smart contract is built off of three main Structs - User Struct Card Struct and Transaction Struct. These main structs define all actions that a user can perform on the DApp. There are also four main mapped lists, users list, cards (portray the offers) list, users by addresses, and transactions list. 
We have four main functions on the contract - Add User, Post Offer, Buy Offer and Rate Seller. 
The ‘Add User’ function is designed for when a user enters the main welcome screen before they sign in with their MetaMask account. Since each action on the DApp requires a gas fee, a user will be redirected to the main home page only after the initial sign up. Once a user enters their username, age , and clicks accept, the ‘Add User’ function on the contract is called.
The ‘Post Offer’ function allows the user to enter three main parameters - NFT headline, content description and the price for sale. Once entering the function, the cards counter goes up by one, adding to the total number of offers available on the website. We then allocate the current user requesting to post an offer by extracting the current address, and allocating it in the mapped users list, in which the key is the user’s address. Then, a new card, or ‘offer’ is placed in the next position available in the total cards list, which is used throughout the website to portray all the offers currently available.The user has the ability to filter the audience that browses their NFT. For example, the user will be able to put a restriction on their NFT’s audience age. The function in the contract will filter all users based on the limits created, and will portray the NFT to the relevant users.  
The ‘Buy Offer’ function is designed for when a user clicks on the ‘Pay’ option on an NFT for sale in the Explore tab. The offer clicked on gets allocated within the cards list by the card Id given to the function as a parameter. Once the card is allocated, its’ owner is allocated and the transfer is made to the owner with the price value via ‘transfer’, a built in solidity function to transfer the money on MetaMask from one account to another.
The ‘Rate Seller’ function is designed for when a user clicks on the ‘Rate Seller’ button, available for them to see on their purchase history. The functionality is mainly for giving added value to the users’ interactions. Once the function is called, the rate counter goes up, and the user is allocated in the users list to update the rate value in all their cards to be portrayed visually. 
Each function has an event in which the transaction is emitted and the gas fee on Meta Mask is requested for approval, in which the user’s approval on Meta Mask approves the whole transaction. . 

### Website Description: 

Creating a new user is a part of the smart contract, therefore will include gas money. When a user initially clicks on the website they will have to sign in and connect to Meta Mask before being able to proceed with any other actions. The user is welcomed with an initial welcome page, which automatically recognizes if they are connected to a Meta Mask account, which is their initial ID and is the way they will be recognized with the transactions. If they do not have a MetaMask account they will be referred to creating one. The user is able to pick a username, and disclose their age, and by signing in they are entering the Home page of the website and from now on, any other transaction will cost gas money. After the user passes the authentication step, they are able to browse the site.
The DApp includes a Home Page, an Explore page, a My Status page and a New Offer page. 
The home page is a general instructions page, portraying the amount of users and offers available on the platform. 
The Explore page portrays all the relevant NFT offers currently available. If an NFT has an age restriction and the user does not abide by the age limit, that specific NFT will not be portrayed on this page. From the Explore page, the user is able to browse all offers, and click ‘buy’ on the NFT they want to purchase. Once the user clicks on ‘buy’, the Meta Mask extension will pop up, asking for permission to continue with the transaction. After the user accepts, the NFT will be permanently moved on their behalf, meaning the NFT owner address will be changed to their ID. It is important to note that once the transaction is accepted, the user will not be able to get their money back. In addition, the NFT will be removed from the Explore page, and be placed in the users ‘Previous Purchases’ page inside the ‘My Status’ tab. The user can decide if they want to keep the NFT, or re-sell it with a different price. If they decide to put it up for sale, the NFT will be returned to the main Explore page. 
The ‘My Status’ tab portrays all the relevant information on the user. The user can see their active NFT offers, statistics about themselves and their previous purchases. Once the user purchases an NFT, they are able to rate the seller that they purchased from. This functionality is only available after the user has purchased the NFT, therefore the user is able to do so inside the previous purchases tab, on the relevant card portraying the NFT. By rating the seller, the seller’s rating goes up by one, and will be portrayed on their offer cards when other users explore their NFT. 
In the ‘New Offer’ tab, the user will be able to post a new offer for their NFT, while filling out the needed information, including a description of the NFT, the price, and the NFT itself. 








 




