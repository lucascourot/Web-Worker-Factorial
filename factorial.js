function factorial(n, callback) {
    if ((n == 0) || (n == 1)) {
        callback(1);
    } else {
        factorial(n - 1, function (result) {
            postMessage({ n: (n - 1), factorial: result });

            result *= n;

            setTimeout(function () {
                callback(result)
            }, 200);
        });
    }
}

self.onmessage = function (event) {
    factorial(event.data, function (result) {
        postMessage({ n: event.data, factorial: result });
    });
}
