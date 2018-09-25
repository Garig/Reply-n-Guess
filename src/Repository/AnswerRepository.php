<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\Answer;

/**
 * @method Answer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Answer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Answer[]    findAll()
 * @method Answer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnswerRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Answer::class);
    }

    /**
     *
     */
    public function findUserAnsweredQuestions($userId)
    {
        return $this->createQueryBuilder('a')
                ->select('q.id')
                ->innerJoin('a.questions', 'q')
                ->where('a.users = ?1')
                ->setParameter(1, $userId)
                ->getQuery()
                ->getResult();
    }

}
