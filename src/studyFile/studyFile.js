// 修改this指向
function bindThis(f, oTarget) {
    let args = Array.prototype.slice.call(arguments, 2);
    return function() {
        return f.apply(oTarget, Array.prototype.slice.call(arguments).concat(args));
    }
}
// 获取url参数
function getUrlParam(sUrl, sKey) {
    var paramArr = sUrl.split('?')[1].split('#')[0].split('&'); // 取出每个参数的键值对放入数组
    const obj = {};
    paramArr.forEach(element => {
        const [key, value] = element.split('='); // 取出数组中每一项的键与值
        if (obj[key] === void 0) { // 表示第一次遍历这个元素，直接添加到对象上面
            obj[key] = value
        } else {
            obj[key] = [].concat(obj[key], value); // 表示不是第一次遍历说明这个键已有，通过数组存起来。
        }
    });
    return sKey === void 0 ? obj : obj[sKey] || '' // 如果该方法为一个参数，则返回对象。
    //如果为两个参数，sKey存在，则返回值或数组，否则返回空字符。
}
// 查找两个节点的最近的一个共同父节点
function commonParentNode(oNode1, oNode2) {
    while (true) {
        oNode1 = oNode1.parentNode;
        if (oNode1.contains(oNode2)) {
            return oNode1;
        }
    }
}
// 根据包名， 在指定空间中创建对象
function namespace(oNamespace, sPackage) {
    var arr = sPackage.split('.'); //arr={a,b,c,d}
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (!oNamespace[arr[i]]) //如果oNamespace中不存在a,b,c,d的话，返回空值
        {
            oNamespace[arr[i]] = {};
        }
        oNamespace = oNamespace[arr[i]];
    }
    return oNamespace;
}
// 数组去重
Array.prototype.uniq = function() {
    return Array.from(new Set(this))
}
// 回调函数斐波那契函数
function fibonacci(n) {
    //判断 f(2)=1 f(2)=1
    if (n == 2 || n == 1) {
        return 1;
    }
    //f(n)=f(n-1)+f(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2)
}
// 按给定得时间格式化输出
function formatDate(d, s) {
    // 构造单个基准对象
    var t = {
        yyyy: d.getFullYear(),
        yy: d.getFullYear % 100,
        M: d.getMonth() + 1,
        d: d.getDate(),
        H: d.getHours(),
        h: d.getHours() % 12,
        m: d.getMinutes(),
        s: d.getSeconds(),
        w: ['日', '一', '二', '三', '四', '五', '六'][d.getDay()]
    }

    // 补零助手函数
    function pad(n) {
        return n < 10 ? '0' + +n : n;
    }

    // 格式化
    return s.replace(/([(yy)|MmdhHmsw]+)/g, function(f) {
        if (f.length % 2 == 0 && f.indexOf('yy') == -1) {
            return pad(t[f[0]])
        }
        return t[f]
    })
}
var d = new Date(2018, 0, 0, 0, 0, 0)
var s = 'yyyy-MM-dd hh:mm:ss 星期w'
// 获取字符串长度
// 如果第二个参数 bUnicode255For1 === true， 则所有字符长度为 1
// 否则如果字符 Unicode 编码 > 255 则长度为 2
function strLength(s, bUnicode255For1) {
    var length = s.length;
    if (!bUnicode255For1) {
        for (var i in s) {
            if (s.charCodeAt(i) > 255) {
                length++;
            }
        }
    }
    return length;
}
// 判断输入是否是正确的邮箱格式
function isAvailableEmail(sEmail) {
    var re = /^\w+(\.\w+)*@\w+\.\w+(\.\w+)*$/i;
    return re.test(sEmail);
}
// 颜色字符串转换
function rgb2hex(sRGB) {
    function getHex(str) {
        let num = Number(str).toString(16);

        return num.length < 2 ? '0' + num : num;
    }
    let result = sRGB.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\s*\)/);
    if (!result) return sRGB;
    return '#' + getHex(result[1]) + getHex(result[2]) + getHex(result[3]);
}
// 将字符串转化为驼峰格式
function cssStyle2DomStyle(sName) {
    console.log(sName.indexOf('-'))
    if (sName.indexOf('-') != '-1') {
        let index = Number(sName.indexOf('-')),
            Name;
        let start = sName.substring(0, index),
            content = sName.substring(index, index + 2),
            end = sName.substring(index + 2);
        console.log(start, content, end, content.substring(1, 2))

        if (index == 0) {
            Name = start + content.substring(1, 2) + end
        } else {
            Name = start + content.substring(1, 2).toUpperCase() + end
        }
        return cssStyle2DomStyle(Name)
    } else {
        return sName
    }
}
//字符串出现的频率统计
function count(str) {
    let strArr = str.replace(/\s/g, '').split('')
    let obj = {}
    strArr.forEach((item) => {
        if (obj[item] === undefined) {
            obj[item] = 1
        } else {
            obj[item] = obj[item] + 1
        }
    })
    return obj
}
// 查找数组元素位置
function indexOf(arr, item) {
    while (arr.length > 0) {
        if (arr.pop() == item)
            return arr.length;
    }
    return -1;
}
// 数组求和
function sum(arr) {
    var result = 0;
    arr.forEach(function(item, index) {
        result += item;
    });

    return result;
};
// 移除数组元素
function remove(arr, item) {
    return arr.reduce((p, c) => {
        c !== item && p.push(c);
        return p;
    }, [])
}
// 移除数组 arr 中的所有值与 item 相等的元素， 直接在给定的 arr 数组上进行操作， 并将结果返回
function removeWithoutCopy(arr, item) {
    while (arr.indexOf(item) !== -1) {
        arr.splice(arr.indexOf(item), 1);
    }
    return arr;
}
// 在数组 arr 末尾添加元素 item。 不要直接修改数组 arr， 结果返回新的数组
function append(arr, item) {
    var arr1 = arr.slice(0);
    arr1[arr1.length] = item;
    // arr1.push(item);
    return arr1;
}
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
function truncate(arr) {
    // var arr1 = arr.concat();
    var arr1 = arr.slice(0);
    arr1.pop(arr1.length - 1);
    return arr1;
}
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
function prepend(arr, item) {
    var arr1 = arr.slice(0);
    arr1.unshift(item);
    return arr1;
}
// 删除数组 arr 第一个元素。 不要直接修改数组 arr， 结果返回新的数组
function curtail(arr) {
    var res = arr.slice(0);
    res.shift(arr[0]);
    return res;
}
// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
function concat(arr1, arr2) {
    return (arr1 + "," + arr2).split(",");
}
// 在数组 arr 的 index 处添加元素 item。 不要直接修改数组 arr， 结果返回新的数组
function insert(arr, item, index) {
    var temp = arr.slice(0);
    temp.splice(index, 0, item);
    return temp;
}
// 统计数组 arr 中值等于 item 的元素出现的次数
function count(arr, item) {
    var j = 0;
    arr.forEach(function(ele) {
        if (ele == item)
            j++;
    });
    return j;
}
// 找出数组 arr 中重复出现过的元素
function duplicates(arr) {
    var temp = [];
    arr.forEach(function(elem) {
        if (arr.indexOf(elem) != arr.lastIndexOf(elem) && temp.indexOf(elem) == -1) {
            temp.push(elem);
        }
    });
    return temp;
}
// 求平方
function square(arr) {
    return arr.map(el => Math.pow(el, 2))
}
// 查找元素位置==>在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
    let newArr = [];
    arr.forEach((el, index) => {
        //  el == target && newArr.push(index);
        if (el == target) {
            newArr.push(index);
        }
    })
    return newArr;
}
// 给定的 js 代码中存在全局变量， 请修复
function globals() {
    var myObject = {
        name: 'Jory'
    };

    return myObject;
}
// 正确定义函数
// 请修复给定的 js 代码中， 函数定义存在的问题
function functions(flag) {
    if (flag) {
        return 'a';
    } else {
        return 'b';
    }
    return getValue();
}
// 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
function parse2Int(num) {
    return parseInt(num, 10);
}
// 判断 val1 和 val2 是否完全等同
function identity(val1, val2) {
    return val1 === val2
}
// 实现一个打点计时器
function count(start, end) {
    console.log(start);
    var timer = setInterval(() => {
        if (start < end) {
            console.log(++start);
        } else {
            clearInterval(timer);
        }
    }, 100)
    return {
        cancel() {
            clearInterval(timer);
        }
    }
}
// 实现 fizzBuzz 函数， 参数 num 与返回值的关系如下：
// 1、 如果 num 能同时被 3 和 5 整除， 返回字符串 fizzbuzz
// 2、 如果 num 能被 3 整除， 返回字符串 fizz
// 3、 如果 num 能被 5 整除， 返回字符串 buzz
// 4、 如果参数为空或者不是 Number 类型， 返回 false
// 5、 其余情况， 返回参数 num
function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "fizzbuzz";
    } else if (num % 3 == 0) {
        return "fizz";
    } else if (num % 5 == 0) {
        return "buzz";
    } else if (typeof(num) != "number") {
        return false;
    } else {
        return num;
    }
}
// 将数组 arr 中的元素作为调用函数 fn 的参数
function argsAsArray(fn, arr) {
    return fn.apply(this, arr)
}
// 将函数 fn 的执行上下文改为 obj 对象
function speak(fn, obj) {
    return fn.call(obj)
}
// 实现函数 functionFunction，调用之后满足如下条件：
// 1、 返回值为一个函数 f
// 2、 调用返回的函数 f， 返回值为按照调用顺序的参数拼接， 拼接字符为英文逗号加一个空格， 即 ', '
// 3、 所有函数的参数数量为 1， 且均为 String 类型
function functionFunction(str) {
    return f = function(arr) {
        return str + ", " + arr;
    };
}
// 实现函数 makeClosures， 调用之后满足如下条件：
// 1、 返回一个函数数组 result， 长度与 arr 相同
// 2、 运行 result 中第 i 个函数， 即 result[i]()， 结果与 fn(arr[i]) 相同、
function makeClosures(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn.bind(this, arr[i]);
    }
    return result;
}
// 已知函数 fn 执行需要 3 个参数。 请实现函数 partial， 调用之后满足如下条件：
// 1、 返回一个函数 result， 该函数接受一个参数
// 2、 执行 result(str3)， 返回的结果与 fn(str1, str2, str3) 一致
function partial(fn, str1, str2) {
    return function(str3) {
        return fn(str1, str2, str3);
    }
}
// 函数 useArguments 可以接收 1 个及以上的参数。 请实现函数 useArguments，
// 返回所有调用参数相加后的结果。 本题的测试参数全部为 Number 类型， 不需考虑参数转换。
function useArguments() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
// 实现函数 callIt， 调用之后满足如下条件
// 1、 返回的结果为调用 fn 之后的结果
// 2、 fn 的调用参数为 callIt 的第一个参数之后的全部参数
function callIt(fn) {
    return fn.apply(this, [].slice.call(arguments, 1))
}
// 实现函数 partialUsingArguments， 调用之后满足如下条件：
// 1、 返回一个函数 result
// 2、 调用 result 之后， 返回的结果与调用函数 fn 的结果一致
// 3、 fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
function partialUsingArguments(fn) {
    let args1 = Array.prototype.slice.call(arguments, 1)
    return function() {
        let args2 = Array.prototype.slice.call(arguments, 0)
        return fn.apply(this, args1.concat(args2))
    }
}
// 已知 fn 为一个预定义函数， 实现函数 curryIt， 调用之后满足如下条件：
// 1、 返回一个函数 a， a 的 length 属性值为 1（ 即显式声明 a 接收一个参数）
// 2、 调用 a 之后， 返回一个函数 b, b 的 length 属性值为 1
// 3、 调用 b 之后， 返回一个函数 c, c 的 length 属性值为 1
// 4、 调用 c 之后， 返回的结果与调用 fn 的返回值一致
// 5、 fn 的参数依次为函数 a, b, c 的调用参数
function curryIt(fn) {
    let args = []
    return function curried(arg) {
        args.push(arg)
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function(arg2) {
                return curried.call(this, arg2)
            }
        }
    }
}
// 完成函数 createModule， 调用之后满足如下要求：
// 1、 返回一个对象
// 2、 对象的 greeting 属性值等于 str1， name 属性值等于 str2
// 3、 对象存在一个 sayIt 方法， 该方法返回的字符串为 greeting属性值 + ', ' + name属性值
function createModule(str1, str2) {
    return {
        greeting: str1,
        name: str2,
        sayIt: function() {
            return this.greeting + ', ' + this.name
        }
    }
}
// 获取数字 num 二进制形式第 bit 位的值。 注意：
// 1、 bit 从 1 开始
// 2、 返回 0 或 1
// 3、 举例： 2 的二进制为 10， 第 1 位为 0， 第 2 位为 1
function valueAtBit(num, bit) {
    var string = num.toString(2);
    var bitString = string[string.length - bit];
    return bitString;
}
// 给定二进制字符串， 将其换算成对应的十进制数字
function base10(str) {
    return parseInt(str, 2);
}
// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
function convertToBinary(num) {
    var num2 = num.toString(2);
    if (num2.length < 8) {
        num2 = ("0000000" + num2).slice(-8)
    }
    return num2
}
// 求 a 和 b 相乘的值， a 和 b 可能是小数， 需要注意结果的精度问题
function multiply(a, b) {
    a = a.toString();
    b = b.toString();
    var aLen = a.substring(a.indexOf(".") + 1).length;
    var bLen = b.substring(b.indexOf(".") + 1).length;
    return ((a * Math.pow(10, aLen)) * (b * Math.pow(10, bLen))) / Math.pow(10, aLen + bLen);
}
// 将函数 fn 的执行上下文改为 obj， 返回 fn 执行后的值
function alterContext(fn, obj) {
    return fn.apply(obj);
}
// 给定一个构造函数 constructor， 请完成 alterObjects 方法， 将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
}
// 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
// 1、 返回数组， 格式为 key: value
// 2、 结果数组不要求顺序
function iterate(obj) {
    let res = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) res.push(`${key}: ${obj[key]}`);
    }
    return res;
}
// 给定字符串 str， 检查其是否包含数字， 包含返回 true， 否则返回 false
function containsNumber(str) {
    var pattern = /[0-9]/;
    return pattern.test(str);
}
// 给定字符串 str， 检查其是否包含连续重复的字母（ a - zA - Z）， 包含返回 true， 否则返回 false
function containsRepeatingLetter(str) {
    return /([a-zA-Z])\1/.test(str)
}
// 给定字符串 str， 检查其是否以元音字母结尾
// 1、 元音字母包括 a， e， i， o， u， 以及对应的大写
// 2、 包含返回 true， 否则返回 false
function endsWithVowel(str) {
    var reg = /(a|o|e|i|u)$/gi;
    return reg.test(str);
}
// 给定字符串 str， 检查其是否包含 连续3个数字
// 1、 如果包含， 返回最先出现的 3 个数字的字符串
// 2、 如果不包含， 返回 false
function captureThreeNumbers(str) {
    const reg = /[0-9]{3}/;
    if (!reg.test(str)) return false;
    return str.match(reg)[0];
}
// 给定字符串 str， 检查其是否符合如下格式
// 1、 XXX - XXX - XXXX
// 2、 其中 X 为 Number 类型
function matchesPattern(str) {
    var reg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return reg.test(str);
}
// 给定字符串 str， 检查其是否符合美元书写格式
// 1、 以 $ 开始
// 2、 整数部分， 从个位起， 满 3 个数字用, 分隔
// 3、 如果为小数， 则小数部分长度为 2
// 4、 正确的格式如： $1, 023, 032.03 或者 $2 .03， 错误的格式如： $3, 432, 12.12 或者 $34, 344.3
function isUSD(str) {
    return /^\$[1-9]\d{0,2}(,\d{3})*(\.\d{2})?$/.test(str)
}