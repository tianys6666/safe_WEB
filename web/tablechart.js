$(function () {
    $(document).ready(function() {
        var json = [{"攻击向量":"/?path=../etc/passwd", "攻击目标":"lzu.edu.cn", "攻击来源":"202.201.0.12",'攻击类型':'本地文件包含', '时间':'2017.2.22-8:21'},{"攻击向量":"/?path=../etc/passwd", "攻击目标":"lzu.edu.cn", "攻击来源":"202.201.0.12",'攻击类型':'本地文件包含', '时间':'2017.2.22-8:21'}];
        $('#exampleYZ').columns({data:json});
    });
    $(document).ready(function() {
        var json = [{"攻击向量":"/?path=../etc/passwd", "攻击目标":"lzu.edu.cn", "攻击来源":"202.201.0.12",'拦截模块':'禁用', '时间':'2017.2.22-8:21'}];
        $('#exampleWZ').columns({data:json});
    });
    $(document).ready(function() {
        var json1 = [{"攻击来源":"202.201.0.2(兰州)", "攻击次数":"2", "目标IP":"210.246.90.1"},{"攻击来源":"202.201.0.2(兰州)", "攻击次数":"2", "目标IP":"210.246.90.1"},{"攻击来源":"202.201.0.2(兰州)", "攻击次数":"2", "目标IP":"210.246.90.1"}];
        $('#exampleattack1').columns({data:json1});

        var json2 = [{"攻击类型":"未知", "攻击次数":"2", "目标IP":"210.246.90.1"},{"攻击类型":"SQL注入", "攻击次数":"2", "目标IP":"210.246.90.1"},{"攻击类型":"远程代码执行", "攻击次数":"2", "目标IP":"210.246.90.1"}];
        $('#exampleattack2').columns({data:json2});
    });
})