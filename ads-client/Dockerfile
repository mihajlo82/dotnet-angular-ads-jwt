# --------- Stage 1: Build Angular app ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy the rest of the app
COPY . .

# Build for production
RUN npm run build -- --configuration production


# --------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output to nginx
COPY --from=build /app/dist/ads-client/browser /usr/share/nginx/html


# Copy custom nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
