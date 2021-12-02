FROM kalilinux/kali-rolling
RUN apt update 
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash -
RUN apt upgrade -y 
RUN apt install git -y 
RUN apt install nodejs -y
RUN apt install python3 -y 
RUN apt install python3-pip -y 
RUN apt install fonts-symbola 
RUN git clone https://github.com/Krakinz/Ultron.git
RUN cd Ultron
WORKDIR /Ultron
RUN npm install 
CMD node Últrðñ.js