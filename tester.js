const textToImage = require('text-to-image');

textToImage.generate('Enter Movie/Series Name!', {
    debug: true,
    maxWidth: 550,
    fontSize: 50,
    fontFamily: 'LobsterTwo',
    lineHeight: 30,
    fontPath: `./Últrðñ/LobsterTwo-Bold.ttf`,
    margin: 5,
    bgColor: `#3b3b3b`,
    textColor: 'white',
});