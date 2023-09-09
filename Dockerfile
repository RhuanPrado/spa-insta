# Use a imagem oficial do Node.js como base
FROM node:18.16.1

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para baixar as dependências primeiro
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

COPY .env.local ./

# Copie o restante do código-fonte para o contêiner
COPY . .

# Construa a aplicação Next.js para produção
RUN npm run build

# Exponha a porta em que sua aplicação Next.js será executada
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
