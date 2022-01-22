FROM kalilinux/kali-rolling
RUN apt update && apt upgrade -y && apt install git -y && apt install python3 -y && apt install python3-pip -y && apt install -y ffmpeg opus-tools bpm-tools && apt install nodejs -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN git clone https://github.com/Krakinz/Sakura.git
RUN cd Sakura
WORKDIR /Sakura
RUN npm install --force
RUN pip install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
CMD python3 ʟӄʀǟӄɨռʐ🐙ʟǟɮ.py
