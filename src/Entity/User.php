<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use App\Controller\UserController;

/**
 * @ApiResource(
 *      collectionOperations={
 *          "get",
 *          "post",
 *          "getRanking"={
 *              "method"="GET",
 *              "path"="/getRanking",
 *              "controller"=UserController::class
 *          },
 *      },
 *      attributes={"formats"={"jsonld"}}
 * )
 * @ORM\Table(name="app_users")
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */

class User implements UserInterface, \Serializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_validate;

    /**
     * @ORM\Column(type="string", length=60, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $avatar;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $birth_date;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $gender;

    /**
     * @ORM\Column(type="integer", nullable=true, options={"unsigned":true}))
     */
    private $score;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Department", inversedBy="users")
     */
    private $departments;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Role", inversedBy="users")
     */
    private $role;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Answer", mappedBy="users")
     */
    private $answers;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Question", mappedBy="users")
     */
    private $questions;

    /**
     * @ORM\Column(type="integer")
     */
    private $total_answers;

    /**
     * @ORM\Column(type="integer")
     */
    private $total_accurate_answers;

    /**
     * @ORM\Column(type="float")
     */
    private $perc_accuracy_answers;

    public function __construct()
    {
        $this->answers = new ArrayCollection();
        $this->questions = new ArrayCollection();
        $this->setIsValidate(false);
        $this->setScore(100);
        $this->setTotalAnswers(0);
        $this->setTotalAccurateAnswers(0);
        $this->setPercAccuracyAnswers(0);
    }

    public function getSalt()
    {
        // you *may* need a real salt depending on your encoder
        // see section on salt below
        return null;
    }

    public function eraseCredentials()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIsValidate(): ?bool
    {
        return $this->is_validate;
    }

    public function setIsValidate(bool $is_validate): self
    {
        $this->is_validate = $is_validate;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getBirthDate(): ?string
    {
        return $this->birth_date;
    }

    public function setBirthDate(string $birth_date): self
    {
        $this->birth_date = $birth_date;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(?int $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getDepartments(): ?Department
    {
        return $this->departments;
    }

    public function getDepartmentUser(): ?array
    {
        return array($this->departments->getId());
    }

    public function setDepartments(?Department $departments): self
    {
        $this->departments = $departments;

        return $this;
    }

    public function getRoles(): ?array
    {
        return array($this->role->getName());
    }

    public function getRole(): ?Role
    {
        return $this->role;
    }

    public function setRole(?Role $role): self
    {
        $this->role = $role;

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
            $answer->setUsers($this);
        }

        return $this;
    }

    public function removeAnswer(Answer $answer): self
    {
        if ($this->answers->contains($answer)) {
            $this->answers->removeElement($answer);
            // set the owning side to null (unless already changed)
            if ($answer->getUsers() === $this) {
                $answer->setUsers(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Question[]
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): self
    {
        if (!$this->questions->contains($question)) {
            $this->questions[] = $question;
            $question->setUsers($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->questions->contains($question)) {
            $this->questions->removeElement($question);
            // set the owning side to null (unless already changed)
            if ($question->getUsers() === $this) {
                $question->setUsers(null);
            }
        }

        return $this;
    }

    /** @see \Serializable::serialize() */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->password,
            // see section on salt below
            // $this->salt,
        ));
    }

    /** @see \Serializable::unserialize() */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->password,
            // see section on salt below
            // $this->salt
        ) = unserialize($serialized, array('allowed_classes' => false));
    }

    public function getTotalAnswers(): ?int
    {
        return $this->total_answers;
    }

    public function setTotalAnswers(int $total_answers): self
    {
        $this->total_answers = $total_answers;

        return $this;
    }

    public function getTotalAccurateAnswers(): ?int
    {
        return $this->total_accurate_answers;
    }

    public function setTotalAccurateAnswers(int $total_accurate_answers): self
    {
        $this->total_accurate_answers = $total_accurate_answers;

        return $this;
    }

    public function getPercAccuracyAnswers(): ?int
    {
        return $this->perc_accuracy_answers;
    }

    public function setPercAccuracyAnswers(int $perc_accuracy_answers): self
    {
        $this->perc_accuracy_answers = $perc_accuracy_answers;

        return $this;
    }
}
