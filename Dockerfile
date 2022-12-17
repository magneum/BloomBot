FROM python:latest
ENV version_4 "/venv"
RUN python -m venv $version_4
ENV PATH "$version_4/bin:$PATH"

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
RUN git clone --branch version_4 https://github.com/Krykenz/Vlkyre
RUN npm install -g n && n install 16 && hash -r

# Vlkyre Runtime support Installation
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN npm install -g spotify-dl spdl-core forever --force
RUN git init --initial-branch=version_4 && git fetch origin version_4 && git reset --hard origin/version_4
CMD npm run build