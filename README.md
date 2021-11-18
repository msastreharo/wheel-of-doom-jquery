# Añadiendo tests a un proyecto de web estática SIN usar npm con chai y mocha


1. Creado archivo `tests.html` donde voy a ejecutar los tests (copiado de una kata).
2. Creado archivo `tests.js` donde voy a escribir los tests
3. Asegurarnos de que el archivo `tests.html` incluye el siguiente elemento:

```
    <script src="main.js"></script>
```

El archivo `main.js` contiene el código que tengo que testear en el archivo `tests.js`. 

4. Extraido un trozo de código a una función para que pueda ser testeado (`seleccionarCoder(...)`).