FROM node:6.9.0

ARG HOSTUID=1000
ARG HOSTGID=1000

# create mount directory
RUN mkdir /project
RUN chown $HOSTUID:$HOSTGID /project
VOLUME /project

# add host user
RUN addgroup --gid $HOSTGID usersnap
RUN adduser --uid $HOSTUID --gid $HOSTGID  --gecos "" --disabled-password --quiet usersnap

# run config
WORKDIR /project
CMD su usersnap -c "npm install && npm run start"
