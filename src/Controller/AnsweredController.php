<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Answer;

class AnsweredController extends AbstractController
{
    public function __invoke($userId)
    {
        $data = $this->AnsweredQuestions($userId);
        return $data;
    }

    public function AnsweredQuestions($userId)
    {
        return $this->getDoctrine()
                    ->getRepository(Answer::class)
                    ->findUserAnsweredQuestions($userId);
    }
}
