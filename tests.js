cards_json = [];

//Initial setup
QUnit.begin(initiate_cards);

//=============================================================================
//== Card object related tests
//=============================================================================

QUnit.module('Card object tests');
QUnit.test("cards_creation", function (assert) {
    var monster_card = new MonsterCard({
        "type": "monster",
        "subtype": "synchro",
        "title": "Scrap Archfiend",
        "description": "1 Tuner + 1 or more non-Tuner Monsters.",
        "card_number": "DREV-EN000",
        "rarity": "super-rare",
        "picture": ""
    });

    assert.equal(monster_card.title, "Scrap Archfiend", 'The title of the card is ok');
    assert.equal(monster_card.type, Card.ECardType.MONSTER, 'Type of monster is ok')
});

//=============================================================================
//== Board object related tests
//=============================================================================

QUnit.module('Board object tests');
QUnit.test("board init", function (assert) {
    //Create the board
    var b = new Board();

    debug.ignore_one_message();
    assert.notOk(b.register_player(), "Does not allow function call without a user");

    //Register a new player
    var p1 = new Player('Reuel');
    //debug.log("Trying to initialize a cards with " + cards_json.length + " cards");
    p1.init_deck(cards_json);
    assert.ok(b.register_player(p1, true), "Player A registered successfully");
    assert.ok(b.is_player_A_ready(), "Player A is confirmed from the board");

    //Try to init the game before adding the second player
    assert.notOk(b.init(), 'Failed to start the game');
    assert.notOk(b.b_is_initiated, 'Board status remains consistent');

    //Try to register and invalid thing as a player
    var fake_p2 = {};
    b.register_player(fake_p2, false);
    assert.notOk(b.is_player_B_ready());

    //Register the second player
    var p2 = new Player('Tom');
    p2.init_deck(cards_json);
    assert.ok(b.register_player(p2), "Player B registered successfully");
    assert.ok(b.is_player_B_ready(), "Player B is confirmed from the board");

    //Verify the amount of cards
    var player_A_cards_qtd = p1.deck_size();
    assert.ok(player_A_cards_qtd >= 40 && player_A_cards_qtd <= 60, 'Player A has the correct amount of cards to start the duel');

    var player_B_cards_qtd = b.player_B.deck_size();
    assert.ok(player_B_cards_qtd >= 40 && player_B_cards_qtd <= 60, 'Player B has the correct amount of cards to start the duel');

    //Try to initialize the game. After initialized, each player draw 5 cards
    assert.ok(b.init(), 'Game successfully b_is_initiated');
    assert.ok(b.b_is_initiated, 'Game board status changed successfully');

    //Verify for life points at the beginning
    var i_life_points_A = b.player_A.i_life_points;
    var i_expected = 8000;
    assert.equal(i_life_points_A, i_expected, "Player A life points are set correctly");

    var i_life_points_B = b.player_B.i_life_points;
    assert.equal(i_life_points_B, i_expected, "Player B life points are set correctly");

    //Check that each player has 5 cards on hand
    var i_card_on_hand_A = p1.hand_size();
    assert.equal(i_card_on_hand_A, 5, 'Player A does have the correct amount of cards on hand');

    var i_card_on_hand_B = p2.hand_size();
    assert.equal(i_card_on_hand_B, 5, 'Player B does have the correct amount of cards on hand');

});

//=============================================================================
//== Deck object related tests
//=============================================================================

QUnit.module('Deck object tests');
QUnit.test('Deck _constructor tests', function (assert) {

    assert.throws(
        function () {
            deck = new Deck("Malformed string that cannot be parsed as JSON");
        }
        , "Malformed JSON" //Expected message to be thrown
        , "The cards does not accept a malformed JSON string"
    );

    assert.ok(
        function () {
            return new Deck()
        }
        , "Empty deck created"
    );

    assert.ok(
        function () {
            deck = new Deck(cards_json)
        }
        , "Regular deck created"
    );

});

QUnit.test('Deck drawing and counting', function (assert) {

    var deck = new Deck(cards_json);

    var size_before_drawing = deck.size();

    var card = deck.draw_one_card();

    var size_after_drawing = deck.size();

    assert.ok(card instanceof Card, "Card successfully drawn");

    assert.equal(size_after_drawing + 1, size_before_drawing, "The count for cards seems to work ok");
})

//=============================================================================
//== Field object related tests
//=============================================================================

QUnit.module('Field object tests');
QUnit.skip('field functionalities', function (assert) {
    //var field = new Field();
    //
    //player = new Player('Reuel');
    //player.init_deck(cards_json);
    //player.draw_cards();
    //player.play_card(1);
    //
    //assert.ok(field.place_card())
});


//=============================================================================
//== Initialize cards onto variable 'cards_json'
//=============================================================================


function initiate_cards() {
    cards_json = [
        {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "spell",
            "subtype": "quick-play",
            "title": "Blind Spot Strike ",
            "description": "Select 1 face-up Defense Position monster your opponent controls and 1 face-up Attack Position monster you control. The monster you control gains ATK equal to the opponent's monster's DEF, until the End Phase.",
            "card_number": "DREV-EN045",
            "rarity": "common",
            "picture": ""
        } //Spell
        , {
            "type": "trap",
            "subtype": "continuous",
            "title": "Desperate Tag ",
            "description": "If a face-up Attack Position monster you control is destroyed by battle, during damage calculation, you can reduce the Battle Damage from this battle to 0 and Special Summon 1 Level 4 or lower Warrior-Type monster from your hand at the end of the Damage Step.",
            "card_number": "DREV-EN063",
            "rarity": "common",
            "picture": ""
        } //Trap
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "spell",
            "subtype": "quick-play",
            "title": "Blind Spot Strike ",
            "description": "Select 1 face-up Defense Position monster your opponent controls and 1 face-up Attack Position monster you control. The monster you control gains ATK equal to the opponent's monster's DEF, until the End Phase.",
            "card_number": "DREV-EN045",
            "rarity": "common",
            "picture": ""
        } //Spell
        , {
            "type": "trap",
            "subtype": "continuous",
            "title": "Desperate Tag ",
            "description": "If a face-up Attack Position monster you control is destroyed by battle, during damage calculation, you can reduce the Battle Damage from this battle to 0 and Special Summon 1 Level 4 or lower Warrior-Type monster from your hand at the end of the Damage Step.",
            "card_number": "DREV-EN063",
            "rarity": "common",
            "picture": ""
        } //Trap
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
        , {
            "type": "monster",
            "subtype": "synchro",
            "title": "Scrap Archfiend",
            "description": "1 Tuner + 1 or more non-Tuner Monsters.",
            "card_number": "DREV-EN000",
            "rarity": "super-rare",
            "picture": ""
        } //Monster
    ];
}