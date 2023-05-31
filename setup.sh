#!/bin/bash

YELLOW="\033[0;33m"
GREEN="\033[0;32m"
RED="\033[0;31m"
NC="\033[0m"

# Function to print colored output
print_color() {
  local color=$1
  shift
  echo -e "${color}$@${NC}"
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
    echo "$ID"
  elif [ -f /etc/debian_version ]; then
    echo "debian"
  elif [ -f /etc/arch-release ]; then
    echo "arch"
  else
    echo "unknown"
  fi
}

# Update package repositories and upgrade system packages (Debian-based)
update_packages_debian() {
  print_color "$YELLOW" "Updating package repositories..."
  sudo apt-get -o Acquire::Check-Valid-Until=false -o Acquire::Check-Date=false update || {
    print_color "$RED" "Failed to update package repositories. Exiting..."
    exit 1
  }
  print_color "$YELLOW" "Upgrading system packages..."
  sudo apt-get upgrade -y || {
    print_color "$RED" "Failed to upgrade system packages. Exiting..."
    exit 1
  }
}

# Update package repositories and upgrade system packages (Arch Linux-based)
update_packages_arch() {
  print_color "$YELLOW" "Updating package repositories..."
  sudo pacman -Syu --noconfirm || {
    print_color "$RED" "Failed to update package repositories. Exiting..."
    exit 1
  }
}

# Install packages (Debian-based)
install_packages_debian() {
  local packages=(
    jq git curl wget ffmpeg bpm-tools opus-tools nodejs npm python3-pip
  )

  for package in "${packages[@]}"; do
    if ! command_exists "$package"; then
      print_color "$YELLOW" "Installing $package..."
      sudo apt-get install "$package" -y || {
        print_color "$RED" "Failed to install $package. Exiting..."
        exit 1
      }
    else
      print_color "$GREEN" "$package is already installed."
    fi
  done
}

# Install packages (Arch Linux-based)
install_packages_arch() {
  local packages=(
    jq git curl wget ffmpeg bpm-tools opus-tools nodejs npm python-pip
  )

  for package in "${packages[@]}"; do
    if ! command_exists "$package"; then
      print_color "$YELLOW" "Installing $package..."
      sudo pacman -S "$package" --noconfirm || {
        print_color "$RED" "Failed to install $package. Exiting..."
        exit 1
      }
    else
      print_color "$GREEN" "$package is already installed."
    fi
  done
}


# Install or update npm
install_or_update_npm() {
  if command_exists npm; then
    print_color "$YELLOW" "Updating npm..."
    sudo npm install -g npm@latest || {
      print_color "$RED" "Failed to update npm. Exiting..."
      exit 1
    }
  else
    print_color "$YELLOW" "Installing npm..."
    sudo apt-get install npm -y || {
      print_color "$RED" "Failed to install npm. Exiting..."
      exit 1
    }
  fi
}

# Install n
install_n() {
  if ! command_exists n; then
    print_color "$YELLOW" "Installing n..."
    sudo npm install -g n || {
      print_color "$RED" "Failed to install n. Exiting..."
      exit 1
    }
  else
    print_color "$GREEN" "n is already installed."
  fi
}

# Install Node.js LTS version using n
install_nodejs_lts() {
  print_color "$YELLOW" "Installing Node.js LTS version..."
  sudo n lts || {
    print_color "$RED" "Failed to install Node.js LTS version. Exiting..."
    exit 1
  }
}

# Install yarn
install_yarn() {
  if ! command_exists yarn; then
    print_color "$YELLOW" "Installing yarn..."
    sudo npm install -g yarn || {
      print_color "$RED" "Failed to install yarn. Exiting..."
      exit 1
    }
  else
    print_color "$GREEN" "yarn is already installed."
  fi
}

# Remove existing node_modules and yarn.lock if present
remove_existing_files() {
  if [ -d "node_modules" ] || [ -f "yarn.lock" ]; then
    print_color "$YELLOW" "Removing existing node_modules and yarn.lock..."
    rm -rf node_modules yarn.lock || {
      print_color "$RED" "Failed to remove existing node_modules and yarn.lock. Exiting..."
      exit 1
    }
  fi
}

# Build your project
build_project() {
  print_color "$YELLOW" "Building your project..."
  yarn build || {
    print_color "$RED" "Failed to build your project. Exiting..."
    exit 1
  }
}

# Clear the console
clear

# Get the distribution name
distribution=$(get_distribution)

# Perform setup based on the detected distribution
case "$distribution" in
  debian)
    update_packages_debian
    install_packages_debian
    install_or_update_npm
    install_n
    install_nodejs_lts
    install_yarn
    remove_existing_files
    build_project
    ;;
  arch)
    update_packages_arch
    install_packages_arch
    install_or_update_npm
    install_n
    install_nodejs_lts
    install_yarn
    remove_existing_files
    build_project
    ;;
  *)
    print_color "$RED" "Unsupported distribution. Exiting..."
    exit 1
    ;;
esac

# Show all scripts' choices from package.json in colored
print_color "$GREEN" "Setup completed successfully."
