(function () {
	var link=document.getElementById('ajaxFile');//Linke ulaştık
	link.onclick=function () { //link click event
		var xhr=new XMLHttpReques();//Object created.
		/****
		0	=	uninitialized(Başlatılmadı)	
		1	=	loading(yükleniyor)
		2	=	loaded.(yüklendi)
		3	=	interactive(etkileşimli)
		4	=	complete(tamamlandı)

		responseText	=	Veriyi "String" biçimde yollar.
		responseXML 	=	Veriyi XML olarak yollar.
		status			=	Sunucun durumunu sayısal olarak belirtir.
		404				=	Not found(Bulunamadı)
		200				=	Ok(tamam)
		statusText		=	Durumla gelen yazı değerini belirtir.

		****/
		
		xhr.onreadystatechange=function () {
			if ((xhr.readyState==4) && (xhr.status==200 || xhr.status==304)) {
				xhr.responseText;
				var body=document.getElementsByTagName('body')[0];
				var span=document.createElement('span');//Span tag lı bir etiket oluştur.
				var	spanText=document.createTextNode(xhr.responseText);
				span.appendChild(spanText);
				body.appendChild(span);
			}
		};
		//istek göndermek için kayır açıyoruz.
		xhr.open("GET","ajax.txt",true);

		//isteği gönderiyoruz.
		xhr.send(null);
		return false;
	};
});