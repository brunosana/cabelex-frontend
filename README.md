# Cabelex FrontEnd

## Deploy

[Click Here](https://cabelex.herokuapp.com/) to see the Deploy.

The main user is 
login: admin
password: admin

## Concept:

### Figma

[Click Here](https://www.figma.com/file/xydPmsxv5ulAGGkaj8m2VJ/Cabelex?node-id=0%3A1) to see the figma page.

### Fonts

1. Caveat (Bold 700)
2. Comfortaa (Light 300, Medium 500, Bold 700)

### References

[Data Tables Users Orders](https://dribbble.com/shots/16855197-Data-Tables-Users-Orders)
[Colorful For Joy](https://dribbble.com/shots/12023143-Colorful-For-Joy)
[Stratified](https://dribbble.com/shots/14591903-Stratified)
[Login Sign up Dark Mode AW Universal Page](https://dribbble.com/shots/16753965-Login-Sign-up-Dark-Mode-AW-Universal-Page)

---


## Entities Scructure

1. Filial

|Name|Type|Required|
|---|---|---|
|ID|String|Yes|
|NOME_FILIAL|String|Yes|
|TOTAL_FUNCIONARIOS|Number|Yes|

2. Funcionário

|Name|Type|Required|
|---|---|---|
|ID|String|Yes|
|NOME_FUNCIONARIO|String|Yes|
|NOME_FILIAL|String|Yes|

---

### Running Application

Type `yarn start` on terminal

