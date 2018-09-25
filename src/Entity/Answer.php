<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\AnswerRepository")
 */
class Answer
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $user_choice;

    /**
     * @ORM\Column(type="integer")
     */
    private $user_predict;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="answers")
     */
    private $users;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Question", inversedBy="answers")
     */
    private $questions;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserChoice(): ?int
    {
        return $this->user_choice;
    }

    public function setUserChoice(int $user_choice): self
    {
        $this->user_choice = $user_choice;

        return $this;
    }

    public function getUserPredict(): ?int
    {
        return $this->user_predict;
    }

    public function setUserPredict(int $user_predict): self
    {
        $this->user_predict = $user_predict;

        return $this;
    }

    public function getUsers(): ?User
    {
        return $this->users;
    }

    public function setUsers(?User $users): self
    {
        $this->users = $users;

        return $this;
    }

    public function getQuestions(): ?Question
    {
        return $this->questions;
    }

    public function setQuestions(?Question $questions): self
    {
        $this->questions = $questions;

        return $this;
    }
}
