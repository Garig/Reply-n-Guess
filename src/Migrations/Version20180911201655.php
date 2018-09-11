<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180911201655 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE question CHANGE users_id users_id INT DEFAULT NULL, CHANGE statuses_id statuses_id INT DEFAULT NULL, CHANGE results_id results_id INT DEFAULT NULL, CHANGE decline_date decline_date DATETIME DEFAULT NULL, CHANGE validate_date validate_date DATETIME DEFAULT NULL, CHANGE published_date published_date DATETIME DEFAULT NULL, CHANGE closed_date closed_date DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE departements_id departements_id INT DEFAULT NULL, CHANGE roles_id roles_id INT DEFAULT NULL, CHANGE avatar avatar VARCHAR(255) DEFAULT NULL, CHANGE score score INT DEFAULT NULL');
        $this->addSql('ALTER TABLE answer CHANGE users_id users_id INT DEFAULT NULL, CHANGE questions_id questions_id INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE answer CHANGE users_id users_id INT DEFAULT NULL, CHANGE questions_id questions_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE question CHANGE users_id users_id INT DEFAULT NULL, CHANGE statuses_id statuses_id INT DEFAULT NULL, CHANGE results_id results_id INT DEFAULT NULL, CHANGE decline_date decline_date DATETIME DEFAULT \'NULL\', CHANGE validate_date validate_date DATETIME DEFAULT \'NULL\', CHANGE published_date published_date DATETIME DEFAULT \'NULL\', CHANGE closed_date closed_date DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE user CHANGE departements_id departements_id INT DEFAULT NULL, CHANGE roles_id roles_id INT DEFAULT NULL, CHANGE avatar avatar VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE score score INT DEFAULT NULL');
    }
}
