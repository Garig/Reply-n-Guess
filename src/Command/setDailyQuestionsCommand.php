<?php

namespace App\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Command\Command;
use App\Controller\QuestionController;

class setDailyQuestionsCommand extends Command
{
    private $questionController;

    public function __construct(QuestionController $questionController)
    {
        $this->questionController = $questionController;

        parent::__construct();
    }

    protected function configure()
{
    $this
        // the name of the command (the part after "bin/console")
        ->setName('set_daily_questions')

        // the short description shown while running "php bin/console list"
        ->setDescription('Set the three Questions for today')

        // the full command description shown when running the command with
        // the "--help" option
        ->setHelp('This command allows you to set three questions for today')
    ;
}

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // ...

        $this->questionController->setDailyQuestions();

        $output->writeln('Daily Questions successfully generated!');
    }
}