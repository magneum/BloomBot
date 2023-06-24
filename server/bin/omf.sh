#!/bin/bash

# Color variables
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Install Fish shell
echo -e "${GREEN}Installing Fish shell...${NC}"
sudo apt update
sudo apt install fish git curl wget -y

# Install Oh My Fish
echo -e "${GREEN}Installing Oh My Fish...${NC}"
curl -L https://get.oh-my.fish | fish

# Set Fish greeting to an empty string
echo -e "${GREEN}Setting Fish greeting...${NC}"
echo "set fish_greeting ''" >> ~/.config/fish/config.fish

# List of themes
themes=("agnoster" "cbjohnson" "doughsay" "fisk" "harleen" "lambda" "neel" "pure" "simple" "toaster" "zephyr" "aight" "chain" "eclm" "flash" "heartsteal" "lambda-zero" "nelsonjchen" "pygmalion" "simple-ass-prompt" "tomita" "zish" "anchor" "clearance" "edan" "fluffy" "idan" "lavender" "neolambda" "random" "simplevi" "trout" "ays" "cmorrell" "eden" "fox" "integral" "lolfish" "numist" "randomrussel" "slacker" "tweetjay" "batman" "coffeeandcode" "emoji-powerline" "gentoo" "jacaetevha" "mars" "ocean" "red-snapper" "slavic-cat" "uggedal" "beloglazov" "cor" "es" "gianu" "johanson" "mint" "one" "rider" "solarfish" "ultrafish" "bira" "cyan" "eseal" "gitstatus" "kawasaki" "mish" "pastfish" "robbyrussell" "sushi" "will" "bobthefish" "dangerous" "fishbone" "gnuykeaj" "kovial" "mokou" "perryh" "sashimi" "syl20bnr" "wolf-theme" "boxfish" "default" "fishface" "godfather" "krisleech" "mtahmed" "pie" "scorphish" "taktoa" "yimmy" "budspencer" "dmorrell" "fishy-drupal" "graystatus" "l" "nai" "plain" "separation" "technopagan" "zeit")

# Loop through each theme, install, activate, and display for 3 seconds
for theme in "${themes[@]}"; do
  echo -e "${YELLOW}Installing theme: $theme${NC}"
  fish -c "omf install $theme"
  fish -c "omf theme $theme"
  sleep 3
done

# Run Oh My Fish doctor if an error occurs
echo -e "${GREEN}Running Oh My Fish doctor...${NC}"
fish -c "omf doctor"
