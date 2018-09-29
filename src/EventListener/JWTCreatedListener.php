<?php
// src/App/EventListener/JWTCreatedListener.php
namespace App\EventListener;
use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\HttpFoundation\RequestStack;

class JWTCreatedListener {
    /**
     * @var RequestStack
     */
    private $requestStack;

    /**
     * @param RequestStack $requestStack
     */
    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    /**
     * @param JWTCreatedEvent $event
     *
     * @return void
     */
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        $user = $event->getUser();

        $request = $this->requestStack->getCurrentRequest();

        $payload       = $event->getData();
        $payload['id'] = $user->getId();
        $payload['username'] = $user->getUsername();
        $payload['email'] = $user->getEmail();
        $payload['gender'] = $user->getGender();
        $payload['avatar'] = $user->getAvatar();
        $payload['birthDate'] = $user->getBirthDate();
        $payload['score'] = $user->getScore();
        $payload['departments'] = $user->getDepartmentUser();

        $event->setData($payload);
        
        $header        = $event->getHeader();
        $header['cty'] = 'JWT';

        $event->setHeader($header);
    }
}