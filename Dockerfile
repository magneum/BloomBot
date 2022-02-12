FROM python:latest
ENV KryKnz_LAB "/venv"
RUN python -m venv $KryKnz_LAB
ENV PATH "$KryKnz_LAB/bin:$PATH"
RUN apt-get update 
RUN apt-get upgrade -y 
RUN apt-get install git -y 
RUN apt-get install curl -y 
RUN apt-get install wget -y 
RUN apt-get install ffmpeg -y 
RUN apt-get install nodejs -y 
RUN apt-get install python3 -y 
RUN apt-get install bpm-tools -y 
RUN apt-get install opus-tools -y  
RUN apt-get install python3-pip -y 
RUN apt-get install python-is-python3
RUN wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
RUN curl https://cli-assets.heroku.com/install.sh | sh
RUN chmod a+rx /usr/local/bin/youtube-dl
RUN heroku plugins:install heroku-builds
RUN npm install --global npm@8.5.0
RUN apt-get install npm -y 
RUN npm install --global n
RUN n install 16
RUN path=path 
RUN hash -r 
RUN git clone https://github.com/KryKnz/Vlkyre.git 
# RUN git init --initial-branch=KryKnzLab
# RUN git remote add origin https://github.com/KryKnz/Vlkyre.git
# RUN git fetch origin KryKnzLab
# RUN git reset --hard origin/KryKnzLab
# RUN git init --initial-branch=KryKnzLab
# RUN git remote add origin https://github.com/KryKnz/Vlkyre.git
# RUN git fetch origin KryKnzLab
# RUN git reset --hard origin/KryKnzLab
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN pip install -r кгץкภչ.txt
RUN npm install --force
# WORKDIR /
# COPY . /Vlkyre
# WORKDIR /Vlkyre
CMD npm start

