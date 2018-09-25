<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Answer;


class AnsweredController extends AbstractController
{
    public function __invoke($id)
    {
        $data = $this->AnsweredQuestions($id);
        return $data;
    }

    public function AnsweredQuestions($id)
    {
        return $this->getDoctrine()
                    ->getRepository(Answer::class)
                    ->findUserAnsweredQuestions($id);
    }
}
