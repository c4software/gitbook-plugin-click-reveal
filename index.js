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
            process: function(blk) {
                return "<div class='click_reveal'>"+blk.body+"</div>";
            }
        }
    }
};