FROM python:latest
ENV BUN "/venv"
RUN python -m venv $BUN
ENV PATH "$BUN/bin:$PATH"

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
lsb-release \
python-is-python3
RUN git clone https://github.com/Krykenz/Vlkyre/tree/Valkyrie
RUN rm -rf node_modules && npm install -g n
RUN n install 16 && hash -r

# Vlkyre Redis + Railway.app Installation
RUN curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
RUN curl -fsSL https://railway.app/install.sh | sh
RUN apt-get update && apt-get install redis -y


# Vlkyre Runtime support Installation
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=Primary && git fetch origin Primary && git reset --hard origin/Primary
RUN npm install -g spotify-dl spdl-core forever --force
RUN npm install --force youtube-sr@4.2.0 yt-search@2.10.3 ytdl-core
CMD node --no-warnings •Route/ӄryӄnz.js