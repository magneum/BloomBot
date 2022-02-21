const pokemon = require("pokemontcgsdk");

pokemon.configure({ apiKey: "123abc" });
pokemon.card.all({ q: "name:raichu" }).then((cards) => {
  console.log(cards[0]); 
});
