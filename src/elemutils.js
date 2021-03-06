(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define(factory);
    }
    else {
        root.elemutils = factory();
    }
}(this, function() {
    var div = partial(e, 'div');

    function e(type, klass, p) {
        var elem = document.createElement(type);
        elem.className = klass;
        p.appendChild(elem);

        return elem;
    }

    // http://stackoverflow.com/questions/4394747/javascript-curry-function
    function partial(fn) {
        var slice = Array.prototype.slice;
        var args = slice.apply(arguments, [1]);

        return function() {
            return fn.apply(null, args.concat(slice.apply(arguments)));
        };
    }

    function labelInput(klass, n, p, maxLen) {
        var d = div(klass, p);
        var l = label(n, d);
        var i = input('text', d, maxLen);

        return {label: l, input: i};
    }

    function label(c, p) {
        var elem = e('label', '', p);
        elem.innerHTML = c;

        return elem;
    }

    function input(t, p, maxLen) {
        var elem = e('input', '', p);
        elem.type = t;
        if(maxLen) elem.maxLength = maxLen;

        return elem;
    }

    return {
        e: e,
        div: div,
        partial: partial,
        labelInput: labelInput
    };
}));
