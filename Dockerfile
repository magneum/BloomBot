FROM debian
RUN apt update 
RUN apt upgrade -y
RUN apt install github -y
RUN apt install python3 -y
RUN apt install python3-pip -y
RUN apt install ffmpeg -y
RUN apt install opus-tools -y
RUN apt install bpm-tools -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN git clone https://github.com/Krakinz/Sakura.git
RUN apt install nodejs -y
RUN apt install npm -y
RUN cd Sakura
WORKDIR /Sakura
RUN npm i --force
RUN pip install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt && pip3 install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py