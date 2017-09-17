$(function(){
    //echart图表
 	var myChart = echarts.init(document.getElementById('line'));
    var myChart1 = echarts.init(document.getElementById('line1'));
    var myChart2 = echarts.init(document.getElementById('line2'));
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView : {show: true, readOnly: false},
                saveAsImage : {show: true}
            }
        },
        xAxis: {
            splitLine:{show:false},
            type: 'category',
            boundaryGap: false,
            data: ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:30','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
        },
        yAxis: {
            splitLine:{show:false},
            type: 'value'
        },
        series: [

            {
                name:'次数', 
                type:'line',
                stack: '总量',
                itemStyle : {normal : {color:'#0066CC',lineStyle:{color:'#0066CC'}}},  
                data:[20, 25, 17, 15, 30, 40, 70,38,30,28,23,15,20,27,29,12,19,29,45,12,22,34,25,33]
            }
        ]
    };
    option1 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView : {show: true, readOnly: false},
                saveAsImage : {show: true}
            }
        },
        xAxis: {
            splitLine:{show:false},
            type: 'category',
            boundaryGap: false,
            data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
        },
        yAxis: {
            splitLine:{show:false},
            type: 'value'
        },
        series: [

            {
                name:'次数', 
                type:'line',
                stack: '总量',
                itemStyle : {normal : {color:'#0066CC',lineStyle:{color:'#0066CC'}}},  
                data:[20, 25, 17, 15, 30, 40, 70]
            }
        ]
    };
    option2 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView : {show: true, readOnly: false},
                saveAsImage : {show: true}
            }
        },
        xAxis: {
            splitLine:{show:false},
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12']
        },
        yAxis: {
            splitLine:{show:false},
            type: 'value'
        },
        series: [

            {
                name:'次数', 
                type:'line',
                stack: '总量',
                itemStyle : {normal : {color:'#0066CC',lineStyle:{color:'#0066CC'}}},  
                data:[20, 25, 17, 15, 30, 40, 70,38,30,28,23,15]
            }
        ]
    };
    myChart.setOption(option);
    myChart1.setOption(option1);
    myChart2.setOption(option2);

    //选择图表形式
    $('#day').on('click',function(){
        $("#line").css('display','block'); 
        $("#line1").css('display','none'); 
        $("#line2").css('display','none'); 
    });
    $('#week').on('click',function(){
        $("#line").css('display','none'); 
        $("#line1").css('display','block'); 
        $("#line2").css('display','none'); 
    });
    $('#month').on('click',function(){
        $("#line").css('display','none'); 
        $("#line1").css('display','none'); 
        $("#line2").css('display','block'); 
    });
    //调出日期
    (function(){
        var cxCalendarApi=null;
        $('#date_a').cxCalendar({format: 'YYYY-M-D'}, function(api){
            cxCalendarApi = api;
        });
        $('body').on('click', function(){
            console.log(cxCalendarApi.getDate());
        });
    })();
    //表格数据json
    $(document).ready(function() {
        var json = [{"防御模块名":"www", "已知威胁":"2", "未知威胁":"34",'监控URL':'lzu.edu.cn', '状态':'online'},{"防御模块名":"www", "已知威胁":"2", "未知威胁":"34",'监控URL':'lzu.edu.cn', '状态':'online'},{"防御模块名":"www", "已知威胁":"2", "未知威胁":"34",'监控URL':'lzu.edu.cn', '状态':'online'}]; 
        $('#exampleindex').columns({data:json});
    }); 

})
