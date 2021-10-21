# word-definition-app


To install the project:

**Steps:**
* git clone https://github.com/mclarz/word-definition-app.git

* cd <PROJECT_FOLDER>

* git checkout master

* composer install

* php artisan key:generate

* php artisan migrate

* php artisan db:seed

* npm install

* npm run dev

* php artisan serve

**Note:**

1. Please create database for the application. 

2. Copy this value below and paste to the **.env**

```
MIX_WORDS_API_KEY=379941a238msh6d22129f42867b7p117233jsn71333c62325e
MIX_WORDS_API_URL=https://mashape-community-urban-dictionary.p.rapidapi.com/define
MIX_WORDS_API_HOST=mashape-community-urban-dictionary.p.rapidapi.com

```
If you notice I did not use  https://www.wordsapi.com/ because it needs a credit to subscribe. I just replace it to **Urban Dictionary API** that has also a definition result.






