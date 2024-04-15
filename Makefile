### run-dev
run-dev:
	docker compose \
		-f docker-compose.yml \
		-f docker-compose.dev.yml \
		up -d \
	&& clear \
	&& docker ps

### stop-containers
stop-containers:
	docker stop server mongo web \
	&& clear

### down-dev
down-dev:
	docker compose \
		-f docker-compose.yml \
		-f docker-compose.dev.yml \
		down \
	&& clear \
	&& docker ps

### clear-server
clear-server:
	docker rmi docker-server \
	&& clear \
	&& docker images

### clear-web
clear-web:
	docker rmi docker-web \
	&& clear \
	&& docker images

### clear-volumes
clear-volumes:
	docker system prune \
	&& docker volume rm docker_mongo-db \
	&& docker volume prune \
	&& docker volume rm $(docker volume ls -qf dangling=true)

### server-logs
server-logs:
	docker logs \
		server -f

### server-bash
server-bash:
	docker exec -it \
		server bash

### mongo-bash
mongo-bash:
	docker exec -it \
		mongo mongo -u admin -p admin

### web-bash
web-bash:
	docker exec -it \
		web bash

### run-local
run-local:
	SERVER_URL=http://localhost/api/v1 NGINXFILE=nginx.local.conf MONGO_USER=admin MONGO_PASS=admin MONGO_DB=mern \
		docker compose \
		-f docker-compose.yml \
		-f docker-compose.prod.yml \
		up -d \
	&& clear \
	&& docker ps

### scale-local
scale-local:
	SERVER_URL=http://localhost/api/v1 NGINXFILE=nginx.local.conf MONGO_USER=admin MONGO_PASS=admin MONGO_DB=mern \
		docker compose \
		-f docker-compose.yml \
		-f docker-compose.prod.yml \
		up -d --scale server=2 \
	&& clear \
	&& docker ps

### down-local
down-local:
	SERVER_URL=http://localhost/api/v1 NGINXFILE=nginx.local.conf MONGO_USER=admin MONGO_PASS=admin MONGO_DB=mern \
		docker compose \
		-f docker-compose.yml \
		-f docker-compose.prod.yml \
		down \
	&& clear \
	&& docker ps

### swarm-local
swarm-local:
	SERVER_URL=http://172.30.86.36/api/v1 NGINXFILE=nginx.local.conf MONGO_USER=admin MONGO_PASS=admin MONGO_DB=mern \
		docker stack deploy \
		-c docker-compose.yml \
		-c docker-compose.prod.yml \
		swarmapp \
	&& docker service ls

### leave-swarm
leave-swarm:
	docker swarm leave -f && clear

### run-prod
run-prod:
	SERVER_URL=localhost/api/v1 NGINXFILE=nginx.conf MONGO_USER=admin MONGO_PASS=admin MONGO_DB=mern \
		docker compose \
		-f docker-compose.yml \
		-f docker-compose.prod.yml \
		up -d \
	&& clear \
	&& docker ps