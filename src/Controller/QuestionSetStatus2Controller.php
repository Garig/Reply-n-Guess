<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use App\Entity\Question;
use App\Entity\Status;

class QuestionSetStatus2Controller extends AbstractController
{
    public function __invoke($id)
    {
        $this->setStatus2($id);
        
    }

    public function setStatus2($id)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $question = $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->find($id);
                    
        $status2 = $this->getDoctrine()
                    ->getRepository(Status::class)
                    ->find(2);

        $question->setStatuses($status2);
        $question->setValidateDate(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
        $question->getValidateDate()->format("Y-m-d H:i:s");

        $entityManager->persist($question);
        $entityManager->flush();
    }
}