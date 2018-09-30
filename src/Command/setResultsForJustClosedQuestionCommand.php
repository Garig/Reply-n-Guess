<?php

namespace App\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Command\Command;
use App\Controller\QuestionsAnswersAndResultsController;

class setResultsForJustClosedQuestionCommand extends Command
{
    private $QuestionsAnswersAndResultsController;

    public function __construct(QuestionsAnswersAndResultsController $QuestionsAnswersAndResultsController)
    {
        $this->QuestionsAnswersAndResultsController = $QuestionsAnswersAndResultsController;

        parent::__construct();
    }

    protected function configure()
{
    $this
        // the name of the command (the part after "bin/console")
        ->setName('set_results')

        // the short description shown while running "php bin/console list"
        ->setDescription('Set the three results of the day')

        // the full command description shown when running the command with
        // the "--help" option
        ->setHelp('This command allows you to set the results of the day')
    ;
}

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // ...

        $this->QuestionsAnswersAndResultsController->getAnswers();

        $output->writeln('Daily Results successfully generated!');
    }
}