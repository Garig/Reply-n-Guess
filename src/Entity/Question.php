<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\QuestionController;
use App\Controller\QuestionCloseController;
use App\Controller\QuestionGetController;
use App\Controller\QuestionsAnswersAndResultsController;

/**
 * @ApiResource(
 *      collectionOperations={
 *          "get",
 *          "post",
 *          "setDailyQuestions"={
 *              "method"="GET",
 *              "path"="/setDailyQuestions",
 *              "controller"=QuestionController::class
 *          },
 *          "getDailyQuestions"={
 *              "method"="GET",
 *              "path"="/getDailyQuestions",
 *              "controller"=QuestionGetController::class
 *          },
 *          "closeDailyQuestions"={
 *              "method"="GET",
 *              "path"="/closeDailyQuestions",
 *              "controller"=QuestionCloseController::class
 *          },
 *          "getAnswerAndResultDailyQuestions"={
 *              "method"="GET",
 *              "path"="/getAnswerAndResultDailyQuestions",
 *              "controller"=QuestionsAnswersAndResultsController::class
 *          },
 *      },
 *      attributes={"formats"={"jsonld"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\QuestionRepository")
 */
class Question
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $prop_1;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $prop_2;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_vote_moderator;

    /**
     * @ORM\Column(type="datetime")
     */
    private $submit_date;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $decline_date;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $validate_date;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $published_date;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $closed_date;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Answer", mappedBy="questions")
     */
    private $answers;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="questions")
     */
    private $users;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Status", inversedBy="questions")
     */
    private $statuses;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Result", cascade={"persist", "remove"})
     */
    private $results;

    public function __construct()
    {
        $this->answers = new ArrayCollection();
        $this->setNbVoteModerator(0);
        $this->setSubmitDate(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
        $this->submit_date->format("Y-m-d H:i:s");
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getProp1(): ?string
    {
        return $this->prop_1;
    }

    public function setProp1(string $prop_1): self
    {
        $this->prop_1 = $prop_1;

        return $this;
    }

    public function getProp2(): ?string
    {
        return $this->prop_2;
    }

    public function setProp2(string $prop_2): self
    {
        $this->prop_2 = $prop_2;

        return $this;
    }

    public function getNbVoteModerator(): ?int
    {
        return $this->nb_vote_moderator;
    }

    public function setNbVoteModerator(int $nb_vote_moderator): self
    {
        $this->nb_vote_moderator = $nb_vote_moderator;

        return $this;
    }

    public function getSubmitDate(): ?\DateTimeInterface
    {
        return $this->submit_date;
    }

    public function setSubmitDate(\DateTimeInterface $submit_date): self
    {
        $this->submit_date = $submit_date;

        return $this;
    }

    public function getDeclineDate(): ?\DateTimeInterface
    {
        return $this->decline_date;
    }

    public function setDeclineDate(?\DateTimeInterface $decline_date): self
    {
        $this->decline_date = $decline_date;

        return $this;
    }

    public function getValidateDate(): ?\DateTimeInterface
    {
        return $this->validate_date;
    }

    public function setValidateDate(?\DateTimeInterface $validate_date): self
    {
        $this->validate_date = $validate_date;

        return $this;
    }

    public function getPublishedDate(): ?\DateTimeInterface
    {
        return $this->published_date;
    }

    public function setPublishedDate(?\DateTimeInterface $published_date): self
    {
        $this->published_date = $published_date;

        return $this;
    }

    public function getClosedDate(): ?\DateTimeInterface
    {
        return $this->closed_date;
    }

    public function setClosedDate(?\DateTimeInterface $closed_date): self
    {
        $this->closed_date = $closed_date;

        return $this;
    }

    /**
     * @return Collection|Answer[]
     */
    public function getAnswers(): Collection
    {
        return $this->answers;
    }

    public function addAnswer(Answer $answer): self
    {
        if (!$this->answers->contains($answer)) {
            $this->answers[] = $answer;
            $answer->setQuestions($this);
        }

        return $this;
    }

    public function removeAnswer(Answer $answer): self
    {
        if ($this->answers->contains($answer)) {
            $this->answers->removeElement($answer);
            // set the owning side to null (unless already changed)
            if ($answer->getQuestions() === $this) {
                $answer->setQuestions(null);
            }
        }

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

    public function getStatuses(): ?Status
    {
        return $this->statuses;
    }

    public function setStatuses(?Status $statuses): self
    {
        $this->statuses = $statuses;

        return $this;
    }

    public function getResults(): ?Result
    {
        return $this->results;
    }

    public function setResults(?Result $results): self
    {
        $this->results = $results;

        return $this;
    }
}
