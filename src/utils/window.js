var win;

if (typeof window !== "undefined") {
    win = window;
} else {
    win = {
        location: {
            search: '',
        },
        history: {
            pushState: () => {}
        }
    };
}

module.exports = win;