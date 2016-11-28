<?php

declare(strict_types = 1);

use Bartacus\Bundle\BartacusBundle\Config\ConfigLoader;
use Symfony\Component\HttpKernel\Kernel;

$kernel = $GLOBALS['kernel'];
if ($kernel instanceof Kernel) {
    /** @var ConfigLoader $configLoader */
    $configLoader = $kernel->getContainer()->get('bartacus.config_loader');
    $configLoader->loadFromAdditionalConfiguration();
}
