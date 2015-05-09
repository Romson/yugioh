function Player(name){
    this.name = name
    this.life_points = 8000
    this.deck = []
    this.hand = []

    //Code taken from here [http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript]
    this.shuffle_deck = function(){
        var o = this.deck
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        this.deck = o
    }

    this.draw_card = function(quantity){
        quantity = quantity || 1

        for (;quantity;quantity--) {
            //Remove first element from deck and push it to hand
            this.hand.push(this.deck.shift())
        }
    }
}