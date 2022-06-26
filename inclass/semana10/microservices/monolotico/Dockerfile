FROM node
COPY . /app
WORKDIR /app
RUN nom install
ENV PORT 3000
EXPOSE 3000
ENTRYPOINT ["npm","start"]
