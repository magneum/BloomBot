const got = require("got");



got("https://www.reddit.com/r/lactating/random.json").then((response) => {
  let content = JSON.parse(response.body);
  var title = content[0].data.children[0].data.title;
  var amazeme = content[0].data.children[0].data.url;
  console.log(title + "\n" + amazeme);
});
