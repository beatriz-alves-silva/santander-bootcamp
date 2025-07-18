# Formulários
Algumas anotações...
* **POST**: usado quando o cliente deseja enviar dados para processamento ao servidor
* **GET**: usado quando o cliente deseja obter recursos do servidor
* **target="_blank"**: abre o link em uma nova aba do navegador

* **Url**: necessário preencher com https:// por padrão
* **Email**: necessário preencher com @ por padrão

~~~ html
<form method="post">
    <h3>Açaí 500ml</h3>
    <p>Selecione os adicionais: </p>
    <input type="checkbox" name="adicional[]" value="morango"> Morango <br>
    <input type="checkbox" name="adicional[]" value="leite-condensado"> Leite Condensado <br>
    <input type="checkbox" name="adicional[]" value="pacoca"> Paçoca <br>
    <input type="checkbox" name="adicional[]" value="uva"> Uva <br>
</form>
~~~
*o **name="adicional[]"** faz o servidor receber uma lista*

exemplo: $opcional["morango", "pacoca"]