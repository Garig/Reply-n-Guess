<?php

namespace App\Repository;

use App\Entity\Question;
use App\Entity\User;
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
    * @return Question[] Returns an array of Question objects
    */
    public function findThreeByrandom()
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT q.id, q.prop_1, q.prop_2, q.title, u.username, u.email, u.avatar  
            FROM App\Entity\Question q 
            INNER JOIN App\Entity\User u
            WITH q.users = u.id 
            ORDER BY rand()'
            
    )->setMaxResults(3);

    // returns an array of Product objects
    return $query->execute(); 
            
    }


    // /**
    // * @return Question[] Returns an array of Question objects
    // */
    
    // public function findThreeByrandom()
    // {
    //     return $this->createQueryBuilder('q')
    //         // ->andWhere('q.exampleField = :val')
    //         // ->innerJoin('q.users', 'u', Join::ON, 'q.id = u.id')
    //         // ->innerJoin('q.users', 'u')
    //         // ->where('q.id = u.id')
    //         ->orderBy('RAND()')
    //         ->setMaxResults(3)
    //         ->getQuery()
    //         ->getResult()  
            
    //     ;
    //     // SELECT * FROM question INNER JOIN user ON question.users_id = user.id ORDER BY rand() LIMIT 3;
    // }


//    /**
//     * @return Question[] Returns an array of Question objects
//     */
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
}
