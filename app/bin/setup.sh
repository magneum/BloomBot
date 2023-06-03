#!/bin/bash

YELLOW="\033[0;33m"
GREEN="\033[0;32m"
RED="\033[0;31m"
BOLD="\033[1m"
NC="\033[0m"

# Function to print colored and bold output
cecho() {
  local color=$1
  shift
  echo -e "${BOLD}${color}$@${NC}"
}

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Function to get the distribution name
get_distribution() {
  if command_exists lsb_release; then
    lsb_release -si
  elif [ -f /etc/os-release ]; then
    . /etc/os-release
    echo "$Id"
  elif [ -f /etc/debian_version ]; then
    echo "debian"
  elif [ -f /etc/arch-release ]; then
    echo "arch"
  else
    echo "unknown"
  fi
}

# Update package repositories and upgrade system packages (Debian-based)
update_packages() {
  cecho "$YELLOW" "Updating package repositories..."
  sudo apt-get -o Acquire::Check-Valid-Until=false -o Acquire::Check-Date=false update || {
    cecho "$RED" "Failed to update package repositories. Exiting..."
    exit 1
  }
  cecho "$YELLOW" "Upgrading system packages..."
  sudo apt-get upgrade -y || {
    cecho "$RED" "Failed to upgrade system packages. Exiting..."
    exit 1
  }
}

# Install Node.js and npm
install_nodejs_npm() {
  cecho "$YELLOW" "Installing Node.js and npm..."
  sudo apt-get install nodejs npm -y || {
    cecho "$RED" "Failed to install Node.js and npm. Exiting..."
    exit 1
  }
}

# Install n
install_n() {
  if ! command_exists n; then
    cecho "$YELLOW" "Installing n..."
    sudo npm install -g n || {
      cecho "$RED" "Failed to install n. Exiting..."
      exit 1
    }
  else
    cecho "$GREEN" "n is already installed."
  fi
}

# Install Node.js LTS version using n
install_nodejs_lts() {
  cecho "$YELLOW" "Installing Node.js LTS version..."
  sudo n lts || {
    cecho "$RED" "Failed to install Node.js LTS version. Exiting..."
    exit 1
  }
}

# Install yarn using npm
install_yarn() {
  cecho "$YELLOW" "Installing yarn using npm..."
  sudo npm install -g yarn || {
    cecho "$RED" "Failed to install yarn. Exiting..."
    exit 1
  }
}


# Run script using yarn
run_script_with_yarn() {
  local script_name=$1
  cecho "$YELLOW" "Running script '$script_name' using yarn..."
  yarn run "$script_name" || {
    cecho "$RED" "Failed to run script '$script_name'. Exiting..."
    exit 1
  }
}

# Clear the console
clear

# Check if yarn is installed, otherwise install it using npm
if ! command_exists yarn; then
  cecho "$YELLOW" "yarn is not found. Installing yarn..."
  install_yarn
else
  cecho "$GREEN" "yarn is already installed."
fi

# Get the distribution name
distribution=$(get_distribution)

# Perform setup based on the detected distribution
case "$distribution" in
  debian)
    update_packages
    install_nodejs_npm
    install_n
    install_nodejs_lts
    ;;
  *)
    cecho "$RED" "Unsupported distribution. Exiting..."
    exit 1
    ;;
esac


# Show completion message
cecho "$GREEN" "Setup completed successfully."
