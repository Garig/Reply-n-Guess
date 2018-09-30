<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\ORM\Query\Expr\Join;
use App\Entity\Question;
use App\Entity\User;

/**
 * @method Question|null find($id, $lockMode = null, $lockVersion = null)
 * @method Question|null findOneBy(array $criteria, array $orderBy = null)
 * @method Question[]    findAll()
 * @method Question[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Question::class);
    }

    /**
     * Permet de récupérer les questions possédant le statut 3
    * @return Questions[] Returns an array of  Questions objects
    */
    public function findAllStatus3Questions()
    {
        return $this->createQueryBuilder('q')
            ->select('q.id, q.title, q.prop_1, q.prop_2, q.submit_date, u.id as user_id, u.username')
            ->innerJoin('q.users', 'u')
            ->where('q.users = u.id')
            ->andWhere('q.statuses = 3')
            ->orderBy('q.submit_date', 'DESC')
            ->getQuery()
            ->getResult();
    }


    /**
     * Permet de récupérer les questions du jour actuelles (celle en statut 1) , les plus récente (published date)
    * @return Question[] Returns an array of 3 Questions objects
    */
    public function findDailyQuestions()
    {
        return $this->createQueryBuilder('q')
            ->select('q.id, q.title, q.prop_1, q.prop_2, q.published_date, q.submit_date, u.id as user_id, u.username, u.avatar')
            ->innerJoin('q.users', 'u')
            ->where('q.users = u.id')
            ->andWhere('q.statuses = 1')
            ->orderBy('q.published_date', 'DESC')
            ->setMaxResults(3)
            ->getQuery()
            ->getResult();
    }

    /**
    * Parmis les questions validée (statut 2), en selectionne trois au hasard
    * @return Question[] Returns an array of 3 Questions objects
    */
    public function findThreeByStatus2()
    {
        return $this->createQueryBuilder('q')
            ->select('q.id as question_id, q.title, q.prop_1, q.prop_2, q.published_date, q.submit_date, u.id as user_id, u.username, u.avatar, s.id as status_id')
            ->innerJoin('q.statuses', 's')
            ->where('q.statuses = s.id')
            ->innerJoin('q.users', 'u')
            ->where('q.users = u.id')
            ->andWhere('q.statuses = 2')
            ->orderBy('RAND()')
            ->setMaxResults(3)
            ->getQuery()
            ->getResult();
    }

//     SELECT question.id as question_id, question.title, question.prop_1, question.prop_2, question.submit_date, question.published_date, app_users.id as user_id, app_users.username, app_users.avatar, status.id as status_id
// FROM question
// INNER JOIN status ON question.statuses_id = status.id
// INNER JOIN app_users ON app_users.id = question.users_id
// WHERE question.statuses_id = 2
// ORDER BY rand()
// LIMIT 3;



    /**
    * Renvoie les trois questions publiées (statut 1) les plus vieilles (avec la published date)
    * @return Question[] Returns an array of 3 Questions objects
    */
    public function findThreeByStatus1OrderedByOldestPublishedDate()
    {
        return $this->createQueryBuilder('q')
            ->select('q.id as question_id, q.title, q.prop_1, q.prop_2, q.published_date, q.closed_date, u.id as user_id, u.username, u.avatar, s.id as status_id')
            ->innerJoin('q.statuses', 's')
            ->where('q.statuses = s.id')
            ->innerJoin('q.users', 'u')
            ->where('q.users = u.id')
            ->andWhere('q.statuses = 1')
            ->orderBy('q.published_date')
            ->setMaxResults(3)
            ->getQuery()
            ->getResult();
    }

    /**
    * 
    */
    public function findAnswersForClosedQuestions()
    {
        return $this->createQueryBuilder('q')
            ->select('q.id as question_id, q.title, a.user_choice, a.user_predict, IDENTITY(a.users) as user_id, u.gender')
            ->innerJoin('q.statuses', 's')
            ->where('q.statuses = s.id')
            ->innerJoin('q.answers', 'a')
            ->where('a.questions = q.id')
            ->innerJoin('a.users', 'u')
            ->where('u.id = a.users')
            ->andWhere('q.statuses = 0')
            ->getQuery()
            ->getResult();
    }

    //  /**
    // * @return Question[] Returns an array of 3 Questions objects
    // */
    // public function findThreeByrandom()
    // {
    //     $entityManager = $this->getEntityManager();

    //     $query = $entityManager->createQuery(
    //         'SELECT q.id, q.prop_1, q.prop_2, q.title, u.username, u.email, u.avatar  
    //         FROM App\Entity\Question q 
    //         INNER JOIN App\Entity\User u
    //         WITH q.users = u.id 
    //         ORDER BY rand()'
    //     )->setMaxResults(3);
    // }



   /**
    * @return Question[] Returns an array of Question objects
    */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Question
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    // /**
    // * @return Question[] Returns an array of 3 Questions objects
    // */
    // public function findThreeByrandom()
    // {
    //     $entityManager = $this->getEntityManager();

    //     $query = $entityManager->createQuery(
    //         'SELECT q.id, q.prop_1, q.prop_2, q.title, u.username, u.email, u.avatar  
    //         FROM App\Entity\Question q 
    //         INNER JOIN App\Entity\User u
    //         WITH q.users = u.id 
    //         ORDER BY rand()'
    // )->setMaxResults(3);

    // // returns an array of 3 Questions objects
    // return $query->execute();  
    // }
}
