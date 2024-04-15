### run-dev
run-dev:
	docker compose \
		-f docker-compose.yml \
		-f docker-compose.dev.yml \
		up -d \
	&& clear \
	&& docker ps

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
	docker system prune \
	&& docker volume prune \
	&& docker container prune \
	&& docker rmi docker-server \
	&& docker volume rm $(docker volume ls -qf dangling=true) \
	&& docker clear \
	&& docker images

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