<!--
// -----------------------------------------------------------------------------
// ȫ�ֱ���
// ���� Flash �����汾��
var requiredMajorVersion = 9;
// ���� Flash �Ĵΰ汾��
var requiredMinorVersion = 0;
// ���� Flash �İ汾��
var requiredRevision = 45;

// -----------------------------------------------------------------------------
// -->

function showflash() {
if (AC_FL_RunContent == 0 || DetectFlashVer == 0) {
alert("��ҳ��Ҫ AC_FL_RunContent.js");
} else {
var hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
if(hasRightVersion) {  // ������Ǽ�⵽�˿ɽ��ܵİ汾
// Ƕ�� Flash ӰƬ
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
} else {  // Flash ̫�ɻ��������޷���⵽���
var alternateContent = '<div id="noflash">No Flash, No ���ŵĶ���~'
+ ' <a href="https://get.adobe.com/flashplayer/">��ȡFlash���</a></div>';
document.write(alternateContent);  // ����� Flash ����
}
}
// -->
}


/*     ����      */
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