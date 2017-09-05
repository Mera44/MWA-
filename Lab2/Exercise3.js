function slow(callback) {
    setTimeout(function () {
        if (Math.random() > 0.5) {

            return callback("Error", null);
        }

        callback(null, { id: 12345 })
    }, 500);
}

function exec(fn) {

    var er = "";
    var data = "";

    fn(function (error, obj) {

        er = error;
        data = obj;

    });
    return {


        done: function (f) {
            setTimeout(function () {
                if (data) {

                    f(data);
                }

            }, 500);
            return this;

        },


        fail: function (f) {
            setTimeout(function () {
                if (er) {

                    f(er);
                }
            }, 500);

        }


    }

}



exec(slow).done(function (data) {

    console.log(data);
}).fail(function (err) {

    console.log("Error " + err);

});