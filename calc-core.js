(function(global){
    function evaluate(expr){
        return eval(expr);
    }

    function sin(expr){
        return Math.sin(evaluate(expr));
    }

    function cos(expr){
        return Math.cos(evaluate(expr));
    }

    function tan(expr){
        return Math.tan(evaluate(expr));
    }

    function log10(expr){
        if (typeof Math.log10 === 'function') {
            return Math.log10(evaluate(expr));
        }
        return Math.log(evaluate(expr)) / Math.LN10;
    }

    function sqrt(expr){
        return Math.sqrt(evaluate(expr));
    }

    const api = { evaluate, sin, cos, tan, log10, sqrt };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        global.calc = api;
    }
})(this);
