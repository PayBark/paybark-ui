# PayBark UI

<br />

## Installation

To install and save in your package.json dependencies, run:

```
npm install @paybark/paybark-ui
```

<br />

## Nunito Font

PayBark UI was designed to be used with Nunito, available for free from <a href='https://fonts.google.com/specimen/Nunito' target='_blank'>Google Fonts</a>. Nunito can be included in your application inside of HTML or from NPM.

In HTML:

```
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&display=swap" rel="stylesheet">
```

With NPM:

```
npm install @fontsource/nunito
```

```
import "@fontsource/nunito/300.css"
import "@fontsource/nunito/600.css"
```

<br />

## Setup

Wrap your application with `PayBarkUI`:

```
import React from 'react';
import { PayBarkUI } from '@paybark/paybark-ui';
import App from './App'

function Index() {
    return (
        <PayBarkUI>
            <App/>
        </PayBarkUI>
    );
}
```

<br />

## Usage

Import components individually to use them inside your application:

```
import React from 'react';
import { Button } from '@paybark/paybark-ui';

function SaveButton() {
    return <Button>Hello World</Button>;
}
```
