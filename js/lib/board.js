function Board(){
    this.s_field_type = 'normal';

    this.player_A = null;
    this.player_B = null;

    this.b_is_initiated = false;

}
Board.prototype.register_player = function(player, is_player_a){

    if (this.b_is_initiated){
        debug.log('Game has already been b_is_initiated. You cannot perform that operation now.');
        return false
    }

    if (!( player instanceof Player)) {
        debug.log('Invalid object used as player');
        return false
    }

    if (is_player_a){
        this.player_A = player;
        return this
    } else {
        this.player_B = player;
        return this
    }
};

//Verify is player A is already set on board
Board.prototype.is_player_A_ready = function(){
    return this.player_A !== undefined && this.player_A !== null
};

//Verify is player B is already set on board
Board.prototype.is_player_B_ready = function(){
    return this.player_B !== undefined && this.player_B !== null
};

//When a game is b_is_initiated, players cannot be changed and the cards can be manipulated on the board
Board.prototype.init = function(){
    if (this.player_A && this.player_B){

        //Give player A his cards
        this.player_A.shuffle_deck();
        this.player_A.draw_cards(5);

        //Give player B his cards
        this.player_B.shuffle_deck();
        this.player_B.draw_cards(5);

        this.b_is_initiated = true;
        return this
    } else {
        debug.log("Not all players are ready for init the game");
        this.b_is_initiated = false;
        return false
    }
};