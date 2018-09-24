<?php

namespace App\Repository;

use App\Entity\Question;
use App\Entity\User;
use App\Entity\Answer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\ORM\Query\Expr\Join;

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
    * SELECT question.id   
    * FROM question
    * INNER JOIN answer ON answer.questions_id = question.id
    * INNER JOIN app_users ON app_users.id = answer.users_id
    * WHERE app_users.id = 1
    * @return QuestionIds[] Returns an array of Questions ids
    */
    public function findUserAnsweredQuestions($id)
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            "SELECT q.id
            FROM App\Entity\Question q
            INNER JOIN App\Entity\Answer a WITH a.questions = q.id
            INNER JOIN App\Entity\User u WITH u.id = a.users
            WHERE u.id = '$id'"
        );
    return $query->execute();  
    }

    /**
    * @return Question[] Returns an array of 3 Questions objects
    */
    public function findThreeByrandom()
    {
        return $this->createQueryBuilder('q')
            ->select('q.id, q.title, q.prop_1, q.prop_2, q.submit_date, u.id as user_id, u.username, u.avatar')
            ->innerJoin('q.users', 'u')
            ->where('q.users = u.id')
            ->orderBy('RAND()')
            ->setMaxResults(3)
            ->getQuery()
            ->getResult();
    }


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
