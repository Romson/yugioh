function Card(params){
    this.title = params && params['title'] || '';
    this.description = params && params['description'] || '';
    this.card_number = params && params['card_number'] || '';
    this.rarity = params && params['rarity'] || '';
    this.picture = params && params['picture'] || '';
    this.type = params && params['type'] || '';
    this.subtype = params &&  params['sub_type'] || '';
}

//Enumeration
Card.ECardType = {
     MONSTER: 'monster'
    , TRAP: 'trap'
    , SPELL: 'spell'
};

function MonsterCard(params){
    Card.call(this,params);
    this.attribute = params && params['attribute'] || '';
    this.effect = params && params['effect'] || ''; // none | flip |
    this.level = params && params['level'] || '';
    this.atk = params && params['atk'] || '';
    this.def = params && params['def'] || '';
}
MonsterCard.prototype = Object.create(Card.prototype);



function SpellCard(){
    this.property = ''; // normal | continuous | ritual | quick-play | field | equip
}
SpellCard.prototype = Object.create(Card.prototype);


function TrapCard(){
    this.property = ''; // normal | continuous | counter
}
TrapCard.prototype = Object.create(Card.prototype);