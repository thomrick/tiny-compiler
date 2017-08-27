import {expect} from 'chai';
import {ICompiler} from '../compiler.interface';
import {LispToCCompiler} from './lisp-to-c.compiler';

describe('LispToCCompiler', () => {
  let compiler: ICompiler;
  beforeEach(() => compiler = new LispToCCompiler());
  describe('#compile()', () => {
    it('should compile lisp-like syntax to c-like syntax', () => {
      const lisp = '(add 1 2 (mult 3 4))';
      expect(compiler.compile(lisp)).to.be.equal('add(1, 2, mult(3, 4));\n');
    });
  });
});
