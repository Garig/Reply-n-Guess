<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Question;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\HttpFoundation\Response;

class MainController extends AbstractController
{
    /**
     * @Route("/test", name="index")
     */
    public function index()
    {
        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());

        $serializer = new Serializer($normalizers, $encoders);

        $repository = $this->getDoctrine()->getRepository(Question::class);

        $question = $repository->find(1);

        $questionJson = $serializer->serialize($question, 'json');

        // dump($questionJson);

        // return $this->render('main/index.html.twig', [
        //     'questionJson' => $questionJson,
        // ]);

        $response = new Response($questionJson);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}


