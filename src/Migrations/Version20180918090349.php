<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180918090349 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE question (id INT AUTO_INCREMENT NOT NULL, users_id INT DEFAULT NULL, statuses_id INT DEFAULT NULL, results_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, prop_1 VARCHAR(50) NOT NULL, prop_2 VARCHAR(50) NOT NULL, nb_vote_moderator INT NOT NULL, submit_date DATETIME NOT NULL, decline_date DATETIME DEFAULT NULL, validate_date DATETIME DEFAULT NULL, published_date DATETIME DEFAULT NULL, closed_date DATETIME DEFAULT NULL, INDEX IDX_B6F7494E67B3B43D (users_id), INDEX IDX_B6F7494E1259C1FF (statuses_id), UNIQUE INDEX UNIQ_B6F7494E8A30AB9 (results_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(20) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_users (id INT AUTO_INCREMENT NOT NULL, departements_id INT DEFAULT NULL, roles_id INT DEFAULT NULL, is_validate TINYINT(1) NOT NULL, username VARCHAR(60) NOT NULL, password VARCHAR(100) NOT NULL, email VARCHAR(255) NOT NULL, avatar VARCHAR(255) DEFAULT NULL, birth_date VARCHAR(15) NOT NULL, gender VARCHAR(10) NOT NULL, score INT DEFAULT NULL, INDEX IDX_C25028241DB279A6 (departements_id), INDEX IDX_C250282438C751C4 (roles_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE status (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(20) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE result (id INT AUTO_INCREMENT NOT NULL, nb_voting INT NOT NULL, nb_answer_1 INT NOT NULL, nb_answer_2 INT NOT NULL, nb_predict_1 INT NOT NULL, nb_predict_2 INT NOT NULL, perc_answer_1 INT NOT NULL, perc_answer_2 INT NOT NULL, perc_predict_1_true INT NOT NULL, perc_predict_1_false INT NOT NULL, perc_predict_2_true INT NOT NULL, perc_predict_2_false INT NOT NULL, perc_men_answer_1 INT NOT NULL, perc_men_answer_2 INT NOT NULL, perc_women_answer_1 INT NOT NULL, perc_women_answer_2 INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE answer (id INT AUTO_INCREMENT NOT NULL, users_id INT DEFAULT NULL, questions_id INT DEFAULT NULL, user_choice INT NOT NULL, user_predict INT NOT NULL, INDEX IDX_DADD4A2567B3B43D (users_id), INDEX IDX_DADD4A25BCB134CE (questions_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE departement (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(3) NOT NULL, name VARCHAR(40) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E67B3B43D FOREIGN KEY (users_id) REFERENCES app_users (id)');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E1259C1FF FOREIGN KEY (statuses_id) REFERENCES status (id)');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E8A30AB9 FOREIGN KEY (results_id) REFERENCES result (id)');
        $this->addSql('ALTER TABLE app_users ADD CONSTRAINT FK_C25028241DB279A6 FOREIGN KEY (departements_id) REFERENCES departement (id)');
        $this->addSql('ALTER TABLE app_users ADD CONSTRAINT FK_C250282438C751C4 FOREIGN KEY (roles_id) REFERENCES role (id)');
        $this->addSql('ALTER TABLE answer ADD CONSTRAINT FK_DADD4A2567B3B43D FOREIGN KEY (users_id) REFERENCES app_users (id)');
        $this->addSql('ALTER TABLE answer ADD CONSTRAINT FK_DADD4A25BCB134CE FOREIGN KEY (questions_id) REFERENCES question (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE answer DROP FOREIGN KEY FK_DADD4A25BCB134CE');
        $this->addSql('ALTER TABLE app_users DROP FOREIGN KEY FK_C250282438C751C4');
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E67B3B43D');
        $this->addSql('ALTER TABLE answer DROP FOREIGN KEY FK_DADD4A2567B3B43D');
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E1259C1FF');
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E8A30AB9');
        $this->addSql('ALTER TABLE app_users DROP FOREIGN KEY FK_C25028241DB279A6');
        $this->addSql('DROP TABLE question');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE app_users');
        $this->addSql('DROP TABLE status');
        $this->addSql('DROP TABLE result');
        $this->addSql('DROP TABLE answer');
        $this->addSql('DROP TABLE departement');
    }
}
