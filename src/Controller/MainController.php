<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Question;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        $questions = $this->getDoctrine()->getRepository(Question::class)->findThreeByrandom();  

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizer = array(new DateTimeNormalizer(), new ObjectNormalizer());
        $serializer = new Serializer($normalizer, $encoders);

        dump($questions);

        $questionsJson = $serializer->serialize($questions, 'json');

        $response = new Response($questionsJson);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/test", name="test")
     */
    public function test()
    {
        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);

        $repository = $this->getDoctrine()->getRepository(Question::class);

        $question = $repository->find(1);

        $questionJson = $serializer->serialize($question, 'json');

        $response = new Response($questionJson);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/send", name="send_test")
     */
    public function testDeserialize(Request $request)
    {       
        $content = $request->getContent();
        $json = json_decode($content, true);

        $question = new Question();
        $question->setTitle($json['title']);
        $question->setProp1($json['prop_1']);
        $question->setProp2($json['prop_2']);
        
        $em = $this->getDoctrine()->getManager();
        $em->persist($question);
        $em->flush();

        return new JsonResponse($json);
    }
}

