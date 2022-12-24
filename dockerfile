# FROM python:latest
# ENV _кяукєηz_ "/venv"
# RUN python -m venv $_кяукєηz_
# ENV PATH "$_кяукєηz_/bin:$PATH"
# RUN apt-get update && apt-get install -y \
# jq \
# npm \
# git \
# curl \
# wget \
# ffmpeg \
# bpm-tools \
# opus-tools \
# python3-pip \
# python-is-python3
# RUN curl -s https://deb.nodesource.com/setup_16.x | bash 
# RUN apt-get update && apt-get install nodejs -y
# RUN npm install -g spotify-dl spdl-core forever pm2 --force
# RUN git clone --branch npm https://github.com/KryKenz/Vlkyre
# RUN cd Vlkyre
# WORKDIR /Vlkyre
# RUN git init --initial-branch=npm
# RUN git fetch origin npm
# RUN git reset --hard origin/npm
# RUN pip install -r requirements.txt && npm install --force
# CMD [ "python", "Operator.py" ]
# ========================================================================
FROM python:latest
ENV _кяукєηz_ "/venv"
RUN python -m venv $_кяукєηz_
ENV PATH "$_кяукєηz_/bin:$PATH"
RUN apt-get update && apt-get install -y \
jq \
npm \
git \
curl \
wget \
yarn \
ffmpeg \
bpm-tools \
opus-tools \
python3-pip \
python-is-python3
RUN curl -s https://deb.nodesource.com/setup_16.x | bash 
RUN apt-get update && apt-get install nodejs -y
RUN yarn add vlkyre
RUN cp -R node_modules/vlkyre . && cd vlkyre
WORKDIR /vlkyre
CMD yarn run start