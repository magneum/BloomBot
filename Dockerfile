FROM python:latest
ENV docker "/venv"
RUN python -m venv $docker
ENV PATH "$docker/bin:$PATH"

# Vlkyre os dependency Instalation
RUN apt-get update && apt-get install -y \
jq \
npm \
git \
curl \
wget \
nodejs \
ffmpeg \
bpm-tools \
opus-tools \
python3-pip \
python-is-python3
RUN git clone --branch version_4 https://github.com/KryKenz/Vlkyre
RUN rm -rf node_modules && npm install -g n
RUN n install 16 && hash -r

# Vlkyre Runtime support Installation
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=version_4 && git fetch origin version_4 && git reset --hard origin/version_4
RUN npm install -g spotify-dl spdl-core forever --force
RUN npm install --force youtube-sr@4.2.0 yt-search@2.10.3 ytdl-core
CMD node --no-warnings •Route/ӄryӄnz.js