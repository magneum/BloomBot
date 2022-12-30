FROM python:latest
ENV кєηz_ "/venv"
RUN python -m venv $кєηz_
ENV PATH "$кєηz_/bin:$PATH"
RUN apt-get update && apt-get install -y \
jq \
git \
curl \
wget \
ffmpeg \
bpm-tools \
opus-tools \
python3-pip \
python-is-python3
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get update && apt-get install nodejs -y
RUN npm install -g spotify-dl spdl-core forever pm2 yarn corepack && hash -r
RUN git clone --branch krytek https://github.com/KryKenz/Vlkyre
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=krytek
RUN git fetch origin krytek
RUN git reset --hard origin/krytek
RUN pip install -r requirements.txt 
RUN yarn add vlkyre@latest --ignore-engines
CMD python Operator.py