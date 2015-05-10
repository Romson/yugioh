function Player(name) {
    this.name = name || "New player";
    this.life_points = 8000;
    this.deck_initiated = false;
    this.deck = [];
    this.hand = [];

}

//Initialize a player's deck with cards. The parameter can be either a JSON object or a valid JSON string
//that will be parsed to an object.
Player.prototype.init_deck = function (cards) {

    if (this.deck_initiated || this.deck.length > 0){
        debug.error("Deck is already initialized");
        return false;
    }
    if (!cards){
        debug.warn("No cards were offered to init the deck");
        return false;
    }
    if (typeof cards == 'string') {
        cards = JSON.parse(cards);
    }
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        debug.log(i);
        switch (card.type) {
            case Card.ECardType.MONSTER:
                this.deck.push(new MonsterCard(card));
                break;
            case Card.ECardType.SPELL:
                this.deck.push(new SpellCard(card));
                break;
            case Card.ECardType.TRAP:
                this.deck.push(new TrapCard(card));
                break;
            default :
                debug.error("Could not create card from JSON object: " + card);
        }
    }
    debug.warn(this.deck)
    this.deck_initiated = true;
    return this;

};

Player.prototype.deck_size = function () {
    return this.deck.length;
};

Player.prototype.hand_size = function () {
    return this.hand.length;
};

Player.prototype.shuffle_deck = function () {
    //Code taken from here [http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript]
    var o = this.deck;
    for (var j, aux, i = o.length; i; j = Math.floor(Math.random() * i), aux = o[--i], o[i] = o[j], o[j] = aux);
    this.deck = o;
};

Player.prototype.draw_card = function (quantity) {
    quantity = quantity || 1;

    for (; quantity; quantity--) {
        //Remove first element from deck and push it to hand
        this.hand.push(this.deck.shift());
    }
};