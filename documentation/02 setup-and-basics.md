# Setup

## cypress.json

+ Videos
+ src Ordner umstellen
+ reporter, Junit, -> Testmanagement Software Tools

## Firewall Problem mit Cypress binaries

Cypress braucht einige native binaries, die normalerweise automatisch durch npm install geladen und installiert werden.
Die binaries werden aber nicht von npmjs.com geladen, sondern von der Cypress website! Diese Url wird vermutlich von
den meisten Firewall (gerade bei größeren Firmen) blokiert sein.
Es empfielt sich daher die binaries einfach per Hand runterzuladen und direkt ins repository mit einzuchecken und ein 
neues npm script anzulegen.
``
    "cypress:install": "SET CYPRESS_INSTALL_BINARY=cypress-binaries/cypress-windows-x64-4.6.0.zip && npm install"
``

## Typescript verwenden

Man sollte Cypress auf jedenfall in Typescript verwenden. Der Code wird dadurch lesbarer und gerade bei eigen definierten
Commands ist eine bessere IDE unterstützung möglich!

https://docs.cypress.io/guides/tooling/typescript-support.html#Install-TypeScript