# E-commerce-_Back_End
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)


  ## Description

  This application creates a backend of a E-Commerce website by using Express.js,Sequlize, PosgresSQL, NPM. By using Insomia one can check the API calls to see the data by category, tag, or product.

  Built with:

 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
 ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
 ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
 ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

 (Used to check API calls)

 ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
 
  ## Demonstration

  The GIF below will show functionality and appearance.

  ![Using postgres shell to make database then seeding the data base and showing the routes through insomia](./assets/e-commerce.gif)

  The full video showing functionality can be found [here](https://youtu.be/0cK92ZaJNEI)

  ## Table of Contents
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

  ## Installation

  In order to use this application you will need `git clone` this project repository to your computer. Then write on your terminal the the following commands:

  `npm i ` For the required pakages.

  After open up your terminal in the db folder and run the following commands to create the data base on Postgres and get the seeds ino the database:

  `psql -U postgres`

  `\i schema.sql`

  Finally after make the .env.EXAMPLE file into an .env and add your user and password for your Postgres login to connect to the database and use the application.

  
  ## Usage

  After all the pakages are installed then write the following commands on your command line that you need to open in the root folder of your project

  `node seeds` to seed the database

  `npm start` to start the server

  In Insomia insert `localhost:3001` then add "/catergories" to get data.
  
  ## Credits

  [Alexis Merino](https://github.com/AlexM745) 
  

  ## Contribution
  
  If you would like to contribute to the code or improve it you can fork the repository.
  
  ## License 
  
  [![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
