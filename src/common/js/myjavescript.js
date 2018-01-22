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
            created: function () {
                console.log("created-:实例已经创建" + (new Date()));
            },
            beforeCompile: function () {
                console.log("beforeCompile:编译之前" + (new Date()));
            },
            compiled: function () {
                console.log("compiled-:编译之后");
            },
            ready: function () {
                console.log("ready-:插入到文档中");
            },
            methods: {
                add: function () {
                    console.log(this.arrs);
                },
                mKeydown: function (ev, index) {
                    if (index == 1) {
                        console.log("mKeydown-:keyCode" + ev.keyCode);

                    } else {
                        console.log("keyup-:keyCode" + ev.keyCode);

                    }
                }
            }
        });
    };