FROM node
#RUN ["apt-get","update"]
#RUN ["apt-get","install","-y","vim"]
COPY . ./var/www
WORKDIR /var/www
#ENTRYPOINT [ "node"," index.js" ]
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm","start" ]
#para correr este archivo debo estar en la arpeta con el comando docker build, -t pruebapracticadocker
#no lo wjwcruamos solo construimos la imagen.
#luego par ejecutar esa imagen usamos docker run --name pruebapracticadocker -d 
#con eso aparecera en nuestro contenedor individual
#para ejecutarlo vamos los containers y darle clic derecho run
#instala las imagenes de node y mongo y matenalas alli
#si uamos el comando anterior sin la -d se ejecuta directamente en la consola