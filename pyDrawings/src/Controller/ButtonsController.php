<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ButtonsController extends AbstractController
{
    /**
     * @Route("/buttons", name="buttons")
     */
    public function index(): Response
    {
        return $this->render('buttons/buttons.html.twig', []);
    }
}
