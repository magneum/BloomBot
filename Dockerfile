FROM python:latest
ENV KRAKINZ_LAB "/venv"
RUN python -m venv $KRAKINZ_LAB
ENV PATH "$KRAKINZ_LAB/bin:$PATH"
RUN apt-get update && apt-get upgrade -y && apt-get install git -y && apt-get install curl -y && apt-get install ffmpeg -y && apt-get install nodejs -y && apt-get install python3 -y && apt-get install bpm-tools -y && apt-get install opus-tools -y  && apt-get install python3-pip -y && apt-get install npm -y && npm install --global n && n install 17 && path=path && hash -r && git clone https://github.com/Krakinz/Sakura.git && cd Sakura
WORKDIR /Sakura
RUN pip install -r Sakura☣️Reactor/ӄʀǟӄɨռʐ🐙ʟǟɮ.txt && npm install --force
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py