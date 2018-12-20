# URL Shortener App

Application for shortening long URL addresses to more convenient and readable short URL addresses  
Приложение для укорачивания длинных URL адресов в более удобные и читабельные короткие URL адреса

## Main stack

MERN: MongoDB + Express + React + Node.js

## Used packages // Используемые пакеты

### Front-end

-   axios
-   react
-   react-copy-to-clipboard
-   react-dom
-   react-scripts

### Back-end

-   axios
-   body-parser
-   express
-   mongoose
-   morgan
-   node-cron
-   pm2 (global)

## Installation procedure on the VPS server // Порядок установки на виртуальный сервер (VPS)

Git, NodeJS and MongoDB must be installed on the server // Git, NodeJS и MongoDB должны быть установлены на сервере

###### english

1. clone git repository
    > git clone https://github.com/OstKost/UrlShortener.git
2. change directory to cloned folder (by default it will be "UrlShortener")
    > cd UrlShortener
3. install packages
    > cd ./server  
    > npm i  
    > cd ../client  
    > npm i  
    > cd ..
4. build front-end
    > npm run client-build
5. install global "pm2"
    > npm i -g pm2
6. if MongoDB is not running, then start it  
    example for Linux
    > sudo service mongod start
7. if necessary, modify the "config.json" and "ecosystem.config.js" files for your purposes
8. run the application
    > pm2 start ecosystem.config.js

###### русский

1. клонируйте git репозиторий
    > git clone https://github.com/OstKost/UrlShortener.git
2. перейтиде созданную папку (по умолчанию это будет "UrlShortener")
    > cd UrlShortener
3. установите пакеты
    > cd ./server  
    > npm i  
    > cd ../client  
    > npm i  
    > cd ..
4. соберите клиентскую часть
    > npm run client-build
5. глобально установите пакет "pm2"
    > npm i -g pm2
6. если MongoDB не запущен, запустите его  
    пример для Linux
    > sudo service mongod start
7. если нужно, измените файлы «config.json» и «ecosystem.config.js» для ваших целей
8. запустите приложение
    > pm2 start ecosystem.config.js

## Description // Описание

###### english

-   The app shortens long URLs to shorter and more convenient
-   It is possible to enter your own short URL
-   If you try to use the already used short address, a message will be displayed that the short address already exists
-   If you try to shorten the existing long URL, a message will appear indicating its existence and a link to the finished short URL address
-   The number of jumps to short URL addresses is stored in the database
-   Addresses are stored for 15 days from the moment of creation, expired addresses are deleted every day at midnight
-   The entered addresses are checked for performance
-   Logging of requests is conducted by means of pm2 and morgan

###### русский

-   Приложение укорачивает длинные URL адреа в более короткие и удобные
-   Есть возможность ввести свой короткий URL
-   При попытке использовать уже используемый короткий адрес будет выведено сообщение, что короткий адрес уже существует
-   При попытке укоротить существующий длинный URL адрес будет выведено сообщение о его существовании и ссылка готового короткого URL адрес
-   Количество переходов по коротким URL адресам сохраняется в базе данных
-   Адреса храняться 15 дней с момента создания, каждый день в полночь происходит удаление просроченных адресов
-   Введенные адреса проверяются на работоспособность
-   Ведется логирование запросов средствами pm2 и morgan
