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