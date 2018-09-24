<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use App\Entity\Question;

class QuestionAnsweredController extends AbstractController
{
    public function __invoke($id)
    {
        $data = $this->AnsweredQuestions($id);
        return $data;
    }

    public function AnsweredQuestions($id)
    {
        return $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->findUserAnsweredQuestions($id);  
    }
}