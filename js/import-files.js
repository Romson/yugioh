/*
 Copyright (c) 2015 Greg McLeod  (Email: cleod9{at}gmail.com)

 The below code demonstrates how to use ImportJS.

 */
//How to preload files
ImportJS._settings.debug = false; //<-Hack if you want debug details
ImportJS.preload({
    baseUrl: 'js/lib',
    packages: ['board.js', 'card.js', 'deck.js', 'field.js', 'player.js'],
    libs: [
        'logger.js'
    ],
    //entryPoint: 'Main:new',
    ready: function (arr) {
        console.log('Fully loaded', arr);
    },
    error: function (arr) {
        console.log('Error preloading files: [' + arr.join(', ') + ']');
    }
});