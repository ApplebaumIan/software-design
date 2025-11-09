const {visit} = require('unist-util-visit');

module.exports = function attacher() {
  return function transformer(tree) {
    visit(tree, 'link', (node) => {
      if (node.url === '/showcase') {
        node.url = 'https://capstone.ianapplebaum.com/showcase';
      }
    });
  };
};
