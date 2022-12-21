# ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
FROM krykenz/node:16
RUN apt-get update && apt-get install -y
RUN npm install -g spotify-dl spdl-core forever pm2 --force
RUN mkdir кяукєηz
RUN pip install python-dotenv termcolor GitPython pyAesCrypt requests autopep8 psutil loguru cprint
RUN npm install vlkyre --force
RUN mv node_modules/vlkyre /кяукєηz
WORKDIR /кяукєηz
RUN cd vlkyre
CMD node --no-warnings .
# ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");