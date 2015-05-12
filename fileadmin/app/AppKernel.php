<?php

use Bartacus\Bundle\BartacusBundle\Kernel\Kernel;

class AppKernel extends Kernel {

	public function registerBundles() {
		$bundles = array(
			// Put here your own bundles/extensions!
		);

		return array_merge(parent::registerBundles(), $bundles);
	}
}
