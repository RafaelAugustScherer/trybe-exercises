2. 
```
docker container run
  --name exercio1-dia03
  -dti
  -p 4545:80
  -v "/home/htmlpublic/:/usr/local/apache2/htdocs/"
  httpd:2.4
```

3. localhost:4545/missao_trybe.html

5. docker ps

6. docker inspect 13c

7. docker container stop 13c

8. docker rm 13c

10. docker images

11. docker rmi dabb