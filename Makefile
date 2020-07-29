.DEFAULT_GOAL := help

PWD ?= $$(pwd)
USERID ?= $$(id -u)


build-backend: ## Build the docker image of Telzir-Backend
	docker-compose  -f telzir-backend/docker-compose.yml build
	
build-backend-nocache: ## Build the docker image of Telzir-Backend
	docker-compose  -f telzir-backend/docker-compose.yml build --no-cache

start-backend: ## Build and Start the docker container of Telzir-Backend
	docker-compose  -f telzir-backend/docker-compose.yml up -d

stop-backend: ## Stop the docker container of Telzir-Backend
	docker-compose  -f telzir-backend/docker-compose.yml stop

tests-backend: ## Run Tests on the docker container of Telzir-Backend
	docker-compose  -f telzir-backend/docker-compose.yml exec api npm test
	

help: ## generate this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
