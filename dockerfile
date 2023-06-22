FROM ubuntu:latest

# Update and install required packages
RUN apt-get update && apt-get install -y \
    jq \
    git \
    curl \
    wget \
    ffmpeg \
    bpm-tools 
    opus-tools \
    python3-pip \
    python-is-python3 \
    nodejs \
    npm

# Install n package manager for managing Node.js versions
RUN npm install -g n

# Clear the hash cache
RUN hash -r

# Install the latest 16 version of Node.js
RUN n 16

# Install Yarn package manager
RUN npm install -g yarn

# Clear the hash cache
RUN hash -r

# Clone the repository
RUN git clone https://github.com/magneum/BloomBot

# Set the working directory
WORKDIR /BloomBot

# Install project dependencies using Yarn
RUN yarn

# Start the application
CMD [ "yarn", "run", "start" ]
