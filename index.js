function wrap (body) {
  return {
      parse: true,
      body: '<div class="click_reveal"><span>Cliquer pour voir la réponse</span><div>' + body + '</div></div>'
    };
}

module.exports = {
    website: {
        assets: "./click_reveal",
        js: [
            "click_reveal.js"
        ],
        css: [
            "click_reveal.css"
        ]
    },
    blocks: {
        reveal: {
            process: function(block) {
                return this.renderBlock('markdown', block.body).then(renderedBody => wrap(renderedBody));
            }
        }
    },
    hooks: {},
    filters: {}
};