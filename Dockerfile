FROM python:latest
ENV KRAKINZ_LAB "/venv"
RUN python -m venv $KRAKINZ_LAB
ENV PATH "$KRAKINZ_LAB/bin:$PATH"
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install git -y
RUN apt-get install curl -y
RUN apt-get install ffmpeg -y
RUN apt-get install nodejs -y
RUN apt-get install python3 -y
RUN apt-get install bpm-tools -y
RUN apt-get install opus-tools -y
RUN apt-get install python3-pip -y
RUN apt-get install npm -y
RUN npm install --global n
RUN n install lts
RUN path=path
RUN hash -r
RUN git clone https://github.com/Krakinz/Sakura.git
RUN cd Sakura
WORKDIR /Sakura
RUN npm install --force
RUN pip install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py