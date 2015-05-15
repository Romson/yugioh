function Deck(cards){
    this.cards = [];

    _constructor.call(this, cards);
}

function _constructor(cards) {
    try {
        if (typeof cards == 'string') {
            cards = JSON.parse(cards);
        }
    } catch (err) {
        throw "Malformed JSON"
    }
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        switch (card.card_type) {
            case Card.ECardType.MONSTER:
                this.cards.push(new MonsterCard(card));
                break;
            case Card.ECardType.SPELL:
                this.cards.push(new SpellCard(card));
                break;
            case Card.ECardType.TRAP:
                this.cards.push(new TrapCard(card));
                break;
            default :
                debug.error("Could not create card from JSON object: " + card);
        }
    }
}


Deck.__defineGetter__('length', function () {
    return this.cards.length
});

Deck.prototype.size = function(){
    return this.cards.length;
};

Deck.prototype.shuffle_deck = function () {
    //Code taken from here [http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript]
    var o = this.cards;
    for (var j, aux, i = o.length; i; j = Math.floor(Math.random() * i), aux = o[--i], o[i] = o[j], o[j] = aux);
    this.cards = o;
};

Deck.prototype.draw_one_card = function(){
    return this.cards.shift();
};