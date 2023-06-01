FROM ubuntu:latest
RUN apt-get update && apt-get install -y jq git curl wget ffmpeg bpm-tools opus-tools python3-pip python-is-python3
RUN curl -s deb.nodesource.com/setup_16.x | bash
RUN apt-get update && apt-get install nodejs -y
RUN npm install -g spotify-dl spdl-core forever pm2 corepack && hash -r
RUN git clone https://github.com/magneum/BloomBot
RUN cd BloomBot
WORKDIR /BloomBot
RUN git init --initial-branch=magneum
RUN git fetch origin magneum
RUN git reset --hard origin/magneum
RUN yarn build
CMD [ "yarn", "run", "start" ]
