# Documentation for API Platform

API Platform is a full stack framework for API-driven projects. It contains a **PHP** library to create fully-featured APIs supporting industry-leading standards (JSON-LD, GraphQL, OpenAPI...), provides ambitious **JavaScript** tooling to consume those APIs in a snap (admin, PWA and mobile apps generators, hypermedia client...) and is shipped with a nice **Docker** and **Kubernetes** integration to develop and deploy instantly in the cloud.


# Why use an API ?

When you are creating a fullstack website or app, you have to make several languages communicate between them to share datas from database to display them or receive datas from user and store them. To do that you have 2 choices :

 - Serialize datas to a dataformat manually and create routes in Controllers to make a render that Javascript can consume in templates with Twig, for example (in fact create a personnal API)
 - Use a tool like API Platform, which do that automatically and allows you to control all routes and returns on a graphic display.

# Requirements

To be able to use the last version of the API, you will need PHP 7.2 version, and Framework Symfony 4 

# Installation

When the symfony 4 framework is installed on your repository, you need to place you at the root of the project and execute this command line :

`composer require api`

**Note:** when installing API Platform this way, the API will be exposed as the `/api/` path. You need to open `http://localhost:8000/api/` to see the API documentation.

# Repository

the tree structure of the framework is presented like this in the `/public` folder :
	

 - bundles
	 - apiplatform
		 - es6-promise
		 - fetch
		 - graphiql
		 - react
		 - swagger-ui

				

# Use in our project

<img src="Capture API.png">

> example of an entity with custom paths in our API

at the begining you have only 5 routes in each entities :

 1. GET the collection of all items in DB
 2. POST one item
 3. GET one item
 4. DELETE one item
 5. PUT (modify) one item

but you can customize your routes, for example to pick an exact number of items, or to pick only some fields of a table.
In order to do that you have to create à route, like that in an annotation in your entity :

    //src/Entity/YourEntity.php

    use ApiPlatform\Core\Annotation\ApiResource;

    /**
    * @ApiResource(
	*    collectionOperations={
	*	    "get",
	*	    "post",
	*	    "yourRouteName"={
	*		    "method"= "GET",
	*		    "path"="/yourRouteName",
	*		    "controller"=NameOfYourController::class
	*	    },
	*    }
    * )
    */

this snippet will add à new entry in your Api collection of routes, but then you'll have to configure your controller to do an "action" with this path

    //src/Controller/YourController.php
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    
    class YourControllerClass extends AbstractController
    {
	    public function __invoke() 
	    {
		    //return of the method you want to execute
	    }
		public function myMethod()
		{
			//write your code here
		}
	}


then you are ready to use the full potential of your api, it's simple as this ;)
    
