FROM node:16.19.0-bullseye
RUN apt-get update 
RUN apt-get install -y \
jq \
npm \
git \
curl \
wget \
ffmpeg \
bpm-tools \
opus-tools \
python3-pip \
python-is-python3
RUN apt-get update 
RUN npm install -g spotify-dl spdl-core forever pm2 --force
RUN git clone --branch version_4 https://github.com/Krykenz/Vlkyre
RUN yarn config set ignore-engines true
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=version_4 
RUN git fetch origin version_4 
RUN git reset --hard origin/version_4
RUN pip install -r ⭕𝖈𝖆𝖗𝖆.txt 
RUN npm install --force
CMD npm run vlkyre