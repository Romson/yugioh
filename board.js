function Board(){
    this.field_type = 'normal'
    this.player_A = null
    this.player_B = null

    this.register_player = function(player, is_player_a){

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
}