# Usamos la imagen base solicitada (ojo: ubuntu va en minúsculas)
FROM ubuntu:latest

# Metadatos requeridos por el reto
LABEL maintainer="Alejandro"
LABEL category="sistemas operativos"

# Instrucción optimizada según el punto 2 del reto
RUN apt-get update && apt-get upgrade -y && apt-get install -y \
    curl \
    iputils-ping \
    telnet

# Mantiene el contenedor activo
CMD ["tail", "-f", "/dev/null"]
