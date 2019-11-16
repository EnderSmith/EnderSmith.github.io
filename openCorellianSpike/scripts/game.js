class Deck {
  constructor() {
    this.order = [
      {value: 0, id: '0SilopA'},
      {value: 0, id: '0SilopB'},
    ];

    const staves = [
      'Triangle',
      'Circle',
      'Square'
    ];

    staves.map((stave)=>{
      for (let i = 1; i <= 10; i++) {
        this.order.push({value:i, id:`${i}${stave}`})
      };
    });

    staves.map((stave)=>{
      for (let i = -1; i >= -10; i--) {
        this.order.push({value:i, id:`${i}${stave}`})
      };
    });
  };
  shuffle() {
    for (let i = this.order.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.order[i], this.order[j]] = [this.order[j], this.order[i]];
    };
    return this.order;
  };
  draw() {
    if (this.order.length < 1) {
      throw new Error('Deck is empty\n');
    };
    return this.order.pop();
  };
};

class Player {
  constructor(
    id,
    credits,
    onBuyFromDeck,
    onSwapFromDeck,
    onBuyFromDiscard,
    onSwapFromDiscard,
    onPayPot,
    onPaySabaccPot,
  ) {
    this.id = id;
    this.hand = [];
    this.credits = credits
    this.buyFromDeck = onBuyFromDeck;
    this.swapFromDeck = onSwapFromDeck;
    this.buyFromDiscard = onBuyFromDiscard;
    this.swapFromDiscard = onSwapFromDiscard;
    this.payPot = onPayPot;
    this.paySabaccPot = onPaySabaccPot
  };
  get infoPrivate() {
    return {
      id: this.id,
      hand: this.hand,
      sum: this.sum,
      credits: this.credits,
    };
  };
  get infoPublic() {
    return {
      id: this.id,
      hand: `${this.hand.length} cards`,
      credits: this.credits
    };
  };
  get sum() {
    let sum = 0;
    for (let cardIndex = 0; cardIndex < this.hand.length; cardIndex++) {
      sum = sum + this.hand[cardIndex].value;
    }
    return sum;
  }
};

class Discard {
  constructor() {
    this.order = [];
  }
  get top() {
    return this.order[this.order.length-1];
  };

  draw() {
    if (this.order.length < 1) {
      throw new Error('Discard is empty\n');
    };
    return this.order.pop();
  };
  discard(card) {
    this.order.push(card);
    return this.top;
  };
};

class Table {
  constructor(playerCount, credits) {
    this.pot = 0;
    this.sabaccPot = 0;
    this.deck = new Deck();
    this.discard = new Discard();
    this.players = this.initializePlayers(playerCount, credits);
  };
  get infoPublic() {
    const playerStati = []
    for (let p = 0; p < this.players.length; p++) {
      playerStati.push(this.players[p].infoPublic)
    }
    return {
      pot: this.pot,
      sabaccPot: this.sabaccPot,
      deckRemaining: this.deck.order.length,
      topDiscard: this.discard.top,
      discardRemaining: this.discard.order.length,
      players: this.players.length,
      playerStati: playerStati,
    };
  };

  ante() {
    // TODO: manual ante before each hand
    for (let p = 0; p < this.players.length; p++) {
      this.players[p].payPot(2);
      this.players[p].paySabaccPot(1);
    }
  };
  deal() {
    for (let i = 0; i < 2; i++) {
      for (let p = 0; p < this.players.length; p++) {
        this.players[p].hand.push(this.deck.draw());
      };
    };
    this.discard.discard(this.deck.draw());
  };
  rollSpikeDice() {
    const rollOne = Math.floor((Math.random() * 6) + 1);
    const rollTwo = Math.floor((Math.random() * 6) + 1);
    return {
      spikeDiceMatch: rollOne === rollTwo,
      rollOne: rollOne,
      rollTwo: rollTwo
    };
  };
  payPotByPlayerId(playerId, amount) {
    const player = this.players.find(p => p.id === playerId);
    player.credits = player.credits - amount;
    this.pot = this.pot + amount;
  };
  paySabaccPotByPlayerId(playerId, amount) {
    const player = this.players.find(p => p.id === playerId);
    player.credits = player.credits - amount;
    this.sabaccPot = this.sabaccPot + amount;
  };
  buyFromDeckByPlayerId(playerId) {
    const player = this.players.find(p => p.id === playerId);
    // if (player.credits < 1) {
    //   throw new Error(`Insufficient Credits\n`);
    // } else {
      player.hand.push(this.deck.draw());
      player.credits = player.credits-1;
      this.pot = this.pot+1;
    // };
    return player.info;
  };
  buyFromDiscardByPlayerId(playerId) {
    const player = this.players.find(p => p.id === playerId);
    player.hand.push(this.discard.draw());
    this.discard.discard(this.deck.draw());
    player.credits = player.credits-2;
    this.pot = this.pot-1
    return player.info;
  };
  swapFromDeckByPlayerId(playerId, cardIndex) {
    const player = this.players.find(p => p.id === playerId);
    if (!player.hand[cardIndex]) {
      throw new Error (`Invalid Card Index\n`)
    }
    const newCard = this.deck.draw();
    this.discard.discard(player.hand[cardIndex]);
    player.hand[cardIndex] = newCard;
    return player.info;
  }
  swapFromDiscardByPlayerId(playerId, cardIndex) {
    const player = this.players.find(p => p.id === playerId);
    if (!player.hand[cardIndex]) {
      throw new Error (`Invalid Card Index\n`)
    }
    const newCard = this.discard.draw();
    this.discard.discard(player.hand[cardIndex]);
    player.hand[cardIndex] = newCard;
    return player.info;
  }
  initializePlayers(playerCount, credits) {
    if (playerCount > 8 || playerCount < 2 || isNaN(playerCount)) {
      throw new Error(`Please enter a player count between 2 and 8.\n`);
    }
    const players = [];
    for (let i = 1; i <= playerCount; i++) {
      const playerId = `player${i}`;
      players.push(new Player(
        playerId,
        credits ? credits : 250,
        this.buyFromDeckByPlayerId.bind(this, playerId),
        this.swapFromDeckByPlayerId.bind(this, playerId),
        this.buyFromDiscardByPlayerId.bind(this, playerId),
        this.swapFromDiscardByPlayerId.bind(this, playerId),
        this.payPotByPlayerId.bind(this, playerId),
        this.paySabaccPotByPlayerId.bind(this, playerId),
        )
      );
    };
    return players;
  };
};

class Game {
  constructor(playerCount, credits) {
    this.table = new Table(playerCount, credits);
    this.hand = 0;
    this.round = undefined;
    this.phase = 'setup';
    this.turn = undefined;
  };
  get infoPublic() {
    return {
      currentHand: this.hand,
      currentRound: this.round,
      currentPhase: this.phase,
      currentTurn: this.turn,
      tableStatus: this.table.infoPublic,
    }
  }

  start() {
    this.table.deck.shuffle();
    this.hand = 1;
    this.phase = 'ante';
    this.table.ante();
    this.phase = 'dealing';
    this.table.deal();
    this.round = 1;
    this.phase = 'draw';
    this.turn = 1;
    return this.infoPublic;
  };
};

const game = new Game(2);
console.log(game.start());
