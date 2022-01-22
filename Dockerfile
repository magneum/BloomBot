FROM debian
RUN apt update 
RUN apt upgrade -y 
RUN apt install -y github
RUN apt install -y python3
RUN apt install -y python3-pip 
RUN apt install -y ffmpeg
RUN apt install -y opus-tools
RUN apt install -y bpm-tools 
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN git clone https://github.com/Krakinz/Sakura.git
RUN apt install -y nodejs
RUN apt install -y npm
RUN cd Sakura
WORKDIR /Sakura
RUN npm i --force
RUN pip install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt && pip3 install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py