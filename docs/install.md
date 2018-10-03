# How to run application

- clone the repository
- `yarn install`
- `composer install`
- complete your .env with your database log
- `php bin/console make:migration`
- `php bin/console doctrine:migrations:migrate`
- you can import our [fixtures.sql](fixtures.sql) documents
- `yarn watch`
- `php bin/console server:run`

# Participate to development

Feel free to participate with us in this project, try fonctionality, make somes news features. You can make pull request.

# Custom command symfony

To open / close / and get results of questions closed, you can use `localhost/api` interface, implemented with API Platform. But you can also use symfony commands in your terminal.

- `php bin/console set_daily_questions` to open 3 questions
- `php bin/console close_daily_questions_oldests` to close 3 oldests questions
- `php bin/console set_results` to get results of these questions
