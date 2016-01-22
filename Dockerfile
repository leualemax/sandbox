FROM ubuntu:14.04


RUN apt-get install -y curl && \
	curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash - && \
    apt-get install -y nodejs

RUN mkdir /src
ADD . /src
WORKDIR /src

CMD node .