import { CategoriesPipe } from './pipes/categories.pipe';

describe('CategoriesPipe', () => {
  it('create an instance', () => {
    const pipe = new CategoriesPipe();
    expect(pipe).toBeTruthy();
  });
});
