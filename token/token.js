class Token {
    constructor() {
        let Type;
        let Literal;
    }
}

const ILLEGAL = "ILLEGAL";
const EOF = "EOF";

const IDENT = "IDENT";
const INT = "INT";
const STRING = "STRING";

const ASSIGN = "=";
const PLUS = "+";
const MINUS = "-";
const BANG = "!";
const ASTERIX = "*";
const SLASH = "/";

const LT = "<";
const GT = ">";

const COMMA = ",";
const SEMICOLON = ";";
const COLON = ":";

const LPAREN = "(";
const RPAREN = ")";
const LBRACE = "{";
const RBRACE = "}";
const LBRACKET = "[";
const RBRACKET = "]";

const FUNCTION = "FUNCTION";
const LET = "LET";
const TRUE = "TRUE";
const FALSE = "FALSE";
const IF = "IF";
const ELSE = "ELSE";
const RETURN = "RETURN";

const EQ = "==";
const NOT_EQ = "!=";

let keywords = new Map();

keywords.set("let", LET);
keywords.set("fn", FUNCTION);
keywords.set("true", TRUE);
keywords.set("false", FALSE);
keywords.set("if", IF);
keywords.set("else", ELSE);
keywords.set("return", RETURN);

function LookUpIdent(ident) {
    if (keywords.has(ident)) {
        return keywords.get(ident);
    }

    return IDENT;
}

module.exports = {Token, LookUpIdent, ILLEGAL, EOF, IDENT,INT, STRING, ASSIGN, PLUS, MINUS, BANG, ASTERIX, SLASH, LT, GT, COMMA, SEMICOLON, COLON, LBRACE, RBRACE, LBRACKET, RBRACKET, LPAREN, RPAREN, EQ, NOT_EQ, FUNCTION, LET, TRUE, FALSE, IF, ELSE, RETURN}
