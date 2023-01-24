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
RUN git clone --branch magneum https://github.com/magneum/Vlkyre
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN yarn set version classic
RUN git init --initial-branch=magneum && git fetch origin magneum && git reset --hard origin/magneum
RUN rm -f yarn.lock && pip install -r requirements.txt && yarn install && yarn global add forever
CMD [ "yarn", "run", "server" ]
