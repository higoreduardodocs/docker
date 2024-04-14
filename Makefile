### run-dev
run-dev:
	docker compose \
		-f docker-compose.yml \
		-f docker-compose.dev.yml \
		up -d \
	&& clear \
	&& docker ps

### server-logs
server-logs:
	docker logs \
		server -f

### server-bash
server-bash:
	docker exec -it \
		server bash