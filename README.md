# ircp

[![Build Status](https://drone.io/github.com/PPvG/node-ircp/status.png)](https://drone.io/github.com/PPvG/node-ircp/latest) [![Code Coverage](https://drone.io/github.com/PPvG/node-ircp/files/coverage.png)](https://drone.io/github.com/PPvG/node-ircp/files/coverage.html)

IRC protocol library for Node.js. Used to be part of [`ircc`](https://github.com/PPvG/node-ircc).

#### Installation

`$ npm install ircp`

#### Dependencies

Node.js 0.8.x or above.

## API

### ircp.parse(line)
### ircp.parser.parse(line)

Takes an IRC message as raw text and returns a message object. A few examples (via the `node` REPL):

`> ircp.parse(':nick!user@host PART #channel');`

    { command: 'PART',
      parameters: [ '#channel' ],
      nick: 'nick',
      user: 'user',
      host: 'host',
      type: 'command' }

`> ircp.parse(':irc.example.com 001 botname :Welcome to the example IRC network!');`

    { command: 'WELCOME',
      parameters:
       [ 'botname',
         'Welcome to the example IRC network!' ],
      server: 'irc.example.com',
      code: '001',
      type: 'reply' }

Throws an `Error` if the message can't be parsed.


### ircp.serialize(message)
### ircp.serializer.serialize(message)

The reverse of `parser`. Takes a message object and turns it into a string.

`> ircp.serialize(ircp.parse(':nick!user@host PART #channel'));`

    ':nick!user@host PART #channel'

Throws an `Error` if the object is not a valid message.


### ircp.codes.convert()

Find the name and type of an IRC command. Known numeric commands are converted to their human-readable form. A few examples:

`> ircp.codes.convert('001');`

    { name: 'WELCOME', type: 'reply' }

`> ircp.codes.convert('401');`

    { name: 'NOSUCHNICK', type: 'error' }

`> ircp.codes.convert('NOTICE');`

    { name: 'NOTICE', type: 'command' }

Possible values for `type` are 'reply', 'error', 'command' and 'unknown'.
