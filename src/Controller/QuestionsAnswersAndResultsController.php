<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use App\Entity\Question;

class QuestionsAnswersAndResultsController extends AbstractController
{
    public function __invoke()
    {
        $data = $this->getAnswers();
        return $data;
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
        $statsQ1 = $this->getStatsForQ($ids[0], $Answers, $nbAnswersTot);
        $statsQ2 = $this->getStatsForQ($ids[1], $Answers, $nbAnswersTot);
        $statsQ3 = $this->getStatsForQ($ids[2], $Answers, $nbAnswersTot);

        $stats = [];
        $stats[0] = $statsQ1;


















        $stats[1] = $statsQ2;
        $stats[2] = $statsQ3;

        return $Answers;
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
}




// if ($Answers[$i]['question_id'] == $ids[1]) {
//     if ($Answers[$i]['user_choice'] == 1) {
//         $totalUserChoice1ForQ2++;
//         if ($Answers[$i]['gender'] == 'homme') {
//             $totalManChoice1ForQ2++;
//         } else {
//             $totalWomenChoice1ForQ2++;
//         }
//     } else {
//         if ($Answers[$i]['gender'] == 'homme') {
//             $totalManChoice2ForQ2++;
//         } else {
//             $totalWomenChoice2ForQ2++;
//         }
//         $totalUserChoice2ForQ2++;
//     }
//     if ($Answers[$i]['user_predict'] == 1) {
//         $totalUserPredict1ForQ2++;
//     } else {
//         $totalUserPredict2ForQ2++;
//     }
// }
// if ($Answers[$i]['question_id'] == $ids[2]) {
//     if ($Answers[$i]['user_choice'] == 1) {
//         $totalUserChoice1ForQ3++;
//         if ($Answers[$i]['gender'] == 'homme') {
//             $totalManChoice1ForQ3++;
//         } else {
//             $totalWomenChoice1ForQ3++;
//         }
//     } else {
//         if ($Answers[$i]['gender'] == 'homme') {
//             $totalManChoice2ForQ3++;
//         } else {
//             $totalWomenChoice2ForQ3++;
//         }
//         $totalUserChoice2ForQ3++;
//     }
//     if ($Answers[$i]['user_predict'] == 1) {
//         $totalUserPredict1ForQ3++;
//     } else {
//         $totalUserPredict2ForQ3++;
//     }
// }