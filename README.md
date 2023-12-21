# About
JS-Lexer is a project inspired from making a Monkey interpreter in Go by reading 'Writing an Interpreter in Go' by Thorsten Ball.
The goal was simply to build the lexer out on my own in JS.

It is also published as an npm package: https://www.npmjs.com/package/@shobhit-nagpal/js-lexer

Check out the Monkey interpreter: https://github.com/Shobhit-Nagpal/monkey-interpreter

# Install as npm package
To install the lexer as an npm package, run the following command in your terminal:
``` shell
npm i @shobhit-nagpal/js-lexer
````

# Usage
``` node
const { NewLexer } = require("@shobhit-nagpal/js-lexer");
const { EOF } = require("@shobhit-nagpal/js-lexer/token/token");

const program = 
    `let x = 5;
     y;
     z = "string";
`;

function init(program) {
    const lexer = NewLexer(program);

    let token;

    for (token = lexer.nextToken() ; token.Type != EOF ; token = lexer.nextToken()) {
        console.log(token);
    }
}

init(program);
```
The output of the example progam would be:
``` text
Token { Literal: 'let', Type: 'LET' }
Token { Literal: 'x', Type: 'IDENT' }
Token { Type: '=', Literal: '=' }
Token { Type: 'INT', Literal: '5' }
Token { Type: ';', Literal: ';' }
Token { Literal: 'y', Type: 'IDENT' }
Token { Type: ';', Literal: ';' }
Token { Literal: 'z', Type: 'IDENT' }
Token { Type: '=', Literal: '=' }
Token { Type: 'STRING', Literal: 'string' }
Token { Type: ';', Literal: ';' }
```

# Local deployment
If you wish to try out the lexer, make sure you have Node along with npm installed and do the following steps:

### 1. Clone the repo
``` shell
git clone https://github.com/Shobhit-Nagpal/js-lexer
```

### 2. Change directory
``` shell
cd js-lexer
```

### 3. Run the lexer through the REPL
``` shell
node main.js
```

### 4. Have fun!
Play around with the lexer, see what all you can tokenize :)

# Lexer capabilities
What can the lexer tokenize?
- Identifiers
- Integers
- Keywords
- Strings
- Assignment op
- Addition op
- Subtraction op
- Asterix
- Slash
- Bang
- Less than op
- Greater than op
- Comma
- Semicolon
- Colon
- Left parenthesis
- Right parenthesis
- Left brace
- Right brace
- Left bracket
- Right bracket
- Equality op
- Not equality op
- End of file
- Illegal
