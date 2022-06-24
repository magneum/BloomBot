curl https://cli-assets.heroku.com/install.sh | sh
heroku plugins:install heroku-builds
heroku ps:stop run.6654
heroku builds:cancel -a vlkyre
heroku ps:restart worker -a vlkyre
heroku addons:remove heroku-postgresql:hobby-dev --confirm vlkyre
heroku addons:add heroku-postgresql:hobby-dev -a  vlkyre
heroku pg:reset -a vlkyre --confirm vlkyre