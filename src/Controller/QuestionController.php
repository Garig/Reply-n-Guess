<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

use App\Entity\Question;

class QuestionController extends AbstractController
{
    // public function __invoke(Question $data): Question
    public function __invoke()
    {
        $data = $this->dailyQuestions();
        return $data;
    }

    public function dailyQuestions()
    {
        return $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->findThreeByrandom();
    }
}
