<?php

declare(strict_types=1);

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class SchwiftyController extends AbstractController
{
    /**
     * @Route("/schwifty")
     */
    public function __invoke(Request $request)
    {
        return $this->redirect('https://www.youtube.com/watch?v=I1188GO4p1E');
    }
}
