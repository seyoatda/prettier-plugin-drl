import { parse as _parse } from 'toml/lib/parser'
import prettier from 'prettier'
const {
  doc: {
    builders: { concat }
  }
} = prettier

const languages = [
  {
    extensions: ['.toml'],
    name: 'DRL',
    parsers: ['drl-parse']
  }
]

const parsers = {
  'toml-parse': {
    parse: text => _parse(text),
    astFormat: 'toml-ast'
  }
}

function printToml(path, options, print) {
  const node = path.getValue()

  if (Array.isArray(node)) {
    return concat(path.map(print))
  }

  switch (node.type) {
    default:
      return ''
  }
}

const printers = {
  'toml-ast': {
    print: printToml
  }
}

export default {
  languages,
  parsers,
  printers
}
