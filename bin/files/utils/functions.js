module.exports = {
    clear: function() {
        process.stdout.write("\033c")
    }
}
