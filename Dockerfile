# NOTE: THIS DOCKERFILE IS GENERATED VIA "apply-templates.sh"
# PLEASE DO NOT EDIT IT DIRECTLY.
# |⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|
# FROM buildpack-deps:bullseye
# ENV PATH /usr/local/bin:$PATH
# ENV LANG C.UTF-8
# RUN set -eux; \
# 	apt-get-get update; \
# 	apt-get-get install -y --no-install-recommends \
# 		libbluetooth-dev \
# 		tk-dev \
# 		uuid-dev \
# 	; \
# 	rm -rf /var/lib/apt-get/lists/*
# ENV GPG_KEY A035C8C19219BA821ECEA86B64E628F8D684696D
# ENV PYTHON_VERSION 3.11.0a5
# RUN set -eux; \
# 	\
# 	wget -O python.tar.xz "https://www.python.org/ftp/python/${PYTHON_VERSION%%[a-z]*}/Python-$PYTHON_VERSION.tar.xz"; \
# 	wget -O python.tar.xz.asc "https://www.python.org/ftp/python/${PYTHON_VERSION%%[a-z]*}/Python-$PYTHON_VERSION.tar.xz.asc"; \
# 	GNUPGHOME="$(mktemp -d)"; export GNUPGHOME; \
# 	gpg --batch --keyserver hkps://keys.openpgp.org --recv-keys "$GPG_KEY"; \
# 	gpg --batch --verify python.tar.xz.asc python.tar.xz; \
# 	command -v gpgconf > /dev/null && gpgconf --kill all || :; \
# 	rm -rf "$GNUPGHOME" python.tar.xz.asc; \
# 	mkdir -p /usr/src/python; \
# 	tar --extract --directory /usr/src/python --strip-components=1 --file python.tar.xz; \
# 	rm python.tar.xz; \
# 	\
# 	cd /usr/src/python; \
# 	gnuArch="$(dpkg-architecture --query DEB_BUILD_GNU_TYPE)"; \
# 	./configure \
# 		--build="$gnuArch" \
# 		--enable-loadable-sqlite-extensions \
# 		--enable-optimizations \
# 		--enable-option-checking=fatal \
# 		--enable-shared \
# 		--with-lto \
# 		--with-system-expat \
# 		--with-system-ffi \
# 		--without-ensurepip \
# 	; \
# 	nproc="$(nproc)"; \
# 	make -j "$nproc" \
# 	; \
# 	make install; \
# 	cd /; \
# 	rm -rf /usr/src/python; \
# 	\
# 	find /usr/local -depth \
# 		\( \
# 			\( -type d -a \( -name test -o -name tests -o -name idle_test \) \) \
# 			-o \( -type f -a \( -name '*.pyc' -o -name '*.pyo' -o -name '*.a' \) \) \
# 		\) -exec rm -rf '{}' + \
# 	; \
# 	\
# 	ldconfig; \
# 	\
# 	python3 --version
# RUN set -eux; \
# 	for src in idle3 pydoc3 python3 python3-config; do \
# 		dst="$(echo "$src" | tr -d 3)"; \
# 		[ -s "/usr/local/bin/$src" ]; \
# 		[ ! -e "/usr/local/bin/$dst" ]; \
# 		ln -svT "/usr/local/bin/$src" "/usr/local/bin/$dst"; \
# 	done
# ENV PYTHON_PIP_VERSION 21.2.4
# ENV PYTHON_SETUPTOOLS_VERSION 58.1.0
# ENV PYTHON_GET_PIP_URL https://github.com/pypa/get-pip/raw/2caf84b14febcda8077e59e9b8a6ef9a680aa392/public/get-pip.py
# ENV PYTHON_GET_PIP_SHA256 7c5239cea323cadae36083079a5ee6b2b3d56f25762a0c060d2867b89e5e06c5
# RUN set -eux; \
# 	\
# 	wget -O get-pip.py "$PYTHON_GET_PIP_URL"; \
# 	echo "$PYTHON_GET_PIP_SHA256 *get-pip.py" | sha256sum -c -; \
# 	\
# 	python get-pip.py \
# 		--disable-pip-version-check \
# 		--no-cache-dir \
# 		"pip==$PYTHON_PIP_VERSION" \
# 		"setuptools==$PYTHON_SETUPTOOLS_VERSION" \
# 	; \
# 	pip --version; \
# 	\
# 	find /usr/local -depth \
# 		\( \
# 			\( -type d -a \( -name test -o -name tests -o -name idle_test \) \) \
# 			-o \
# 			\( -type f -a \( -name '*.pyc' -o -name '*.pyo' \) \) \
# 		\) -exec rm -rf '{}' + \
# 	; \
# 	rm -f get-pip.py
# |⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|
# FROM python:latest
# ENV ᴋʀᴀᴋɪɴᴢ⌬ʟᴀʙ "/venv"
# RUN python -m venv $ᴋʀᴀᴋɪɴᴢ⌬ʟᴀʙ
# ENV PATH "$ᴋʀᴀᴋɪɴᴢ⌬ʟᴀʙ/bin:$PATH"
# CMD python ⭕𝖈𝖆𝖗𝖆𝖒𝖊𝖑.py
# |⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|
FROM debian:stable
RUN apt-get update 
RUN apt-get upgrade -y 
RUN apt-get install git -y 
RUN apt-get install curl -y 
RUN apt-get install wget -y 
RUN apt-get install ffmpeg -y 
RUN apt-get install nodejs -y 
RUN apt-get install npm -y 
RUN apt-get install python3 -y 
RUN apt-get install bpm-tools -y 
RUN apt-get install opus-tools -y 
RUN apt-get install python3-pip -y 
RUN apt-get install python-is-python3 -y
RUN hash -r 
RUN npm install -g n && n install lts 
RUN npm install -g npm@8.5.1 
RUN hash -r 
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl && chmod a+rx /usr/local/bin/youtube-dl
RUN curl https://cli-assets.heroku.com/install.sh | sh && heroku plugins:install heroku-builds
RUN git clone https://github.com/KryKnz/Vlkyre.git 
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git config --global user.name 'KryKnz' && git config --global user.email 'KryKnz@yandex.com' && git config --global pull.ff only && git config --global pull.rebase false
RUN pip install -r ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ/кгץкภչ.txt
RUN npm install --force
CMD npm --no-warnings run vlkyre
# |⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|
# NOTE: THIS DOCKERFILE IS GENERATED VIA "apply-templates.sh"
# PLEASE DO NOT EDIT IT DIRECTLY.
