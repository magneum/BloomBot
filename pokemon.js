const pokemon = require("pokemontcgsdk");
pokemon.configure({ apiKey: "123abc" });
pokemon.card.all({ q: "name:pikachu" }).then(async (cards) => {
  console.log(cards[0]);
});
