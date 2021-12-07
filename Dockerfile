FROM ubuntu
RUN apt update 
RUN apt install git -y 
RUN apt install curl -y 
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install nodejs -y
RUN git clone https://github.com/Krakinz/Mee6.git
RUN cd Mee6
WORKDIR /Mee6
RUN npm install 
CMD node ᴍᴇᴇ6⚡™.js