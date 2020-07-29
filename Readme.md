# Telzir

Sistema para disparo em massa de e-mails usando as seguintes tecnologias:

<ul>
<li>NodeJS com Express JS no Back-End </li>
<li>React JS no Front-End</li>
<li>Docker com docker-compose</li>
</ul>

O sistema permite criar templates em html e possibilita escrever emails e reutilziar o templates salvos em banco de dados. O sistema usa o Redis e as Filas do Laravel. É possivel carregar um arquivo excel (xlsx) com uma coluna <pre>email</pre> com os endereços de e-mail dos destinatários

## Instruções para Rodar o Projeto

<pre>docker-compose up -d</pre>
<pre>cp .env.example .env</pre>
<pre>docker-compose exec app composer install</pre>
<pre>docker-compose exec app php artisan key:generate</pre>
<pre>docker-compose exec app php artisan migrate</pre>
<pre>docker-compose exec app php artisan db:seed</pre>
