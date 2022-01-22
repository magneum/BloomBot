FROM kalilinux/kali-rolling
RUN apt-get update && apt-get upgrade -y && apt-get install git -y && apt-get install python3 -y && apt-get install python3-pip -y && apt-get install -y ffmpeg opus-tools bpm-tools && apt-get install nodejs -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN git clone https://github.com/Krakinz/Sakura.git
RUN cd Sakura
WORKDIR /Sakura
RUN npm i --force
RUN pip install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py
