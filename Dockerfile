FROM debian:jessie

RUN apt-get update \
    && apt-get install --no-install-recommends --no-install-suggests -y \
    && apt-get install curl -y \
    && apt-get install unzip \
    && curl -sL https://deb.nodesource.com/setup_13.x | bash - \
    && apt-get install -y nodejs \
    && curl -LOk https://github.com/bananabrann/traders-of-the-north/archive/master.zip \
    && unzip master.zip \
    && cd traders-of-the-north-master \
    && npm install

EXPOSE 8080