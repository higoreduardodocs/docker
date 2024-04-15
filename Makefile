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
	docker stop nginx server mongo \
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

### clear-volumes
clear-volumes:
	docker system prune \
	&& docker volume rm docker_mongo-db \
	&& docker volume prune

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

### run-prod
run-prod:
	MONGO_USER=admin MONGO_PASS=admin MONGO_DB=swarm \
		docker compose \
		-f docker-compose.yml \
		-f docker-compose.prod.yml \
		up -d \
	&& clear \
	&& docker ps

### down-prod
down-prod:
	MONGO_USER=admin MONGO_PASS=admin MONGO_DB=swarm \
		docker compose \
		-f docker-compose.yml \
		-f docker-compose.prod.yml \
		down \
	&& clear \
	&& docker ps