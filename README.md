# Run in docker

If fish:

```shell 
docker run -d -p 3000:3000 -v (pwd)/src:/app/src --name pern-app pern_front
```