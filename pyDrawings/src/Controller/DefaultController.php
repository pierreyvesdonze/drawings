<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/default", name="default")
     */
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/", name="home")
     */
    public function home(): Response
    {
        return $this->render('default/home.html.twig');
    }

    /**
     * @Route("/product", name="product")
     */
    public function product(): Response
    {
        return $this->render('product/product.html.twig');
    }

    /**
     * @Route("/clock", name="clock")
     */
    public function clock(): Response
    {
        return $this->render('clock/clock.html.twig');
    }


    /**
     * @Route("/badtrip", name="bad_trip")
     */
    public function badTrip(): Response
    {
        return $this->render('badTrip/bad.trip.html.twig');
    }

    /**
     * @Route("/text/perspective", name="text_perspective")
     */
    public function TextPerspective(): Response
    {
        return $this->render('textPerspective/text.perspective.html.twig');
    }

    /**
     * @Route("/block", name="block")
     */
    public function block(): Response
    {
        return $this->render('block/block.html.twig');
    }
}
