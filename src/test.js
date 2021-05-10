import stylisImportantPlugin, { STYLIS_PROPERTY_CONTEXT } from './index';

describe('stylisImportantPlugin', () => {
  it('transforms display: block; into display: block !important;', () => {
    const property = stylisImportantPlugin(
      STYLIS_PROPERTY_CONTEXT,
      'display:block'
    );
    expect(property).toEqual('display:block !important');
  });
  it('doesn\'t transform display: block !important;', () => {
    const property = stylisImportantPlugin(
      STYLIS_PROPERTY_CONTEXT,
      'display:block !important'
    );
    expect(property).toEqual('display:block !important');
  });
});
