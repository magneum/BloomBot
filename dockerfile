FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
    jq \
    git \
    curl \
    wget \
    ffmpeg \
    bpm-tools \
    opus-tools \
    python3-pip \
    python-is-python3
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get update && apt-get install nodejs -y
RUN npm install -g spotify-dl spdl-core forever pm2 yarn corepack && hash -r
<<<<<<< HEAD
RUN git clone https://github.com/magneum/WhatsBot
RUN cd WhatsBot
WORKDIR /WhatsBot
=======
RUN git clone https://github.com/magneum/voxbot
RUN cd voxbot
WORKDIR /voxbot
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
RUN git init --initial-branch=magneum 
RUN git fetch origin magneum
RUN git reset --hard origin/magneum
RUN yarn install
CMD [ "yarn", "run", "start" ]
