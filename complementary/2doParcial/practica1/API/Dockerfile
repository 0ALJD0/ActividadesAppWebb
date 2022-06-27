#indicamos que imagen usaremos

FROM node
#copiaremos todo los archivos del directiorio donde esta ubicado el Dockerfile
#a la ruta de la maquina virtual 
COPY . /var/www
#indicamos  cual será el directorio donde se trabajara
WORKDIR /var/www
#le decimos al servidor que instale todos los paquetes de node necesarios
RUN npm install
#definimos el puerto a usar
EXPOSE 3000
#iniciamos la aplicacion del servidor
ENTRYPOINT [ "npm","start" ]