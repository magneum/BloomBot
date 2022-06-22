curl https://cli-assets.heroku.com/install.sh | sh`
heroku plugins:install heroku-builds`
puts `heroku ps:stop run.6654`
puts `heroku builds:cancel -a vlkyre`
puts `heroku ps:restart worker -a vlkyre`
puts `heroku addons:remove heroku-postgresql:hobby-dev --confirm vlkyre`
puts `heroku addons:add heroku-postgresql:hobby-dev -a  vlkyre`