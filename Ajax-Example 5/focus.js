/*
##Ender İMEN
##02.04.2017 
*/
/*$(':text').focusin(function () {  		//Buradaki  ':' işareti hangi özelliğin önüne konulursa o bileşenlerin tümüne etki eder.
	$(this).css('background-color','gray');
});
$(':text').blur(function () {
	$(this).css('background-color','#fff');
});
$(':text').focusin(function () {
	$(this).css('color','white');
});*/

$placeholder='Ara';

$('#ara').attr('value',$placeholder).focus(function () {
	
		if ($(this).val()==$placeholder) 
		{
			$(this).attr('value','');
			$(this).css('background-color','yellow');
			$(this).css('color','blue');
		}

}).blur(function () {
		if ($(this).val()=='') 
		{
			$(this).attr('value',$placeholder);
			$(this).css('background-color','white');
			$(this).css('color','black');
		}
});	

/*ARAMA İŞLEMİ*/

$(document).ready(function () {//sayfa yüklendiğinde

	$('#ara').keyup(function () {//text e girilen o anki değeri yakalamak için

		$aranan=$('#ara').val();//texte girilen değeri çektik
		
		$('#isimler li').removeClass('altiniCiz'); //uygulanan classı iptal etmek için
			
		if (jQuery.trim($aranan)!='')//aranan değer boşsa[boşlukları trim fonk. kestik]
		{
			$("#isimler li:contains('"+$aranan+"')").addClass('altiniCiz');//bulunan değerin arkaplanını boya
		}
	});
});

//textbox tan aldığımız değere göre renk belirliyoruz.

$(document).ready(function () {
	$('#renk').keyup(function () {
		$renk=$('#renk').val();	
		$('#yazi').css('color',$renk);
	});

});
//Slide şeklinde açılır menü
$(document).ready(function () {
	$sayac=0;
	$('#flip').click(function () {	
		$('.panel').css("background-color", "red").slideToggle("slow");//zincirleme query kullanımı
	});
	$('#pEkle').click(function () {
		$sayac++;
		$('ul').append('<li>"'+$sayac+'" Beni ekledin alet olsun.</li>');
	});
	$('#bEkle').click(function () {
		$tag=$('#tag').val();
		$icerik=$('#icerik').val();
		//$('ul').append(' "<" + "' + $tag +'" + ">" + "'+icerik+'" + "</"+"'+$tag+'" + ">" ');
	});
});

/*
$(document).ready(function () {

	$('.panel').hover(function () {
	$(this).css('background-color','blue');
});
});*/

//paneli sağa sola yukarı vs. kaydırmak için
/*
$(document).ready(function () {
	$('.panel').click(function () {	
		$('.panel').animate({left: '250px'});
	});
});
*/

//Gizleme efekti [p]
/*
$(document).ready(function(){
    $('input[type="button"]').click(function(){
        $('#yazi').hide(1000);
    });

//mouseEnter mouseLeave mouseOver 

$('#yazi').on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "white");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
});
*/

























