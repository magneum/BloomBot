FROM python:latest
ENV кєηz_ "/venv"
RUN python -m venv $кєηz_
ENV PATH "$кєηz_/bin:$PATH"
RUN apt-get update && apt-get install -y \
jq \
npm \
git \
curl \
wget \
ffmpeg \
corepack \ 
bpm-tools \
opus-tools \
python3-pip \
python-is-python3
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get update
RUN apt-get install nodejs -y
RUN corepack enable
RUN corepack prepare yarn@stable --activate
RUN yarn set version berry
RUN npm install -g spotify-dl spdl-core forever pm2
RUN yarn add vlkyre
RUN git clone --branch npm https://github.com/KryKenz/Vlkyre
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=npm
RUN git fetch origin npm
RUN git reset --hard origin/npm
RUN pip install -r requirements.txt && yarn add v1.22.19
CMD [ "python", "Operator.py" ]