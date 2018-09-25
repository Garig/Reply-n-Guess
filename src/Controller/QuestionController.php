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
use App\Entity\Status;

class QuestionController extends AbstractController
{
    public function __invoke()
    {
        $data = $this->setdailyQuestions();
        return $data;
    }

    public function setDailyQuestions()
    {
        $questions = $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->findThreeByStatus2();
        $entityManager = $this->getDoctrine()->getManager();
        
        $statusOne = $this->getDoctrine()
                    ->getRepository(Status::class)
                    ->find(1);
            
        for ($i=0; $i<3; $i++) {
            $question = $this->getDoctrine()
                        ->getRepository(Question::class)
                        ->find($questions[$i]['question_id'])
                        ->setPublishedDate(new \DateTime('now', new \DateTimeZone('Europe/Paris')))
                        ->setStatuses($statusOne);
            $question->getPublishedDate()->format("Y-m-d H:i:s");
            
            $entityManager->persist($question);
            $questions[$i] = $question;
        }
            
        $entityManager->flush();
        return $questions;
    }
}
