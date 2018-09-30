<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use App\Entity\Question;

class QuestionGetStatus3Controller extends AbstractController
{
    public function __invoke()
    {
        $data =  $this->getStatus3Questions();
        return $data;
    }

    public function getStatus3Questions()
    {
        return $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->findAllStatus3Questions();
    }
}