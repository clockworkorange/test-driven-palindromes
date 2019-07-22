const palindromes = require('../palindromes');

describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
  });

  it('ignores casing', () => {
    expect(palindromes('MaDaM')).toEqual(['madam']);
  });
});
