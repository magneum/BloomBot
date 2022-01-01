const RedditImageFetcher = require("reddit-image-fetcher");
RedditImageFetcher.fetch({
  type: "meme",
}).then((result) => {
  console.log(result);
});
