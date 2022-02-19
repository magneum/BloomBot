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
RUN curl https://cli-assets.heroku.com/install.sh | sh && heroku plugins:install heroku-builds
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl && chmod a+rx /usr/local/bin/youtube-dl
RUN /venv/bin/python -m pip install --upgrade pip
RUN apt-get install npm -y
RUN npm install --global n
RUN n install 16
RUN path=path
RUN npm install --global npm@8.5.1
RUN hash -r 
RUN git clone https://github.com/KryKnz/Vlkyre.git 
RUN cd Vlkyre
# RUN git remote add origin https://github.com/KryKnz/Vlkyre.git
# RUN git fetch origin KryTek
# RUN git reset --hard origin/KryTek
# RUN git init --initial-branch=KryTek
# RUN git remote add origin https://github.com/KryKnz/Vlkyre.git
# RUN git fetch origin KryTek
# RUN git reset --hard origin/KryTek
WORKDIR /Vlkyre
RUN pip install -r ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ/кгץкภչ.txt
RUN npm install --force
# WORKDIR /
# COPY . /Vlkyre
# WORKDIR /Vlkyre
CMD npm run vlkyre

