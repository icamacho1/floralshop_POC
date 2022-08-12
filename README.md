# Uso:

Se recomienda utilizar node 16 para el el install y el build del proyecto.<br>
Se incluye por si acaso un Dockerfile que soporta el proyecto.

## Instalacion con Docker:
Primero buildear la imagen:
```bash
docker build -t <NOMBRE> .
```
Una vez construida la imagen entrar en el container con
```bash
docker run -it <NOMBRE> sh
```
Y dentro del container:
```bash
hostname -i # Para identificar el host
npm run start
```
Y podremos verlo desde http://<IP:hostname-i>:3001/

## Tests y build:
Se pueden lanzar los tests desde el container con 
```bash
npm run test
npm run build
```