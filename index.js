<!--
// -----------------------------------------------------------------------------
// 全局变量
// 所需 Flash 的主版本号
var requiredMajorVersion = 9;
// 所需 Flash 的次版本号
var requiredMinorVersion = 0;
// 所需 Flash 的版本号
var requiredRevision = 45;

// -----------------------------------------------------------------------------
// -->

function showflash() {
if (AC_FL_RunContent == 0 || DetectFlashVer == 0) {
alert("此页需要 AC_FL_RunContent.js");
} else {
var hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
if(hasRightVersion) {  // 如果我们检测到了可接受的版本
// 嵌入 Flash 影片
AC_FL_RunContent(
'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,45,0',
'width', '100%',
'height', '100%',
'src', 'index',
'quality', 'high',
'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
'align', 'middle',
'play', 'true',
'loop', 'true',
'scale', 'showall',
'wmode', 'window',
'devicefont', 'false',
'id', 'index',
'name', 'index',
'menu', 'true',
'allowScriptAccess','sameDomain',
'allowFullScreen','true',
'movie', 'index?'+'',
'salign', '',
'wmode', 'opaque'
); //end AC code
} else {  // Flash 太旧或者我们无法检测到插件
var alternateContent = '<div id="noflash">No Flash, No 酷炫的动画~'
+ ' <a href="https://get.adobe.com/flashplayer/">获取Flash插件</a></div>';
document.write(alternateContent);  // 插入非 Flash 内容
}
}
// -->
}


/*     导航      */
jQuery(document).ready(function($){
	
	//Fix Errors - http://www.learningjquery.com/2009/01/quick-tip-prevent-animation-queue-buildup/
	
	//Remove outline from links
	$("a").click(function(){
		$(this).blur();
	});
	
	//When mouse rolls over
	$("li").mouseover(function(){
		$(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
	//When mouse is removed
	$("li").mouseout(function(){
		$(this).stop().animate({height:'40px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
});