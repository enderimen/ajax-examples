<?php 
	
	sleep(2);//Aşağıdaki işlemlere girilen parametre kadar geç başlayacağını belirtir.


	//AJAX tan(ajax.js)den gelen veri
	$ad=$_POST["ad"];
	$soyad=$_POST["soyad"];
	//----------------------------------
	
	//AJAX ile gelen değerleri diziye atadık
	$dizi=array();
	$dizi["ad"]=$ad;
	$dizi["soyad"]=$soyad;
	//-----------------------------------

	echo json_encode($dizi);//Geri dönüş tipi json tipinde o şekilde tanımladığımız için
	//echo "Adınız : ".$ad." Soyadınız :".$soyad; yukarıdaki gibi yapmayıp bu şekilde de yapabilirdik.
 ?>