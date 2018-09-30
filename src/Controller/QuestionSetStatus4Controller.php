<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use App\Entity\Question;
use App\Entity\Status;

class QuestionSetStatus4Controller extends AbstractController
{
    public function __invoke($id)
    {
        $this->setStatus4($id);
        
    }

    public function setStatus4($id)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $question = $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->find($id);
                    
        $status4 = $this->getDoctrine()
                    ->getRepository(Status::class)
                    ->find(4);

        $question->setStatuses($status4);
        $question->setDeclineDate(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
        $question->getDeclineDate()->format("Y-m-d H:i:s");

        $entityManager->persist($question);
        $entityManager->flush();
    }
}