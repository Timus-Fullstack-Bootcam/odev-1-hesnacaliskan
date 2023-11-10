var dolap = ["Shirt", "Pant", "TShirt"];

// Dolaptaki son elemanı silip consola yazdırma
var sonEleman = dolap.pop();
console.log("Son Eleman Silindi:", sonEleman);

// Dolaptaki ilk elemanı silip yerine "Hat" ekleyip consola yazdırma
dolap.shift();
dolap.unshift("Hat");
console.log("İlk Eleman Silindi, Yerine Hat Eklendi:", dolap);

// Dolap değişkeninin bir dizi olup olmadığını kontrol etme
var isArray = Array.isArray(dolap);
console.log("Dolap Bir Dizi Mi? ", isArray);

// Dolap arrayinde "Pant" elemanının olup olmadığını 3 farklı yöntemle kontrol etme
var method1 = dolap.indexOf("Pant") !== -1;
var method2 = dolap.includes("Pant");
var method3 = dolap.some(item => item === "Pant");
console.log("Pant Elemani Kontrolü:", method1, method2, method3);

// Elemanların karakter sayısını toplayıp geriye döndürecek fonksiyonu yazma
function karakterSayisiTopla(arr) {
  return arr.reduce((total, item) => total + item.length, 0);
}
console.log("Eleman Karakter Sayisi Toplami:", karakterSayisiTopla(dolap));

// Tüm elemanları büyük harfe çevirip yeni bir değişkene 3 farklı yöntemle atama
var buyukHarf1 = dolap.map(item => item.toUpperCase());
var buyukHarf2 = dolap.join(',').toUpperCase().split(',');
var buyukHarf3 = dolap.reduce((acc, item) => {
  acc.push(item.toUpperCase());
  return acc;
}, []);
console.log("Tüm Elemanlar Büyük Harfe Çevrildi:", buyukHarf1, buyukHarf2, buyukHarf3);

// Dolap arrayini index sayıları key olacak şekilde objeye çevirme
var dolapObj = {};
dolap.forEach((item, index) => {
  dolapObj[index] = item;
});
console.log("Dolap Arrayi Objeye Çevrildi:", dolapObj);

/*
slice Metodu:
slice metodu, bir dizinin belirli bir bölümünü kopyalamak için kullanılır. Orijinal dizi üzerinde değişiklik yapmaz, sadece bir kopyasını alır.
İki parametre alabilir: başlangıç (başlangıç indisini içerir) ve bitiş (bitiş indisini içermez). Eğer parametreler belirtilmezse, tüm dizi kopyalanır.
Oluşturulan yeni dizi, orijinal dizinin belirtilen bölümünü içerir.

let originalArray = [1, 2, 3, 4, 5];
let slicedArray = originalArray.slice(1, 4);

console.log(slicedArray); // [2, 3, 4]
console.log(originalArray); // [1, 2, 3, 4, 5] (değişmez)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
splice Metodu:
splice metodu, bir dizinin belirli bir bölümünü çıkarmak, değiştirmek veya yeni öğeler eklemek için kullanılır. Orijinal diziyi değiştirir.
İki veya daha fazla parametre alabilir: başlangıç (başlangıç indisini içerir), silinecek öğe sayısı (opsiyonel, 0 ise silme yok), ve eklenecek öğeler (opsiyonel).
splice kullanıldıktan sonra, orijinal dizide yapılan değişiklikler gerçekleşmiş olur.

let originalArray = [1, 2, 3, 4, 5];
let splicedArray = originalArray.splice(1, 3, 6, 7);

console.log(splicedArray); // [2, 3, 4] (silinen öğeler)
console.log(originalArray); // [1, 6, 7, 5] (değiştirilen ve eklenen öğeler)

Özetle:

* slice bir dizi diliminin kopyasını alır ve orijinal diziyi değiştirmez.
* splice bir dizinin belli bir bölümünü çıkarabilir, değiştirebilir veya yeni öğeler ekleyebilir ve orijinal diziyi değiştirir.*/

