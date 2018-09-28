<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use App\Entity\Question;
use App\Entity\Result;
use App\Entity\Status;
use App\Entity\User;

class QuestionsAnswersAndResultsController extends AbstractController
{
    public function __invoke()
    {
        return $this->getAnswers();
    }

    public function getAnswers()
    {
        $Answers = $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->findAnswersForClosedQuestions();

        $nbAnswersTot = $this->getNbAnswersTot($Answers);

        // récupère les id des différentes questions, ils seront liés à l'id des result car 1 question = 1 result
        $ids = $this->getIds($nbAnswersTot, $Answers);

        // tableau contenant le nombre total d'utilisateurs ayant répondu pour chaque questions , exemple $totalUsers[0] = nombre total d'user ayant répondu à la question 1
        $totalUsers = $this->getNbTotalUsersForEachQuestions($Answers, $ids);

        // récupère le nombre d'hommes et de femmes qui ont répondu en fonction de la question
        $totalGenderQ1 = $this->getTotalGender($Answers, $totalUsers[0]);
        $totalGenderQ2 = $this->getTotalGender($Answers, $totalUsers[1]);
        $totalGenderQ3 = $this->getTotalGender($Answers, $totalUsers[2]);

        // compte le nombre de réponse 1 et 2, le nombre d'hommes et de femmes ayant répondu aux différentes questions
        $stats = [];
        $stats[0] = $this->getStatsForQ($ids[0], $Answers, $nbAnswersTot);
        $stats[1] = $this->getStatsForQ($ids[1], $Answers, $nbAnswersTot);
        $stats[2] = $this->getStatsForQ($ids[2], $Answers, $nbAnswersTot);

        // fonction qui retourne un tableau de tout les résulats en fonction des réponses des utilisateurs
        $statsCalculated = [];
        $statsCalculated[0] = $this->getStatsCalculated($stats[0], $totalUsers[0], $totalGenderQ1);
        $statsCalculated[1] = $this->getStatsCalculated($stats[1], $totalUsers[1], $totalGenderQ2);
        $statsCalculated[2] = $this->getStatsCalculated($stats[2], $totalUsers[2], $totalGenderQ3);

        $entityManager = $this->getDoctrine()->getManager();



        for ($i=0; $i < sizeof($ids); $i++) {
            $result = $this->getDoctrine()
                    ->getRepository(Result::class)
                    ->find($ids[$i])
                    ->setNbVoting($statsCalculated[$i]['nb_voting'])
                    ->setNbAnswer1($statsCalculated[$i]['nb_answer_1'])
                    ->setNbAnswer2($statsCalculated[$i]['nb_answer_2'])
                    ->setNbPredict1($statsCalculated[$i]['nb_predict_1'])
                    ->setNbPredict2($statsCalculated[$i]['nb_predict_2'])
                    ->setPercAnswer1($statsCalculated[$i]['perc_answer_1'])
                    ->setPercAnswer2($statsCalculated[$i]['perc_answer_2'])
                    ->setPercPredict1True($statsCalculated[$i]['perc_predict_1_true'])
                    ->setPercPredict1False($statsCalculated[$i]['perc_predict_1_false'])
                    ->setPercPredict2True($statsCalculated[$i]['perc_predict_2_true'])
                    ->setPercPredict2False($statsCalculated[$i]['perc_predict_2_false'])
                    ->setPercMenAnswer1($statsCalculated[$i]['perc_men_answer_1'])
                    ->setPercMenAnswer2($statsCalculated[$i]['perc_men_answer_2'])
                    ->setPercWomenAnswer1($statsCalculated[$i]['perc_women_answer_1'])
                    ->setPercWomenAnswer2($statsCalculated[$i]['perc_women_answer_2']);

            $entityManager->persist($result);
        }

        $statusMinus1 = $this->getDoctrine()
                    ->getRepository(Status::class)
                    ->find(-1);

        for ($i=0; $i < sizeof($ids); $i++) {
            $question = $this->getDoctrine()
                    ->getRepository(Question::class)
                    ->find($ids[$i])
                    ->setStatuses($statusMinus1);
                    
            $entityManager->persist($question);
        }
        
        $addScore = 0;
        $currentScore = 0;
        $countQuestion = 0;

        // Permet de boucler sur la totalité des réponses de chaque question et de modifier le score de l'user de -1 ou +1 
        // en fonction de sa prédiction (la clé score calc indique la prédiction majoritaire donc si l'user predic correspond 
        // on ajoute un, sinon on soustrait un (seulement dans le cas ou le score de l'user est différent de 0)
        while ($i < $nbAnswersTot) {
            if ($Answers[$i]['question_id'] == $ids[$countQuestion]) {
                if ($Answers[$i]['user_predict'] == $statsCalculated[$countQuestion]['score_calc']) {
                    $addScore = 1;
                    $user = $this->getDoctrine()
                    ->getRepository(User::class)
                    ->find($Answers[$i]['user_id']);
                    $currentScore = $user->getScore();
                    $user->setScore($currentScore + $addScore);
                    $entityManager->persist($user);
                    $addScore = 0;
                    $currentScore = 0;
                    
                } else {
                    $addScore = - 1;
                    $user = $this->getDoctrine()
                    ->getRepository(User::class)
                    ->find($Answers[$i]['user_id']);
                    $currentScore = $user->getScore();
                    if($currentScore == 0) {
                        $addScore = 0;
                    } else {
                        $user->setScore($currentScore + $addScore);
                        $entityManager->persist($user);
                        $addScore = 0;
                        $currentScore = 0;
                    }
                }
                $i++;
            } else {
                $countQuestion++;
            }
        }

        $entityManager->flush();
        return $statsCalculated;
    }

    public function getNbAnswersTot($Answers) {
        $nbAnswersTot = 0;
        foreach ($Answers as $Answer) {
            $nbAnswersTot++;
        }
        return $nbAnswersTot;
    }

    public function getIds($nbAnswersTot, $Answers) {
        $i = 0;
        $ids = [];

        while ($i < $nbAnswersTot) {
            if ($i == 0) {
                $ids[] = $Answers[$i]['question_id'];
                $i++;
            } else if ($Answers[$i-1]['question_id'] != $Answers[$i]['question_id'])
            $ids[] = $Answers[$i]['question_id'];
            $i++;
        }
        return $ids;
    }

    public function getNbTotalUsersForEachQuestions($Answers, $ids) {

        $totalUsers = [];
        $totalUsersForQ1 = 0;
        $totalUsersForQ2 = 0;
        $totalUsersForQ3 = 0;

        foreach ($Answers as $Answer) {
            if ($Answer['question_id'] == $ids[0]) {
                $totalUsersForQ1++;
            } else if ($Answer['question_id'] == $ids[1]) {
                $totalUsersForQ2++;
            } else if ($Answer['question_id'] == $ids[2]) {
                $totalUsersForQ3++;
            }
        }
        $totalUsers[0] = $totalUsersForQ1;
        $totalUsers[1] = $totalUsersForQ2;
        $totalUsers[2] = $totalUsersForQ3;

        return $totalUsers;
    }

    public function getTotalGender($Answers, $totalUsers) {

        $totalMen = 0;
        $totalWomen = 0;
        $totalGender = [];
        $i = 0;

        while ($i < $totalUsers) {
            if ($Answers[$i]['gender'] == 'homme') {
                $totalMen++;
                $i++;
            } else {
                $totalWomen++;
                $i++;
            }
        }
        $totalGender[0] = $totalMen;
        $totalGender[1] = $totalWomen;

        return $totalGender;
    }

    public function getStatsForQ($ids, $Answers, $nbAnswersTot) {

        $i = 0;
        $totalUserChoice1 = 0;
        $totalUserChoice2 = 0;

        $totalUserPredict1 = 0;
        $totalUserPredict2 = 0;

        $totalManChoice1 = 0;
        $totalWomenChoice1 = 0;

        $totalManChoice2 = 0;
        $totalWomenChoice2 = 0;

        $stats = [];

        while ($i < $nbAnswersTot) {
            if ($Answers[$i]['question_id'] == $ids) {
                if ($Answers[$i]['user_choice'] == 1) {
                    $totalUserChoice1++;
                    if ($Answers[$i]['gender'] == 'homme') {
                        $totalManChoice1++;
                    } else {
                        $totalWomenChoice1++;
                    }
                } else {
                    if ($Answers[$i]['gender'] == 'homme') {
                        $totalManChoice2++;
                    } else {
                        $totalWomenChoice2++;
                    }
                    $totalUserChoice2++;
                }
                if ($Answers[$i]['user_predict'] == 1) {
                    $totalUserPredict1++;
                } else {
                    $totalUserPredict2++;
                }
            }
            $i++;
        }

        $stats[0]['totalUserChoice1'] = $totalUserChoice1;
        $stats[0]['totalUserChoice2'] = $totalUserChoice2;
        $stats[0]['totalUserPredict1'] = $totalUserPredict1;
        $stats[0]['totalUserPredict2'] = $totalUserPredict2;
        $stats[0]['totalManChoice1'] = $totalManChoice1;
        $stats[0]['totalWomenChoice1'] = $totalWomenChoice1;
        $stats[0]['totalManChoice2'] = $totalManChoice2;
        $stats[0]['totalWomenChoice2'] = $totalWomenChoice2;

        return $stats;
    }

    public function getStatsCalculated($stats, $totalUsers, $totalGender) {
        $statsCalculated = [];
        $statsCalculated['nb_voting'] = $totalUsers;
        $statsCalculated['nb_answer_1'] = $stats[0]['totalUserChoice1'];
        $statsCalculated['nb_answer_2'] = $stats[0]['totalUserChoice2'];
        $statsCalculated['nb_predict_1'] = $stats[0]['totalUserPredict1'];
        $statsCalculated['nb_predict_2'] = $stats[0]['totalUserPredict2'];
        $statsCalculated['perc_answer_1'] = $statsCalculated['nb_answer_1'] * 100 / $totalUsers;
        $statsCalculated['perc_answer_2'] = $statsCalculated['nb_answer_2'] * 100 / $totalUsers;
        $statsCalculated['perc_predict_1'] = $statsCalculated['nb_predict_1'] * 100 / $totalUsers;
        $statsCalculated['perc_predict_2'] = $statsCalculated['nb_predict_2'] * 100 / $totalUsers;

        $majority = $this->isMajority($statsCalculated['perc_answer_1'], $statsCalculated['perc_answer_2']);

        if ($majority == false) {
            $statsCalculated['perc_predict_1_true'] = 2;
            $statsCalculated['perc_predict_1_false'] = 1;
            $statsCalculated['perc_predict_2_true'] = 1;
            $statsCalculated['perc_predict_2_false'] = 2;
            $statsCalculated['score_calc'] = 2;
        }

        if ($majority == true) {
            $statsCalculated['perc_predict_1_true'] = 1;
            $statsCalculated['perc_predict_1_false'] = 2;
            $statsCalculated['perc_predict_2_true'] = 2;
            $statsCalculated['perc_predict_2_false'] = 1;
            $statsCalculated['score_calc'] = 1;
        }

        $statsCalculated['perc_men_answer_1'] = $stats[0]['totalManChoice1'] * 100 / $totalGender[0];
        $statsCalculated['perc_men_answer_2'] = $stats[0]['totalManChoice2'] * 100 / $totalGender[0];
        $statsCalculated['perc_women_answer_1'] = $stats[0]['totalWomenChoice1'] * 100 / $totalGender[1];
        $statsCalculated['perc_women_answer_2'] = $stats[0]['totalWomenChoice2'] * 100 / $totalGender[1];

        return $statsCalculated;
    }

    public function isMajority($percAns1, $percAns2) {
        $majority = null;

        if ($percAns1 > 50) {
            $majority = true;

        } else if ($percAns2 > 50) {
            $majority = false;
            
        } 
        return $majority;
    }
}
