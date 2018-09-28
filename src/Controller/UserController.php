<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use App\Entity\User;

class UserController extends AbstractController
{
    public function __invoke()
    {
        $data = $this->AnsweredQuestions();
        return $data;
    }

    public function AnsweredQuestions()
    {
        return $this->getDoctrine()
                    ->getRepository(User::class)
                    ->findAllUsersSortedByScore();  
    }
}