
var dom = document.getElementById("occupation");
var myChart = echarts.init(dom,'chalk');
var app = {};
option = null;

var yearCount = 11;
var categoryCount = 30;

var data = [
    [
        0,
        1,
        9,
        3,
        1,
        2,
        0,
        0,
        2,
        24,
        399,
        17
    ],
    [
        1,
        1847,
        2207,
        1741,
        2180,
        10812,
        5363,
        3916,
        8526,
        8390,
        16156,
        14149
    ],
    [
        2,
        3827,
        6074,
        34468,
        139419,
        295691,
        466352,
        387616,
        490440,
        319553,
        634926,
        386596
    ],
    [
        3,
        5,
        122,
        68,
        22,
        39,
        13,
        10,
        38,
        414,
        3456,
        263
    ],
    [
        4,
        28513,
        37877,
        14562,
        14604,
        121359,
        13660,
        12034,
        23555,
        24693,
        41152,
        33918
    ],
    [
        5,
        364,
        787,
        4626,
        23986,
        42605,
        63668,
        47505,
        69922,
        49001,
        89172,
        53790
    ],
    [
        6,
        7,
        61,
        51,
        34,
        23,
        31,
        25,
        143,
        795,
        5428,
        558
    ],
    [
        7,
        134,
        127,
        138,
        139,
        1422,
        807,
        592,
        1111,
        1268,
        3635,
        2595
    ],
    [
        8,
        2,
        19,
        50,
        149,
        239,
        429,
        419,
        567,
        830,
        964,
        1015
    ],
    [
        9,
        1,
        12,
        3,
        1,
        0,
        3,
        1,
        8,
        64,
        346,
        61
    ],
    [
        10,
        173,
        209,
        221,
        281,
        902,
        587,
        948,
        1463,
        1368,
        1804,
        1479
    ],
    [
        11,
        1,
        4,
        18,
        35,
        56,
        106,
        81,
        104,
        162,
        209,
        200
    ],
    [
        12,
        3,
        149,
        93,
        31,
        23,
        40,
        13,
        43,
        538,
        4188,
        337
    ],
    [
        13,
        508,
        498,
        465,
        558,
        4170,
        3059,
        1118,
        2251,
        2273,
        5576,
        3946
    ],
    [
        14,
        7,
        20,
        147,
        274,
        466,
        881,
        568,
        727,
        985,
        1162,
        1072
    ],
    [
        15,
        1,
        60,
        4,
        10,
        11,
        5,
        3,
        12,
        128,
        762,
        122
    ],
    [
        16,
        236,
        359,
        221,
        230,
        754,
        574,
        391,
        532,
        494,
        757,
        536
    ],
    [
        17,
        2,
        2,
        10,
        36,
        78,
        144,
        63,
        94,
        83,
        87,
        47
    ],
    [
        18,
        2,
        1,
        6,
        0,
        1,
        3,
        0,
        0,
        10,
        20,
        2
    ],
    [
        19,
        2,
        18,
        28,
        15,
        52,
        35,
        31,
        81,
        67,
        81,
        74
    ],
    [
        20,
        0,
        0,
        0,
        3,
        6,
        6,
        5,
        6,
        1,
        2,
        3
    ],
    [
        21,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        1
    ],
    [
        22,
        6,
        16,
        10,
        9,
        59,
        18,
        22,
        38,
        30,
        53,
        143
    ],
    [
        23,
        0,
        0,
        2,
        5,
        3,
        6,
        6,
        4,
        9,
        3,
        9
    ],
    [
        24,
        7,
        40,
        25,
        16,
        13,
        26,
        14,
        29,
        232,
        1457,
        166
    ],
    [
        25,
        366,
        235,
        340,
        324,
        3254,
        1995,
        848,
        2181,
        2184,
        4949,
        3034
    ],
    [
        26,
        7,
        28,
        122,
        218,
        356,
        556,
        474,
        601,
        917,
        992,
        1068
    ],
    [
        27,
        4,
        73,
        16,
        5,
        3,
        15,
        6,
        89,
        473,
        5993,
        366
    ],
    [
        28,
        170,
        134,
        171,
        187,
        1962,
        1583,
        856,
        2427,
        2312,
        6171,
        6618
    ],
    [
        29,
        0,
        0,
        2,
        14,
        21,
        31,
        46,
        39,
        55,
        68,
        82
    ],
    [
        30,
        2,
        186,
        189,
        23,
        3,
        23,
        14,
        85,
        817,
        10653,
        909
    ],
    [
        31,
        245,
        213,
        253,
        347,
        2998,
        2344,
        1623,
        3527,
        4559,
        11533,
        8997
    ],
    [
        32,
        4,
        22,
        97,
        359,
        651,
        1043,
        1161,
        1501,
        1936,
        2552,
        2364
    ],
    [
        33,
        2,
        31,
        2,
        3,
        2,
        4,
        6,
        4,
        296,
        8132,
        83
    ],
    [
        34,
        1151,
        3219,
        3789,
        3586,
        9214,
        1108,
        676,
        1774,
        1961,
        5310,
        4074
    ],
    [
        35,
        5,
        5,
        61,
        267,
        484,
        668,
        879,
        895,
        792,
        815,
        763
    ],
    [
        36,
        4,
        102,
        18,
        9,
        10,
        39,
        20,
        88,
        322,
        1716,
        376
    ],
    [
        37,
        782,
        660,
        265,
        377,
        5571,
        2183,
        1146,
        2411,
        847,
        2614,
        1271
    ],
    [
        38,
        19,
        53,
        134,
        932,
        1448,
        2052,
        1938,
        2207,
        323,
        333,
        316
    ],
    [
        39,
        0,
        11,
        1,
        2,
        1,
        0,
        0,
        3,
        34,
        880,
        31
    ],
    [
        40,
        3596,
        4201,
        3607,
        4794,
        15692,
        11351,
        11329,
        24424,
        28531,
        56097,
        51432
    ],
    [
        41,
        2158,
        6588,
        43461,
        322763,
        812321,
        1237124,
        1177247,
        1599372,
        1451729,
        2044785,
        1547543
    ],
    [
        42,
        0,
        13,
        7,
        1,
        2,
        4,
        2,
        1,
        79,
        426,
        46
    ],
    [
        43,
        361,
        311,
        258,
        232,
        1605,
        519,
        396,
        637,
        597,
        1026,
        732
    ],
    [
        44,
        4,
        7,
        54,
        115,
        165,
        278,
        277,
        320,
        258,
        419,
        341
    ],
    [
        45,
        0,
        4,
        1,
        0,
        0,
        2,
        0,
        2,
        8,
        49,
        2
    ],
    [
        46,
        6,
        3,
        3,
        4,
        27,
        10,
        9,
        20,
        9,
        19,
        17
    ],
    [
        47,
        0,
        2,
        5,
        8,
        16,
        13,
        18,
        28,
        11,
        16,
        16
    ],
    [
        48,
        0,
        19,
        3,
        2,
        0,
        1,
        1,
        6,
        58,
        347,
        53
    ],
    [
        49,
        36,
        31,
        37,
        36,
        216,
        126,
        109,
        206,
        164,
        441,
        261
    ],
    [
        50,
        0,
        2,
        11,
        29,
        57,
        72,
        72,
        56,
        72,
        81,
        92
    ],
    [
        51,
        0,
        0,
        1,
        2,
        0,
        0,
        0,
        0,
        6,
        105,
        13
    ],
    [
        52,
        25,
        16,
        10,
        13,
        164,
        51,
        40,
        91,
        81,
        180,
        125
    ],
    [
        53,
        2,
        0,
        4,
        14,
        13,
        38,
        22,
        25,
        42,
        32,
        46
    ],
    [
        54,
        0,
        150,
        48,
        40,
        172,
        14,
        5,
        22,
        365,
        2491,
        452
    ],
    [
        55,
        7437,
        7042,
        10275,
        13732,
        18089,
        19065,
        29928,
        46643,
        49754,
        57675,
        61981
    ],
    [
        56,
        4,
        17,
        72,
        327,
        844,
        1161,
        1300,
        1819,
        1613,
        2238,
        1998
    ],
    [
        57,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        0
    ],
    [
        58,
        78,
        181,
        40,
        44,
        59,
        64,
        121,
        242,
        291,
        304,
        341
    ],
    [
        59,
        0,
        0,
        0,
        2,
        5,
        41,
        9,
        10,
        5,
        5,
        10
    ],
    [
        "幼托儿童-登革热",
        "幼托儿童-流行性感冒",
        "幼托儿童-手足口病",
        "学生-登革热",
        "学生-流行性感冒",
        "学生-手足口病",
        "商业服务-登革热",
        "商业服务-流行性感冒",
        "商业服务-手足口病",
        "医务人员-登革热",
        "医务人员-流行性感冒",
        "医务人员-手足口病",
        "工人-登革热",
        "工人-流行性感冒",
        "工人-手足口病",
        "民工-登革热",
        "民工-流行性感冒",
        "民工-手足口病",
        "渔(船)民-登革热",
        "渔(船)民-流行性感冒",
        "渔(船)民-手足口病",
        "海员及长途驾驶员-登革热",
        "海员及长途驾驶员-流行性感冒",
        "海员及长途驾驶员-手足口病",
        "干部职员-登革热",
        "干部职员-流行性感冒",
        "干部职员-手足口病",
        "离退人员-登革热",
        "离退人员-流行性感冒",
        "离退人员-手足口病",
        "家务及待业-登革热",
        "家务及待业-流行性感冒",
        "家务及待业-手足口病",
        "不详-登革热",
        "不详-流行性感冒",
        "不详-手足口病",
        "其它-登革热",
        "其它-流行性感冒",
        "其它-手足口病",
        "散居儿童-登革热",
        "散居儿童-流行性感冒",
        "散居儿童-手足口病",
        "教师-登革热",
        "教师-流行性感冒",
        "教师-手足口病",
        "保育员及保姆-登革热",
        "保育员及保姆-流行性感冒",
        "保育员及保姆-手足口病",
        "餐饮食品业-登革热",
        "餐饮食品业-流行性感冒",
        "餐饮食品业-手足口病",
        "公共场所服务员-登革热",
        "公共场所服务员-流行性感冒",
        "公共场所服务员-手足口病",
        "农民-登革热",
        "农民-流行性感冒",
        "农民-手足口病",
        "牧民-登革热",
        "牧民-流行性感冒",
        "牧民-手足口病"
    ]
]
var xAxisData = [];//x轴的分类名
var customData = [];//分类的二维数组
var legendData = [];//年份，不需要传
var dataList = [];//

//二维数组声明
var mylist = new Array();  //先声明一维
for(var k=0;k<data[0].length;k++){    //一维长度为i,i为变量，可以根据实际情况改变
    mylist[k]=new Array();  //声明二维，每一个一维数组里面的一个元素都是一个数组；
    for(var j=0;j<data.length;j++){   //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
    mylist[k][j]="";    //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
    }
}

for(i=0;i<data[0].length;i++){
    for(j=0;j<data.length;j++){
        mylist[i][j] = data[j][i]
    }
}
mylist = mylist.splice(1,data[0].length)

var mylist2 = new Array();
for(var k=0;k<data.length-1;k++){
    mylist2[k] = data[k]
}

// console.log(data[data.length-1])
// console.log(mylist);
// console.log(mylist2);

legendData.push('trend');
var encodeY = [];
for (var i = 0; i < yearCount; i++) {
    legendData.push((2005 + i) + '');
    dataList.push([]);
    encodeY.push(1 + i);
}

// for (var i = 0; i < categoryCount; i++) {
//     var val = Math.random() * 1000;
//     xAxisData.push('category' + i);
//     var customVal = [i];
//     customData.push(customVal);

//     var data = dataList[0];
//     for (var j = 0; j < dataList.length; j++) {
//         var value = j === 0
//             ? echarts.number.round(val, 2)
//             : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2);
//         dataList[j].push(value);
//         customVal.push(value);
//     }
// }

function renderItem(params, api) {
    var xValue = api.value(0);
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
    });

    var points = [];
    for (var i = 0; i < currentSeriesIndices.length; i++) {
        var seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex) {
            var point = api.coord([xValue, api.value(seriesIndex)]);
            point[0] += barLayout[i - 1].offsetCenter;
            point[1] -= 20;
            points.push(point);
        }
    }
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });

    return {
        type: 'polyline',
        shape: {
            points: points
        },
        style: style
    };
}

dataList = mylist;
customData = mylist2;
xAxisData = data[data.length-1];
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legendData,
        type: 'scroll',
    },
    dataZoom: [{
        type: 'slider',
        start: 30,
        end: 50
    }, {
        type: 'inside',
        start: 30,
        end: 50
    }],
    xAxis: {
        data: xAxisData
    },
    yAxis: {
        
    },
    series: [{
        type: 'custom',
        name: 'trend',
        renderItem: renderItem,
        itemStyle: {
            normal: {
                borderWidth: 2
            }
        },
        encode: {
            x: 0,
            y: encodeY
        },
        data: customData,
        z: 100
    }].concat(echarts.util.map(dataList, function (data, index) {
        return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            data: data
        };
    }))
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    // console.log(dataList);
    // console.log(customData);
    // console.log(xAxisData);
    // console.log(data[data.length-1])
}