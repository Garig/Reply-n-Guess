<?php

namespace App\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Command\Command;
use App\Controller\QuestionCloseController;

class closeDailyQuestionsOldestCommand extends Command
{
    private $questionCloseController;

    public function __construct(QuestionCloseController $questionCloseController)
    {
        $this->questionCloseController = $questionCloseController;

        parent::__construct();
    }

    protected function configure()
{
    $this
        // the name of the command (the part after "bin/console")
        ->setName('close_daily_questions_oldest')

        // the short description shown while running "php bin/console list"
        ->setDescription('Close the three oldest Questions of the day')

        // the full command description shown when running the command with
        // the "--help" option
        ->setHelp('This command allows you to close the oldest 3 questions of the day')
    ;
}

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->questionCloseController->closeDailyQuestions();

        $output->writeln('The three oldest daily questions are successfully closed!');
    }
}