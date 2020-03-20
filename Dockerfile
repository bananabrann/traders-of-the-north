FROM debian:jessie

RUN apt-get update \
    && apt-get install --no-install-recommends --no-install-suggests -y \
    && apt-get install curl -y \
    && apt-get install unzip \
    && curl -sL https://deb.nodesource.com/setup_13.x | bash - \
    && apt-get install -y nodejs

RUN curl -LOk https://github.com/bananabrann/traders-of-the-north/archive/master.zip \
    && unzip master.zip \
    && cd traders-of-the-north-master \
    && npm install

# TODO Figure what Node default logging is and reassign it to /dev/stdout and stderr
# RUN ln -sf /dev/stdout \
#     && ln -sf /dev/stderr

EXPOSE 8000 4040

# TODO Add run commands
CMD 