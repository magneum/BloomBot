FROM python:latest
ENV VIRTUAL_ENV "/venv"
RUN python -m venv $VIRTUAL_ENV
ENV PATH "$VIRTUAL_ENV/bin:$PATH"
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
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN git clone https://github.com/Krakinz/Sakura.git
RUN cd Sakura
WORKDIR /Sakura
RUN npm i --force
RUN pip install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt && pip3 install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py