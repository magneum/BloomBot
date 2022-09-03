# ("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
# // ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# // ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
# // ║ 
# // ║ We won't be responsible for any kind of ban due to this bot.
# // ║ Vlkyre was made for fun purpose and to make group management easier.
# // ║ It's your concern if you spam and gets your account banned.
# // ║ Also, Forks won't be entertained.
# // ║ If you fork this repo and edit plugins, it's your concern for further updates.
# // ║ Forking Repo is fine. But if you edit something we will not provide any help.
# // ║ In short, Fork At Your Own Risk.
# // ╚════════════╝
# ("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
FROM python:latest
ENV ᴋʀᴀᴋɪɴᴢʟᴀʙ™ "/venv"
RUN python -m venv $ᴋʀᴀᴋɪɴᴢʟᴀʙ™
ENV PATH "$ᴋʀᴀᴋɪɴᴢʟᴀʙ™/bin:$PATH"
RUN apt update && apt upgrade -y && apt install aptitude -y
RUN aptitude install -y jq git curl wget ffmpeg nodejs npm bpm-tools python3-pip opus-tools python-is-python3 && git clone https://github.com/KryKnz/Vlkyre.git
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl && chmod a+rx /usr/local/bin/youtube-dl && curl https://cli-assets.heroku.com/install.sh | sh && heroku plugins:install heroku-builds && cd Vlkyre
WORKDIR /Vlkyre
RUN pip install -r 🕊️Adapt/⭕𝖈𝖆𝖗𝖆.txt && npm install -g n pm2 yarn && n install 16 && hash -r && npm install -g spotify-dl spdl-core typescript forever --force && npm install --silent --force
# RUN yarn config set ignore-engines true && yarn install --ignore-engines
# RUN git config --global user.name "KryKnz" && git config --global user.email "KrakinzKon@gmail.com"
# RUN git config pull.rebase false && git init --initial-branch=𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 && git fetch origin 𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 && git reset --hard origin/𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
CMD python3 🌱𝖆𝖕𝖗𝖎𝖑𝖑𝖆.py
# ("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");