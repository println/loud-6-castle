# Theme - Todo scss deve ficar nesta pasta!

## ITCSS + BEM

- [ITCSS](https://imasters.com.br/arquitetura-da-informacao/arquitetura-css-itcss) - separação de responsabilidades
- [BEM](http://getbem.com/introduction/) - forma de organizar containers, elementos e estados

# ITCSS

- \_objects (o-\*): Todo css que vai ser utilizado em vários lugares
- \_components (c-\*): Todo css específico, criado apenas para um propósito
- \_settings.global: Apenas configurações, onde as cores e fontes devem ser mudadas
- \_vendor: Sobrescrita e importação de scss externo
- \_utilities (u-\*): helpers e classes de ajuda

# BEM

- blocos/containers (.class {...}): nome do bloco
- elementos (&\_\_button {...}): elementos dentro do bloco
- estados (&--danger {...}): estado do elemento

#### Exemplo:

Código:

```scss
.o-form {
  &__input {
  }
  &__button {
    &--active {
      background-color: red;
    }
    &--disable {
      background-color: gray;
    }
  }
}
```

Utilização:

```html
<form class="o-form">
  <input class="o-form__input" />
  <button class="o-form__button o-form__button--disable"></button>
</form>
```
