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
RUN git clone https://github.com/magneum/Vlkyre
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=magneum && git fetch origin magneum && git reset --hard origin/magneum
RUN pip install -r requirements.txt && npm install && npm install --global forever
# EXPOSE 3000
# EXPOSE 5000
# EXPOSE 8000
CMD [ "yarn", "run", "server" ]
