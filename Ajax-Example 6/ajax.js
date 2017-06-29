$(function () {
	/*$('#sonuc').click(function () {
		$('#ajax-istegi').slideToggle("slow");
	});*/

	$('#ajax-istegi').ajaxStart(function() {
		$(this).append("Ajax işlemi başladı...");
	});

	$.ajax({
		
		type:"POST",//Gönderme Tipi
		
		url:"ajax.php",//Gönderilecek Adres
		
		data:{"ad":"Ender","soyad":"İMEN"},//Gönderilecek Veri
		
		dataType:"json",//Gönderilen veri tipi

		global: true,//ajax olay tutucularının tetiklenip tetiklenmeyeceğini sağlar. üstte yaptığımız örn. gibi

		timeout: 5000,//5 sonra işlemin iptal edileceğini belirtiyor. 

		success:function (cevap) {//Gönderme işlemi ardından yapılacaklar ajax.php den gelen $dizi cevap değşkenine geliyor.
		var sonuc="Adınız: "+cevap.ad+"<br/>Soyadınız : "+cevap.soyad;
		$('#sonuc').html(sonuc);
		}
	
	});
});