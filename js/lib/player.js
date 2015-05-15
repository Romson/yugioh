function Player(name) {
    this.s_name = name || "New player";
    this.i_life_points = 8000;
    this.b_deck_initiated = false;
    this.deck = {};
    this.hand = [];

}

//Initialize a player's cards with cards. The parameter can be either a JSON object or a valid JSON string
//that will be parsed to an object.
Player.prototype.init_deck = function (cards) {

    if (this.b_deck_initiated){
        debug.error("Deck is already initialized");
        return false;
    }
    if (!cards){
        debug.warn("No deck were offered to init the deck");
        return false;
    }

    this.deck = new Deck(cards);
    this.b_deck_initiated = true;
    return this;

};

Player.prototype.deck_size = function () {
    return this.deck.size();
};

Player.prototype.hand_size = function () {
    return this.hand.length;
};

Player.prototype.shuffle_deck = function () {
    this.deck.shuffle_deck();
};

Player.prototype.draw_cards = function (quantity) {
    quantity = quantity || 1;

    for (; quantity; quantity--) {
        //Remove first element from cards and push it to hand
        this.hand.push(this.deck.draw_one_card());
    }
};