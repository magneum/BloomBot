FROM python:latest
ENV Caution "/venv"
RUN python -m venv $Caution
ENV PATH "$Caution/bin:$PATH"

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
RUN git clone https://github.com/Krykenz/Vlkyre.git
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl 
RUN chmod a+rx /usr/local/bin/youtube-dl 
RUN rm -rf node_modules && npm install -g n && n install 16 && hash -r 

# Vlkyre Runtime support Installation
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN pip install -r ⭕𝖈𝖆𝖗𝖆.txt 
RUN git init --initial-branch=Primary && git fetch origin Primary && git reset --hard origin/Primary
RUN npm install -g spotify-dl spdl-core typescript forever --force && npm install --force
CMD ["npm","koyeb"]