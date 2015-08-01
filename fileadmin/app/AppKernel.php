<?php

use Bartacus\Bundle\BartacusBundle\Kernel\Kernel;

/**
 * The AppKernel is the central part of your symfony part
 */
class AppKernel extends Kernel
{

    /**
     * {@inheritDoc}
     */
    public function registerBundles()
    {
        $bundles = [
            // Put here your own bundles/extensions!
        ];

        return array_merge(parent::registerBundles(), $bundles);
    }
}
