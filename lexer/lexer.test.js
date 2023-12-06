const { EOF, SEMICOLON, COLON, ASTERIX, COMMA, PLUS, MINUS, SLASH, FUNCTION, LET, TRUE, IDENT, RETURN, INT, ASSIGN, EQ, NOT_EQ, BANG} = require("../token/token");
const { NewLexer } = require("./lexer");

test('Lexer works for empty program', () => {
    const program = '';
    const lexer = NewLexer(program);
    expect(lexer.nextToken()).toEqual({Type: EOF, Literal: ""});
});

test('Lexer works for special characters', () => {
    const program = '!;:,*+-/= == !=';
    const lexer = NewLexer(program);
    expect(lexer.nextToken()).toEqual({Type: BANG, Literal: "!"});
    expect(lexer.nextToken()).toEqual({Type: SEMICOLON, Literal: ";"});
    expect(lexer.nextToken()).toEqual({Type: COLON, Literal: ":"});
    expect(lexer.nextToken()).toEqual({Type: COMMA, Literal: ","});
    expect(lexer.nextToken()).toEqual({Type: ASTERIX, Literal: "*"});
    expect(lexer.nextToken()).toEqual({Type: PLUS, Literal: "+"});
    expect(lexer.nextToken()).toEqual({Type: MINUS, Literal: "-"});
    expect(lexer.nextToken()).toEqual({Type: SLASH, Literal: "/"});
    expect(lexer.nextToken()).toEqual({Type: ASSIGN, Literal: "="});
    expect(lexer.nextToken()).toEqual({Type: EQ, Literal: "=="});
    expect(lexer.nextToken()).toEqual({Type: NOT_EQ, Literal: "!="});
    expect(lexer.nextToken()).toEqual({Type: EOF, Literal: ""});
});

test('Lexer works for keywords and identifiers', () => {
    const program = 'fn let true random return';
    const lexer = NewLexer(program);
    expect(lexer.nextToken()).toEqual({Type: FUNCTION, Literal: "fn"});
    expect(lexer.nextToken()).toEqual({Type: LET, Literal: "let"});
    expect(lexer.nextToken()).toEqual({Type: TRUE, Literal: "true"});
    expect(lexer.nextToken()).toEqual({Type: IDENT, Literal: "random"});
    expect(lexer.nextToken()).toEqual({Type: RETURN, Literal: "return"});
    expect(lexer.nextToken()).toEqual({Type: EOF, Literal: ""});
});

test('Lexer works for integers', () => {
    const program = '69 420 69420';
    const lexer = NewLexer(program);
    expect(lexer.nextToken()).toEqual({Type: INT, Literal: "69"});
    expect(lexer.nextToken()).toEqual({Type: INT, Literal: "420"});
    expect(lexer.nextToken()).toEqual({Type: INT, Literal: "69420"});
    expect(lexer.nextToken()).toEqual({Type: EOF, Literal: ""});
});


test('Lexer works for a different token types in one program', () => {
    const program = ';:,*+-/ fn x let y true random return z 69 420 69420';
    const lexer = NewLexer(program);
    expect(lexer.nextToken()).toEqual({Type: SEMICOLON, Literal: ";"});
    expect(lexer.nextToken()).toEqual({Type: COLON, Literal: ":"});
    expect(lexer.nextToken()).toEqual({Type: COMMA, Literal: ","});
    expect(lexer.nextToken()).toEqual({Type: ASTERIX, Literal: "*"});
    expect(lexer.nextToken()).toEqual({Type: PLUS, Literal: "+"});
    expect(lexer.nextToken()).toEqual({Type: MINUS, Literal: "-"});
    expect(lexer.nextToken()).toEqual({Type: SLASH, Literal: "/"});
    expect(lexer.nextToken()).toEqual({Type: FUNCTION, Literal: "fn"});
    expect(lexer.nextToken()).toEqual({Type: IDENT, Literal: "x"});
    expect(lexer.nextToken()).toEqual({Type: LET, Literal: "let"});
    expect(lexer.nextToken()).toEqual({Type: IDENT, Literal: "y"});
    expect(lexer.nextToken()).toEqual({Type: TRUE, Literal: "true"});
    expect(lexer.nextToken()).toEqual({Type: IDENT, Literal: "random"});
    expect(lexer.nextToken()).toEqual({Type: RETURN, Literal: "return"});
    expect(lexer.nextToken()).toEqual({Type: IDENT, Literal: "z"});
    expect(lexer.nextToken()).toEqual({Type: INT, Literal: "69"});
    expect(lexer.nextToken()).toEqual({Type: INT, Literal: "420"});
    expect(lexer.nextToken()).toEqual({Type: INT, Literal: "69420"});
    expect(lexer.nextToken()).toEqual({Type: EOF, Literal: ""});
});
