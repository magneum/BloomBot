const got = require("got");


got("https://www.reddit.com/r/RealGirls/random.json").then((response) => {
  let content = JSON.parse(response.body);
  var title = content[0].data.children[0].data.title;
  var amazeme = content[0].data.children[0].data.url;
  console.log(title + "\n" + amazeme);
});

got("https://www.reddit.com/r/Blowjobs/random.json").then((response) => {
  let content = JSON.parse(response.body);
  var title = content[0].data.children[0].data.title;
  var amazeme = content[0].data.children[0].data.url;
  console.log(title + "\n" + amazeme);
});

got("https://www.reddit.com/r/cumsluts/random.json").then((response) => {
  let content = JSON.parse(response.body);
  var title = content[0].data.children[0].data.title;
  var amazeme = content[0].data.children[0].data.url;
  console.log(title + "\n" + amazeme);
});

got("https://www.reddit.com/r/milf/random.json").then((response) => {
  let content = JSON.parse(response.body);
  var title = content[0].data.children[0].data.title;
  var amazeme = content[0].data.children[0].data.url;
  console.log(title + "\n" + amazeme);
});

got("https://www.reddit.com/r/lactating/random.json").then((response) => {
  let content = JSON.parse(response.body);
  var title = content[0].data.children[0].data.title;
  var amazeme = content[0].data.children[0].data.url;
  console.log(title + "\n" + amazeme);
});

got("https://www.reddit.com/r/pussy/random.json").then((response) => {
  let content = JSON.parse(response.body);
  var title = content[0].data.children[0].data.title;
  var amazeme = content[0].data.children[0].data.url;
  console.log(title + "\n" + amazeme);
});
