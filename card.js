//=============================================================================
//== General Card
//=============================================================================

function Card(params) {
    this.card_id = params && params['card_id'] || ''; //TODO Make a global unique number generator
    this.card_name = params && params['card_name'] || '';
    this.description = params && params['description'] || '';
    this.card_number = params && params['card_number'] || '';
    this.rarity = params && params['rarity'] || '';
    this.picture = params && params['picture'] || '';
    this.card_type = params && params['card_type'] || ''; //To be not confounded with a monster's type
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
    this.atk = params && params['atk'] || null;
    this.def = params && params['def'] || null;
    this.type = params && params['type'] || ''; // aqua | beast | beast-warrior | dinosaur | dragon | fairy | fiend | fish | insect | machine | plant | psychic | pyro | reptile | rock | sea serpent | spellcaster | warrior | winged beast | zombie
}

//Enumeration
MonsterCard.EMonsterType = {
    AQUA: 'aqua'
    , BEAST: 'beast'
    , BEAST_WARRIOR: 'beast-warrior'
    , DINOSAUR: 'dinosaur'
    , DRAGON: 'dragon'
    , FAIRY: 'fairy'
    , FIEND: 'fiend'
    , FISH: 'fish'
    , INSECT: 'insect'
    , MACHINE: 'machine'
    , PLANT: 'plant'
    , PSYCHIC: 'psychic'
    , PYRO: 'pyro'
    , REPTILE: 'reptile'
    , ROCK: 'rock'
    , SEA: 'sea'
    , SERPENT: 'serpent'
    , SPELLCASTER: 'spellcaster'
    , WARRIOR: 'warrior'
    , WINGED_BEAST: 'winged_beast'
    , ZOMBIE: 'zombie'
}
;

MonsterCard.EMonsterAttribure = {
    DARK: 'dark'
    , EARTH: 'earth'
    , FIRE: 'fire'
    , LIGHT: 'light'
    , WATER: 'water'
    , WIND: 'wind'
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