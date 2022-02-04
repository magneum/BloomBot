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
RUN apt-get install imagemagick -y
# RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
# RUN chmod a+rx /usr/local/bin/youtube-dl
RUN apt-get install npm -y 
RUN npm install --global n 
RUN npm install -g npm
RUN n install 17 
RUN path=path 
RUN hash -r 
RUN path=path 
RUN hash -r 
RUN git clone https://github.com/Krakinz/Sakura.git 
RUN cd Sakura
WORKDIR /Sakura
# WORKDIR /
# COPY . /Sakura
# WORKDIR /Sakura
# RUN git init --initial-branch=KrakinzLab
# RUN git remote add origin https://github.com/Krakinz/Sakura.git
# RUN git fetch origin KrakinzLab
# RUN git reset --hard origin/KrakinzLab
RUN pip install -r Sakura☣️Reactor/ӄʀǟӄɨռʐ🐙ʟǟɮ.txt 
RUN npm install --force
RUN npm test
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py

