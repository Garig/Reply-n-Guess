<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Status;
use App\Entity\Role;
use Faker\Factory;
use Faker\ORM\Doctrine\Populator;
use Symfony\Component\Validator\Constraints as Assert;
use Faker;

class Appfixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $statusTab = ['fermé', 'publié', 'validé', 'soumis', 'refusé'];
        $roleTab = ['USER', 'MODERATEUR', 'ADMINISTRATEUR'];
        $generator = Factory::create('fr_FR');
        $populator = new Populator($generator, $manager);
        


        for ($i=0; $i < sizeof($statusTab); $i++) {
            
            $populator->addEntity('App\Entity\Status', 1, array(
                'code' => $statusTab[$i],
            ));  
            $status = $populator->execute();
        }

        for ($j=2; $j >= 0; $j--) {
            
            $populator->addEntity('App\Entity\Role', 1, array(
                'name' => 'ROLE_' . $roleTab[$j],
            ));  
            $role = $populator->execute();
        }
        
        


        $manager->flush();
    }
}
