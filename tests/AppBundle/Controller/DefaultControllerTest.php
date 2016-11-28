<?php

declare(strict_types=1);

namespace Tests\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/hello');

        self::assertEquals(200, $client->getResponse()->getStatusCode());
        self::assertContains('Welcome to Symfony', $crawler->filter('#container h1')->text());
    }
}
