<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ResultRepository")
 */
class Result
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
    private $nb_voting;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_answer_1;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_answer_2;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_predict_1;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_predict_2;

    /**
     * @ORM\Column(type="integer")
     */
    private $perc_answer_1;

    /**
     * @ORM\Column(type="integer")
     */
    private $perc_answer_2;

    /**
     * @ORM\Column(type="integer")
     */
    private $perc_men_answer_1;

    /**
     * @ORM\Column(type="integer")
     */
    private $perc_men_answer_2;

    /**
     * @ORM\Column(type="integer")
     */
    private $perc_women_answer_1;

    /**
     * @ORM\Column(type="integer")
     */
    private $perc_women_answer_2;

    /**
     * @ORM\Column(type="integer")
     */
    private $PercPredict1;

    /**
     * @ORM\Column(type="integer")
     */
    private $PercPredict2;

    /**
     * @ORM\Column(type="float")
     */
    private $perc_predict_accuracy;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNbVoting(): ?int
    {
        return $this->nb_voting;
    }

    public function setNbVoting(int $nb_voting): self
    {
        $this->nb_voting = $nb_voting;

        return $this;
    }

    public function getNbAnswer1(): ?int
    {
        return $this->nb_answer_1;
    }

    public function setNbAnswer1(int $nb_answer_1): self
    {
        $this->nb_answer_1 = $nb_answer_1;

        return $this;
    }

    public function getNbAnswer2(): ?int
    {
        return $this->nb_answer_2;
    }

    public function setNbAnswer2(int $nb_answer_2): self
    {
        $this->nb_answer_2 = $nb_answer_2;

        return $this;
    }

    public function getNbPredict1(): ?int
    {
        return $this->nb_predict_1;
    }

    public function setNbPredict1(int $nb_predict_1): self
    {
        $this->nb_predict_1 = $nb_predict_1;

        return $this;
    }

    public function getNbPredict2(): ?int
    {
        return $this->nb_predict_2;
    }

    public function setNbPredict2(int $nb_predict_2): self
    {
        $this->nb_predict_2 = $nb_predict_2;

        return $this;
    }

    public function getPercAnswer1(): ?int
    {
        return $this->perc_answer_1;
    }

    public function setPercAnswer1(int $perc_answer_1): self
    {
        $this->perc_answer_1 = $perc_answer_1;

        return $this;
    }

    public function getPercAnswer2(): ?int
    {
        return $this->perc_answer_2;
    }

    public function setPercAnswer2(int $perc_answer_2): self
    {
        $this->perc_answer_2 = $perc_answer_2;

        return $this;
    }

    public function getPercMenAnswer1(): ?int
    {
        return $this->perc_men_answer_1;
    }

    public function setPercMenAnswer1(int $perc_men_answer_1): self
    {
        $this->perc_men_answer_1 = $perc_men_answer_1;

        return $this;
    }

    public function getPercMenAnswer2(): ?int
    {
        return $this->perc_men_answer_2;
    }

    public function setPercMenAnswer2(int $perc_men_answer_2): self
    {
        $this->perc_men_answer_2 = $perc_men_answer_2;

        return $this;
    }

    public function getPercWomenAnswer1(): ?int
    {
        return $this->perc_women_answer_1;
    }

    public function setPercWomenAnswer1(int $perc_women_answer_1): self
    {
        $this->perc_women_answer_1 = $perc_women_answer_1;

        return $this;
    }

    public function getPercWomenAnswer2(): ?int
    {
        return $this->perc_women_answer_2;
    }

    public function setPercWomenAnswer2(int $perc_women_answer_2): self
    {
        $this->perc_women_answer_2 = $perc_women_answer_2;

        return $this;
    }

    public function getPercPredict1(): ?int
    {
        return $this->PercPredict1;
    }

    public function setPercPredict1(int $PercPredict1): self
    {
        $this->PercPredict1 = $PercPredict1;

        return $this;
    }

    public function getPercPredict2(): ?int
    {
        return $this->PercPredict2;
    }

    public function setPercPredict2(int $PercPredict2): self
    {
        $this->PercPredict2 = $PercPredict2;

        return $this;
    }

    public function getPercPredictAccuracy(): ?float
    {
        return $this->perc_predict_accuracy;
    }

    public function setPercPredictAccuracy(float $perc_predict_accuracy): self
    {
        $this->perc_predict_accuracy = $perc_predict_accuracy;

        return $this;
    }
}
