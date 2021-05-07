// https://github.com/thysultan/stylis.js#plugins
const STYLIS_CONTEXTS = {
  POST_PROCESS: -2,
  PREPARATION: -1,
  NEWLINE: 0,
  PROPERTY: 1,
  SELECTOR_BLOCK: 2,
  AT_RULE: 3
};

export const STYLIS_PROPERTY_CONTEXT = STYLIS_CONTEXTS.PROPERTY;

const stylisImportantPlugin = (context, content) => {
  if (context === STYLIS_PROPERTY_CONTEXT) {
    return /!important/.test(content)
      ? content
      : content + ' !important';
  }
};

// stable identifier that will not be dropped by minification unless the whole module
// is unused
Object.defineProperty(stylisImportantPlugin, 'name', {
  value: 'stylisImportantPlugin'
});

export default stylisImportantPlugin;
