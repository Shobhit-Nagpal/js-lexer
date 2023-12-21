const  { NewLexer } = require("../lexer/lexer");
const { EOF } = require("../token/token");
const prompt  = require("prompt-sync")({sigint: true});

function Repl() {
    const action = ">>";
    while (true) {
        const program = prompt(action);
        const lex = NewLexer(program);

        let token;
        for (token = lex.nextToken() ; token.Type != EOF ; token = lex.nextToken()) {
            console.log(token);
        }

    }
}

module.exports = {Repl}
