const {Token, LookUpIdent, PLUS, MINUS, ASTERIX, GT, LT, SEMICOLON, LPAREN, RPAREN, EOF, COMMA, COLON, LBRACKET, ILLEGAL, INT, RBRACKET, LBRACE, RBRACE } = require("../token/token");

class Lexer {
    constructor(program) {
        this.input = program;
        this.position = 0;
        this.readPosition = 0;
        this.ch;
    }

    readChar() {
        if (this.readPosition >= this.input.length) {
            this.ch = '';
        } else {
            this.ch = this.input[this.readPosition];
        }

        this.position = this.readPosition;
        this.readPosition++;
    }

    nextToken() {

        let tok;

        this.skipWhitespace();

        switch (this.ch) {
            case '':
                tok = newToken(EOF, "");
                break;
            case '+':
                tok = newToken(PLUS, this.ch); 
                break;
            case '-':
                tok = newToken(MINUS, this.ch); 
                break;
            case '*':
                tok = newToken(ASTERIX, this.ch);
                break;
            case '>':
                tok = newToken(GT, this.ch);
                break;
            case '<':
                tok = newToken(LT, this.ch);
                break;
            case ';':
                tok = newToken(SEMICOLON, this.ch);
                break;
            case '(':
                tok = newToken(LPAREN, this.ch);
                break;
            case ')':
                tok = newToken(RPAREN, this.ch);
                break;
            case '{':
                tok = newToken(LBRACE, this.ch);
                break;
            case '}':
                tok = newToken(RBRACE, this.ch);
                break;
            case ',':
                tok = newToken(COMMA, this.ch);
                break;
            case ':':
                tok = newToken(COLON, this.ch);
                break;
            case '[':
                tok = newToken(LBRACKET, this.ch);
                break;
            case ']':
                tok = newToken(RBRACKET, this.ch);
                break;
            default:
                if (isDigit(this.ch)) {
                    tok = new Token();
                    tok.Type = INT;
                    tok.Literal = this.readNumber();
                    return tok;

                } else if (isLetter(this.ch)) {
                        tok = new Token();
                        tok.Literal = this.readIdentifier()
                        tok.Type =  LookUpIdent(tok.Literal);
                        return tok;
                    } else {
                    tok = newToken(ILLEGAL, this.ch);
                }

        }

        this.readChar();
        return tok;
    }

    readIdentifier() {
        let position = this.position;
        while (isLetter(this.ch)) {
            this.readChar();
        }
        return this.input.slice(position, this.position);
    }

    readNumber() {
        let position = this.position;
        while (isDigit(this.ch)) {
            this.readChar();
        }

        return this.input.slice(position, this.position);
    }

    peekChar() {
        if (this.readPosition >= this.input.length) {
           return 0; 
        } else {
            return this.input[this.readPosition];
        }
    }

    skipWhitespace() {
       while (this.ch === ' ' || this.ch === '\n' || this.ch === '\t' || this.ch === '\r') {
           this.readChar();
       } 
    }
}

function newToken(tokenType, char) {
    let token = new Token();
    token.Type = tokenType;
    token.Literal = char;
    return token;
}

function isLetter(char) {
    if (char == '_' || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        return true;
    }
    return false;
}

function isDigit(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 48 && charCode <= 57;
}


function NewLexer(input) {
    let lexer = new Lexer(input);
    lexer.readChar();
    return lexer;
}
module.exports = { NewLexer }
