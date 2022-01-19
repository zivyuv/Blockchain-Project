pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract GiveNTake {
  //string public name;
  uint public usersCount = 0;
  uint public cardsCount = 0;
  uint public transactionsCount = 0;
  

  struct User {
    uint id;
    string name;
    uint age;
    uint rate;
    address owner;
    uint cardAmount;
    uint ratingCount;
  }

  struct Card {
        uint id;
        string headline;
        string content;
        uint price;
        address payable owner;
        uint minAge;
        uint ownerRate;  
        uint isActive;
        string imageHash;
    }

  struct Transaction {
    User buyer;
    Card card;
  }

  event UserAdded(
    uint id,
    string name,
    address owner
  );

  event CardCreated(
        uint id,
        string headline,
        string content,
        uint price,
        address payable owner,
        uint isActive,
        string imageHash
    );

  event CardBought(
        uint id,
        string headline,
        string content,
        uint price,
        address payable owner
    );

  event UserRated(
        address userAddress,
        string name,
        uint rate
    );

  event PriceChanged(
    uint cardId,
    uint newPrice
  );

    mapping (uint => Transaction) public transactions;
    mapping(uint => User) public users;
    mapping(uint => Card) public cards;
    mapping (address => User) public usersByAddress;
    

  constructor() public {
  
  }

  function addUser(string memory _name, uint age) public {
 
    usersCount ++;
    users[usersCount] = User(usersCount, _name, age, 0, msg.sender,0, 1); // times I rated start with 1 to work with mod3
    usersByAddress[msg.sender] = users[usersCount];
    emit UserAdded(usersCount, _name, msg.sender);
  }

  function postOffer(string memory _headline, string memory _content, uint minAge, uint _price, string memory _hash) public {
        cardsCount ++;
        User memory _owner = usersByAddress[msg.sender];
        uint rate = _owner.rate;
        cards[cardsCount] = Card(cardsCount, _headline, _content, _price, msg.sender, minAge, rate, 1, _hash);
        User memory curr_user = usersByAddress[msg.sender];

        emit CardCreated(cardsCount, _headline, _content, _price, msg.sender, 1, _hash);
    }

  function buyOffer(uint _cardId) public payable {
        require(_cardId > 0 && _cardId <= cardsCount);

        Card memory _card = cards[_cardId];
        address payable _owner = _card.owner;
        
        _owner.transfer(msg.value);
        cards[_cardId] = _card; 
        transactionsCount++;
        User memory buyer = usersByAddress[msg.sender];
        transactions[transactionsCount] = Transaction(buyer, _card);

        // change ownership
        cards[_cardId].owner = msg.sender;
        cards[_cardId].ownerRate = usersByAddress[msg.sender].rate;
        emit CardBought(cardsCount, _card.headline, _card.content, _card.price, msg.sender);

    }
  function rateSeller(address _sellerAddress) public {
 
        usersByAddress[_sellerAddress].rate++;
        User memory _user =  usersByAddress[_sellerAddress];
        users[_user.id].rate++;   // update the user in the second array as well

        // for each 5 times rating others, user earns a rate for himself
        uint flag = 0;
        User memory rater = usersByAddress[msg.sender];
        if (rater.ratingCount % 3 == 0) {
          rater.rate++;
          flag = 1;
        }
        rater.ratingCount++;
        usersByAddress[msg.sender] = rater;
        users[rater.id] = rater;
        
        // update all their cards
        uint i = 1;
        for (i=1; i<=cardsCount; i++) {
          if (cards[i].owner == _sellerAddress) {
              cards[i].ownerRate++;
          }
          if (flag == 1 && cards[i].owner == msg.sender) {
              cards[i].ownerRate++;
          }
        }

        emit UserRated(_sellerAddress, _user.name, _user.rate);
    }

  function changePrice(uint cardId, uint newPrice) public {
    cards[cardId].price = newPrice;

    // this card might have other copies in transactions, but they were boght in a different price
    // we don't change them
    emit PriceChanged(cardId, newPrice);
  }

  function deleteCard(uint id) public {
      Card storage toDelete = cards[id];
      toDelete.isActive = 0;
      delete cards[id];
      cardsCount--;
  }    

}