FROM debian
RUN apt update 
RUN apt upgrade -y 
RUN apt install git -y 
RUN apt-get install curl -y && apt install python3 -y && apt install python3-pip -y
RUN apt install -y ffmpeg opus-tools bpm-tools 
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash -
RUN apt install nodejs -y
RUN git clone https://github.com/Krakinz/Mizuki.git
RUN cd Mizuki
WORKDIR /Mizuki
RUN npm i --force
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py