# FROM python:latest
# ENV KrakinzLab™ "/venv"
# RUN python -m venv $KrakinzLab™
# ENV PATH "$KrakinzLab™/bin:$PATH"
# FROM node:lts-buster
FROM ubuntu 
RUN apt update 
RUN apt upgrade -y 
RUN apt install aptitude -y
RUN aptitude install -y jq git curl wget ffmpeg nodejs npm bpm-tools python3-pip opus-tools python3 
RUN git clone https://github.com/KryKnz/Vlkyre.git
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl 
RUN chmod a+rx /usr/local/bin/youtube-dl 
RUN curl https://cli-assets.heroku.com/install.sh | sh 
RUN heroku plugins:install heroku-builds 
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN pip install -r ⭕𝖈𝖆𝖗𝖆.txt 
RUN npm install -g n pm2 yarn 
RUN n install 16 
RUN hash -r 
RUN npm install -g spotify-dl spdl-core typescript forever --force 
RUN npm install --silent --force
RUN yarn config set ignore-engines true 
RUN yarn install --ignore-engines
RUN git config --global user.name "KryKnz" 
RUN git config --global user.email "KrakinzKon@gmail.com"
RUN git config pull.rebase false 
RUN git init --initial-branch=𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
RUN git fetch origin 𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
RUN git reset --hard origin/𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
CMD python3 🌱𝖆𝖕𝖗𝖎𝖑𝖑𝖆.py