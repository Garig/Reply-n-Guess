<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends AbstractController
{
    public function api()
    {
        dump($this->getUser());
        return new Response(sprintf('Logged in as %s', $this->getUser()->getUsername()));
    }
}
