QUnit.test( "board init", function( assert ) {
    var b = new Board()
    var value = b.register_player()
    assert.notOk( value, "Does not allow function call without a user" );

    var p1 = new Player('Reuel')
    assert.ok(b.register_player(p1,true), "Player A registered successfully")

    assert.ok(b.is_player_A(), "Player A is confirmed from the board")

    var p2 = new Player('Tom')
    assert.ok(b.register_player(p2),  "Player B registered successfully")

    assert.ok(b.is_player_B(), "Player B is confirmed from the board")
});