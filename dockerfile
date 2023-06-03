FROM ubuntu:latest
RUN apt-get update && apt-get install -y jq git curl wget ffmpeg bpm-tools opus-tools python3-pip python-is-python3 nodejs npm
RUN npm install -g n spotify-dl spdl-core forever pm2 corepack && hash -r
RUN n install 16 && hash -r
RUN git clone https://github.com/magneum/BloomBot
RUN cd BloomBot
WORKDIR /BloomBot
RUN yarn build
CMD [ "yarn", "run", "start" ]
