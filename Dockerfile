FROM oraclelinux:7-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN yum update -y && \
yum install -y oracle-release-el7 && \
yum install -y gcc gcc-c++ kernel-devel make && \
yum install -y oracle-nodejs-release-el7 && \
yum install -y nodejs && \
yum install -y python3 && \
yum install -y oracle-instantclient19.3-basic && \
yum clean all && \
node --version && \
npm --version && \
npm install -g yarn && \
yarn --version && \
echo Installed

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

CMD [ "yarn", "run", "start:prod" ]
