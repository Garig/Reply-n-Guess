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

class QuestionCloseController extends AbstractController
{
    public function __invoke()
    {
        $data = $this->closeDailyQuestions();
        return $data;
    }

    public function closeDailyQuestions()
    {
        $questions = $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->findThreeByStatus1OrderedByOldestPublishedDate();
        $entityManager = $this->getDoctrine()->getManager();
        
        $statusZero = $this->getDoctrine()
                    ->getRepository(Status::class)
                    ->find(0);
            
        for ($i=0; $i<3; $i++) {
            $question = $this->getDoctrine()
                        ->getRepository(Question::class)
                        ->find($questions[$i]['question_id'])
                        ->setClosedDate(new \DateTime('now', new \DateTimeZone('Europe/Paris')))
                        ->setStatuses($statusZero);
            $question->getClosedDate()->format("Y-m-d H:i:s");
            
            $entityManager->persist($question);
            $questions[$i] = $question;
        }
            
        $entityManager->flush();
        return $questions;
    }
}
