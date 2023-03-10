import base from './rules/base.js';
import imprt from './rules/import.js';
import react from './rules/react.js';
import prettier from './rules/prettier.js';
import typescript from './rules/typescript.js';

export default [...base, ...imprt, ...typescript, ...react, ...prettier];
