    window.onload = function () {
        var datalist = {
            counter: 0,
            classvalue: 'red',
            message: 'hello this is my first app',
            arrs: ['apple', 'banana', 'orange', 'pear'],
            minput: ''
        };
        new Vue({
            el: '#box',
            data: datalist,
            methods: {
                add: function () {
                    console.log(this.arrs);
                }
            }
        });
    };