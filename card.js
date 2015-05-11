//=============================================================================
//== General Card
//=============================================================================

function Card(params) {
    this.title = params && params['title'] || '';
    this.description = params && params['description'] || '';
    this.card_number = params && params['card_number'] || '';
    this.rarity = params && params['rarity'] || '';
    this.picture = params && params['picture'] || '';
    this.type = params && params['type'] || '';
    this.subtype = params && params['sub_type'] || '';
}

//Enumeration
Card.ECardType = {
    MONSTER: 'monster'
    , TRAP: 'trap'
    , SPELL: 'spell'
};

//=============================================================================
//== Monster Card
//=============================================================================

function MonsterCard(params) {
    Card.call(this, params);
    this.attribute = params && params['attribute'] || ''; // dark || earth || fire || light || water || wind
    this.effect = params && params['effect'] || ''; // none | flip |
    this.level = params && params['level'] || '';
    this.atk = params && params['atk'] || '';
    this.def = params && params['def'] || '';
}

MonsterCard.EMonsterAttribure = {
    DARK : 'dark'
    , EARTH : 'earth'
    , FIRE : 'fire'
    , LIGHT : 'light'
    , WATER : 'water'
    , WIND : 'wind'
}

MonsterCard.prototype = Object.create(Card.prototype);

//=============================================================================
//== Spell Card
//=============================================================================

function SpellCard(params) {
    Card.call(this, params);
    this.property = params && params['property'] || ''; // normal | continuous | ritual | quick-play | field | equip
}
SpellCard.prototype = Object.create(Card.prototype);
SpellCard.ECardProperty = {
    NORMAL: 'normal'
    , CONTINUOUS: 'continuous'
    , RITUAL: 'ritual'
    , QUICK_PLAY: 'quick-play'
    , FIELD: 'field'
    , EQUIP: 'equip'
};

//=============================================================================
//== Trap Card
//=============================================================================

function TrapCard(params) {
    Card.call(this, params);
    this.property = params && params['property'] || ''; // normal | continuous | counter
}
TrapCard.prototype = Object.create(Card.prototype);
TrapCard.ECardProperty = {
    NORMAL: 'normal'
    , CONTINUOUS: 'continuous'
    , COUNTER: 'counter'
};