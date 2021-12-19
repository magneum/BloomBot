FROM ubuntu
RUN apt update 
RUN apt upgrade -y 
ENV DEBIAN_FRONTEND=noninteractive 
RUN apt install git -y 
RUN apt-get install curl -y 
RUN apt install -y ffmpeg opus-tools bpm-tools 
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash -
RUN apt install nodejs -y
RUN git clone https://github.com/Krakinz/Mizuki.git
RUN cd Mizuki
WORKDIR /Mizuki
RUN npm install --force
RUN touch ~/.hushlogin
CMD node 𝓜𝖎𝖟𝖚ӄ𝖎™.js
