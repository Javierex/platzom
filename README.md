# Platzom

Platzom es un idiome inventado para el [Curso de Fundamentos de JavaScript] (https://platzi.com/js) de [platzi] (https://platzi.com)


## Descripcion del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la plabara inicia con Z, se le añade "pe" al final
- Si la la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir on un guion en el medio
- Si la palabra original es un Palíndromo, ninguna regla anterionr cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas


## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") //Program
platzom("Zorro")// Zorrope
platzom("Zarpar")// Zarppe
platzom("abecedario")//abece-dario
platzom("sometemos")//SoMeTeMoS
```

## Créditos
- [Sacha Lifszyc](https://twitter.com/@slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)