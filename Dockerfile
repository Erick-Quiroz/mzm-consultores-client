# Usar la imagen oficial de Node.js
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Definir variables de entorno obligatorias
ENV DATABASE_URL="postgres://postgres:c0WJRqFs16aRB1i6QF1XztFEUq0LeE40jso0jqNDmmDFVMYgACtbpvvanzK83HQh@147.93.118.204:5434/mzm_consultores"
# Copiar los archivos del proyecto
COPY package.json package-lock.json ./
COPY prisma ./prisma

# Instalar dependencias
RUN npm install 

# Instalar MinIO Client (mc)
RUN apk add --no-cache bash curl && \
    curl -O https://dl.min.io/client/mc/release/linux-amd64/mc && \
    chmod +x mc && \
    mv mc /usr/local/bin/

# Generar los archivos de Prisma
RUN npx prisma generate

# Copiar el código restante
COPY . .

# Construir la aplicación Next.js (si es necesario)
RUN npm run build

# Exponer el puerto (3000 por defecto para Next.js)
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]
