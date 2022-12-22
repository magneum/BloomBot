FROM python:latest
ENV _кяукєηz_ "/venv"
RUN python -m venv $_кяукєηz_
ENV PATH "$_кяукєηz_/bin:$PATH"
RUN apt-get update && apt-get install -y \
jq \
npm \
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
RUN npm install -g spotify-dl spdl-core forever pm2 --force
RUN git clone --branch npm https://github.com/KryKenz/Vlkyre
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=npm
RUN git fetch origin npm
RUN git reset --hard origin/npm
RUN pip install -r requirements.txt && npm install --force
EXPOSE 8080
CMD [ "npm", "run", "start" ]
# ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
# ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
# ║ 
# ║ We won't be responsible for any kind of ban due to this bot.
# ║ Vlkyre was made for fun purpose and to make group management easier.
# ║ It's your concern if you spam and gets your account banned.
# ║ Also, Forks won't be entertained.
# ║ If you fork this repo and edit plugins, it's your concern for further updates.
# ║ Forking Repo is fine. But if you edit something we will not provide any help.
# ║ In short, Fork At Your Own Risk.
# ╚════════════╝
# ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");