FROM python:latest
ENV KRAKINZ_LAB "/venv"
RUN python -m venv $KRAKINZ_LAB
ENV PATH "$KRAKINZ_LAB/bin:$PATH"
RUN apt-get update 
RUN apt-get upgrade -y 
RUN apt-get install git -y 
RUN apt-get install curl -y 
RUN apt-get install ffmpeg -y 
RUN apt-get install nodejs -y 
RUN apt-get install python3 -y 
RUN apt-get install bpm-tools -y 
RUN apt-get install opus-tools -y  
RUN apt-get install python3-pip -y 
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
RUN curl https://cli-assets.heroku.com/install.sh | sh
RUN path=path 
RUN hash -r 
RUN heroku plugins:install heroku-builds
RUN chmod a+rx /usr/local/bin/youtube-dl
RUN apt-get install npm -y 
RUN npm install --global n
RUN n install 16
RUN path=path 
RUN hash -r 
RUN pip install -r ᴄᴏʀʟᴇxᴀ☣️Reactor/ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
RUN npm install --force
WORKDIR /
COPY . /Cortana
WORKDIR /Cortana
RUN git init --initial-branch=KrakinzLab
RUN git remote add origin https://github.com/Krakinz/Cortana.git
RUN git fetch origin KrakinzLab
RUN git reset --hard origin/KrakinzLab
CMD npm start

