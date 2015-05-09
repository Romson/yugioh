function Board(){
    this.field_type = 'normal'
    this.player_A = null
    this.player_B = null

    this.initiated = false

    this.register_player = function(player, is_player_a){

        if (this.initiated){
            console_log('Game has already been initiated. You cannot perform that operation now.')
            return false
        }

        if (!player) {
            console_log('Invalid object used as player')
            return false
        }

        if (is_player_a){
            this.player_A = player
            return true
        } else {
            this.player_B = player
            return true
        }
    }

    //When a game is initiated, players cannot be changed and the cards can be manipulated on the board
    this.init = function(){
        if (this.player_A && this.player_B){

            //Give player A his cards
            this.player_A.shuffle_deck()
            this.player_A.draw_card(5)

            //Give player B his cards
            this.player_B.shuffle_deck()
            this.player_B.draw_card(5)

            this.initiated = true
        }
    }
}