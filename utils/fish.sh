#!/bin/bash

# Install fish shell
sudo apt-get update
sudo apt-get install fish

# Install Oh My Fish
curl -L https://get.oh-my.fish | fish

# Install bobthefish theme
omf install bobthefish

# Configure theme
echo "set -g theme_nerd_fonts yes" >> ~/.config/fish/config.fish
echo "set -g theme_color_scheme gruvbox" >> ~/.config/fish/config.fish
echo "set -g theme_display_git_branch yes" >> ~/.config/fish/config.fish
echo "set -g theme_display_git_dirty yes" >> ~/.config/fish/config.fish
echo "set -g theme_display_virtualenv yes" >> ~/.config/fish/config.fish

# Restart the terminal
exec fish
