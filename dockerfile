FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
    jq \
    git \
    curl \
    wget \
    bpm-tools \
    opus-tools \
    python3-pip \
    python-is-python3
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get update && apt-get install nodejs -y
RUN npm install -g spotify-dl spdl-core forever pm2 yarn corepack && hash -r
RUN mkdir mågneum && cd mågneum
WORKDIR /mågneum
RUN yarn install vlkyre-bot
CMD [ "yarn", "run", "start"]
