/* eslint-disable object-property-newline */
import {expect} from 'chai';

describe('Search', () => {
  const search = document.getElementById('search');
  it('must be defined', () => {
    expect(search).to.be.defined;
  })
});
