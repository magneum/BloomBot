FROM python:latest
ENV _кєηz_ "/venv"
RUN python -m venv $_кєηz_
ENV PATH "$_кєηz_/bin:$PATH"
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
RUN yarn global install spotify-dl spdl-core forever pm2 --ignore-engines 
RUN yarn install vlkyre --ignore-engines
RUN apt-get update && apt-get install nodejs yarn -y
RUN corepack enable && corepack prepare yarn@stable --activate && yarn set version berry
RUN 
RUN git clone --branch npm https://github.com/KryKenz/Vlkyre
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=npm
RUN git fetch origin npm
RUN git reset --hard origin/npm
RUN pip install -r requirements.txt && yarn add v1.22.19
CMD [ "python", "Operator.py" ]