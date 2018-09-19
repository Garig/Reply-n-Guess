<?php
namespace App\EventListener;
use Symfony\Component\Security\Core\User\UserInterface;


// src/App/EventListener/AuthenticationSuccessListener.php

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class AuthenticationSuccessListener {
/**
 * @param AuthenticationSuccessEvent $event
 */
public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
{
    $data = $event->getData();
    $user = $event->getUser();

    if (!$user instanceof UserInterface) {
        return;
    }

    $data['data'] = array(
        'roles' => $user->getRoles(),
        'id' => $user->getId(),
        'username' => $user->getUsername(),
        'email' => $user->getEmail(),
        'avatar' => $user->getAvatar(),
        'birthDate' => $user->getBirthDate(),
        'gender' => $user->getGender(),
        'score' => $user->getScore(),
        'departement' => $user->getDepartements(),
    );

    $event->setData($data);
}
}