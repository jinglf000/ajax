// 多输入表单序列化的方式
var content;
$(function(){
	$("#submit").click(function(e){
		e.preventDefault();
		content = $("#ajax").serializeArray();
		console.log(content);
		// content = JSON.stringify(content);
		// console.log(content)
		var m ={};
		$.each(content,function(i,obj){// content 中不应该有length属性
			m[obj.name]=obj.value;
			return m;
		});
		console.log(m);

		var url = "https:www.google.com.hk";
		url = url + "?";
		/*$.each(m,function(name,value){ // 序列化对象
			url = url + name + "=" + value+ "&";
		})*/
		// 序列化url参数的方法，需要传入对象参数，传入的对象只能单层嵌套
		url = url + $.param(m)
		console.log(url);
	})
})
// url 地址拼接,从url地址中获取参数 已经有封装好的方法了
$(function(){
	if($.cookie('sex')){
		console.log($.cookie('sex'));
	}
	$("#cook").click(function(){
		alert("将要设置cookie");
		var value_cookie = $("input[type='radio']:checked").val();
		$.cookie('sex',value_cookie,{expires: 7,path:'/'});	
	});

})
