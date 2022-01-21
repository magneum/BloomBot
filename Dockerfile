FROM python:latest
ENV VIRTUAL_ENV "/venv"
RUN python -m venv $VIRTUAL_ENV
ENV PATH "$VIRTUAL_ENV/bin:$PATH"
RUN mkdir 🍁ֆǟӄʊʀǟ™
RUN apt update 
RUN apt upgrade -y 
RUN apt install git -y 
RUN apt-get install curl -y && apt install python3 -y && apt install python3-pip -y
RUN apt install -y ffmpeg opus-tools bpm-tools 
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install nodejs -y
RUN cd 🍁ֆǟӄʊʀǟ™
RUN git clone https://github.com/Krakinz/Sakura.git
RUN cd Sakura
WORKDIR /Sakura
RUN npm install --force
RUN pip install -r Sakura☣️Reactor/ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
CMD python3 ʟӄʀǟӄɨռʐ🐙ʟǟɮ.py
