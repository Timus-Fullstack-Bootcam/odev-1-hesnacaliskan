# Timus FullStack Bootcamp Homework Week 1-2
## Tanım Soruları

**1. JavaScript nedir? Tarihsel gelişiminden bahsediniz.**





JavaScript, web tarayıcılarında kullanılmak üzere tasarlanmış bir programlama dilidir. Genellikle istemci tarafında (client-side) web sayfalarında etkileşimli içerik oluşturmak için kullanılır. Aynı zamanda sunucu taraflı (server-side) geliştirme için de kullanılan popüler bir programlama dilidir. JavaScript, tarayıcılar dışında birçok platformda da kullanılabilmektedir.

JavaScript'in tarihsel gelişimine bakarsak:

- **İlk Dönem (1995-2002):**

  * **Netscape ve Mocha:** JavaScript, Brendan Eich tarafından Netscape Communications Corporation için geliştirildi ve başlangıçta "Mocha" olarak adlandırıldı.
  * **LiveScript:** Daha sonra ismi "LiveScript" olarak değiştirildi, ancak daha sonra Netscape ile Sun Microsystems arasındaki işbirliğinin bir parçası olarak "JavaScript" olarak değiştirildi. Bu isim değişikliği, Java'nın popülerliğini kullanmaya yönelik bir pazarlama hamlesi olarak da görülmüştür.
- **Standartlaşma (1997):**
  * JavaScript'in standartlaşması, ECMA International tarafından gerçekleştirildi. Bu standart, ECMAScript adı altında yayınlanmıştır. ECMAScript, JavaScript'in temelini oluşturan bir standarttır ve bu sayede farklı tarayıcılar arasında tutarlılık sağlanması amaçlanmıştır.
- **İkinci Nesil Web Gelişim (2002-2010):**
  * AJAX (Asynchronous JavaScript and XML) teknolojisinin ortaya çıkışı, JavaScript'in web sayfalarında dinamik ve asenkron veri alışverişini kolaylaştırdı.
  * jQuery gibi kütüphaneler, JavaScript'in tarayıcılar arasında daha tutarlı çalışmasını sağlamak ve geliştirme süreçlerini hızlandırmak amacıyla ortaya çıktı.
- **Modern JavaScript (2010-günümüz):**
  * ECMAScript 5 (ES5) ve sonrası sürümlerle birlikte, dilin temel özellikleri ve performansı büyük ölçüde geliştirildi.
  * Node.js'in ortaya çıkışı ile JavaScript sunucu taraflı geliştirmelerde de kullanılmaya başlandı.
  * 2015'te ECMAScript 2015 (ES6) sürümü yayınlandı ve dilin önemli özelliklerini ekledi. Bu tarihten sonra, düzenli olarak yeni ECMAScript sürümleri yayınlanmaktadır.
  * Modern framework'ler ve kütüphaneler (React, Angular, Vue.js gibi) sayesinde JavaScript, karmaşık uygulamaların geliştirilmesinde yaygın olarak kullanılmaktadır.

**2. Java ile JavaScript arasındaki fark nedir?**

Java ve JavaScript, isimlerinden ve benzer bir sözdizimine sahip olmalarına rağmen, temelde farklı programlama dilleridir ve farklı amaçlara hizmet ederler. 

**Amaç:**
- Java: Genellikle sunucu tarafında kullanılan, nesne yönelimli, genel amaçlı bir programlama dilidir. Java, genellikle büyük ölçekli uygulamalar, mobil uygulamalar, işletim sistemleri ve ağ uygulamaları gibi çeşitli alanlarda kullanılır.
- JavaScript: İlk olarak tarayıcılarda web sayfalarını etkileşimli hale getirmek amacıyla oluşturulmuş bir tarayıcı tarafı betik dilidir. Ancak günümüzde, JavaScript sunucu taraflı geliştirme (Node.js gibi) ve mobil uygulamalar gibi geniş bir uygulama yelpazesinde de kullanılır.

**Çalışma Ortamları:**

- Java: Java, genellikle Java Virtual Machine (JVM) üzerinde çalışır ve "write once, run anywhere" (bir kere yaz, her yerde çalıştır) prensibine dayanır. Bu, Java'nın platform bağımsız olmasını sağlar.
- JavaScript: JavaScript, tarayıcılarda (client-side) çalıştığı gibi, sunucu taraflı (Node.js) ve mobil uygulama geliştirmek için de kullanılabilir.

**Dil Türü:**
- Java: Statik tipli bir dildir, yani değişken türleri derleme zamanında belirlenir.
- JavaScript: Dinamik tipli bir dildir, yani değişken türleri çalışma zamanında belirlenir.

**Sözdizimi:**

- Java: C++'a benzer bir sözdizimine sahiptir ve nesne yönelimli programlamayı vurgular.
- JavaScript: ECMAScript standardına dayalı olarak geliştirilen bir dil olan JavaScript'in sözdizimi, Java'dan ziyade C'ye daha çok benzemektedir. Ancak, JavaScript nesne tabanlı ve prototip tabanlı programlamayı vurgular.

**Derleme ve Yürütme:**

- Java: Java, genellikle kaynak kodu Java bytecode'a derleyen bir derleyici kullanır ve bu bytecode daha sonra JVM tarafından çalıştırılır.
- JavaScript: JavaScript, tarayıcılarda veya Node.js ortamında yürütülerek doğrudan yorumlanan bir betik dilidir. Herhangi bir derleme adımına ihtiyaç duymaz.

Java ve JavaScript, farklı uygulama alanları için tasarlanmış olsalar da, web geliştirmesi yaparken çoğu zaman ikisi bir arada kullanılır. Java genellikle sunucu tarafında kullanılırken, JavaScript tarayıcı tarafında kullanılır ve bu ikisi birlikte birçok modern web uygulamasında kullanılır.

**3. Javascript'teki veri tipleri nelerdir açıklayınız.**

Javascript' de veri tutmak için kullandığımız javascript veri tiplerini 2 ayrı grupta ele alabiliriz.

- Basit Veri Tipleri: String, Number, Boolean ve undefined.

- Referans Tipler: Dizi, Nesne, Fonksiyon ve null veri tipleridir.

Javascript' de karakter dizilerini string veri tipiyle saklarız. Sayısal verileri number veri tiplerinde tutarız. true yada false verileri boolean veri tipinde tutarız. Tanımlanan ancak içerisine değer atılmayan tipler için undefined tipi kullanılır.

String veri türünde karakter grubu saklayabildiğimiz gibi diziler içerisinde de string bir veri ya da number türünde bir veri grubunu saklayabiliriz. Örneğin isim listesi, şehir listesi vb. Javascript' de bir nesne tanımlayarak bir gruba ait bilgileri ayrı ayrı değişken tanımlamamıza gerek kalmadan saklayabiliriz. Örneğin bir kullanıcının bilgileri ya da bir araç bilgisi. Javascript' de fonksiyonlar da bir nesne olarak nitelendirilir. Aynı şekilde null da bir nesne olarak algılanır. Yani tanımladığınız bir veri içine null değer attığınızda bellekte bir alan tahsis edilir ancak içerisinde bir değer olmadığını söylemiş oluruz.

**4. null ile undefined arasıdaki fark nedir açıklayınız.**

JavaScript'te null ve undefined, bir değişkenin veya nesnenin bir değerinin yokluğunu temsil eden iki özel değerdir. Ancak, aralarında bazı önemli farklılıklar vardır.

undefined, bir değişkenin veya nesnenin henüz bir değer atanmadığı durumu temsil eder. Örneğin, aşağıdaki kod bloğunda, x değişkenine henüz bir değer atanmamıştır:

```JavaScript
 let x;
```
null, bir değişkenin veya nesnenin bir değeri olduğunu, ancak değerin ne olduğunun bilinmediği durumu temsil eder. Örneğin, aşağıdaki kod bloğunda, x değişkenine null değeri atanır:

```JavaScript
 let x = null;
```
**5. NaN nedir açıklayınız.**

JavaScript'te NaN (Not a Number), sayısal bir değer beklenirken ancak sayısal bir değer elde edilemediğinde ortaya çıkan özel bir değerdir. NaN, "sayı değil" anlamına gelir.

NaN, matematiksel bir operasyonun sonucunda geçerli bir sayısal değer elde edilemediğinde, örneğin sıfıra bölme veya bir sayıyı bir sayısal ifadeye dönüştürme işlemlerinde ortaya çıkabilir. Ayrıca, NaN bir değerle matematiksel bir işlem gerçekleştirildiğinde de NaN sonucunu üretebilir.

**6. Javascript’te yorum satırı eklemenin kaç farklı yolu vardır?**

JavaScript'te yorum satırları eklemek için iki farklı yöntem vardır: tek satırlık yorumlar (//) ve çok satırlık yorumlar (/* */).

``` JavaScript
// Bu bir tek satırlık yorum örneğidir.
let x = 5; // Bu da bir tek satırlık yorum.

/*
Bu
bir
çok
satırlık
yorum
örneğidir.
*/

let y = 10;
/* Ayrıca tek satırlık yorumlar da ekleyebiliriz */ let z = 20;
``` 
**7. Global değişken ne demektir açıklayınız.**

Global değişken, bir program içinde herhangi bir yerden erişilebilen ve kullanılabilen bir değişkendir. Bu değişken, programın genelini kapsayan ve tüm fonksiyonlar, bloklar veya modüller arasında paylaşılan bir kapsamdadır.
Global değişkenler genellikle var, let, veya const anahtar kelimeleri ile tanımlanır. Bir değişkeni herhangi bir fonksiyon veya blok dışında tanımlamak, bu değişkenin global kapsama sahip olmasını sağlar. Örnek:

```JavaScript
// Global kapsamdaki değişken
var globalVariable = "Ben global bir değişkenim.";

function exampleFunction() {
    // Bu fonksiyonun içinde globalVariable'a erişebiliriz
    console.log(globalVariable);
}

exampleFunction(); // "Ben global bir değişkenim."
console.log(globalVariable); // "Ben global bir değişkenim."
```
Ancak, global değişkenlerin aşırı kullanımı, kodun karmaşıklığını ve bakımını artırabilir. Bu nedenle, mümkünse, değişkenleri daha dar kapsamlar içinde (örneğin, sadece bir fonksiyon içinde) tanımlamak ve kullanmak daha iyi bir pratiktir. Global değişkenlerin kullanımı, programın beklenmeyen etkileşimlere ve hatalara daha açık hale gelmesine neden olabilir, bu nedenle dikkatli bir şekilde yönetilmelidir.

**8. Javascript’te this anahtar kelimesi nedir açıklayınız.**

JavaScript'te this anahtar kelimesi, kullanıldığı bağlam (context) tarafından belirlenen bir referansı temsil eder. this'in değeri, bir fonksiyonun nasıl çağrıldığına bağlı olarak değişir. İşte this'in davranışını etkileyen bazı temel durumlar:
- Global Bağlam:
  * Eğer bir fonksiyon global bağlamda çağrılıyorsa, yani hiçbir nesne içinde değilse, this global nesneyi temsil eder. Bu genellikle window nesnesidir (tarayıcı ortamında).
- Metodlar ve Nesneler:
  * Eğer bir fonksiyon bir nesnenin metodu olarak çağrılıyorsa, this o nesneyi temsil eder.
- Constructor Fonksiyonları:
  * Eğer bir fonksiyon bir constructor olarak kullanılıyorsa (yeni bir obje oluşturarak), this yeni oluşturulan objeyi temsil eder.
- Call ve Apply Metotları:
  * call veya apply fonksiyonları kullanılarak bir fonksiyonun this değeri belirli bir objeye atanabilir.
- Arrow Fonksiyonları:
  * Arrow fonksiyonlarında, this fonksiyonun tanımlandığı bağlamı korur, yani dinamik olarak değişmez.

**9. == ile === farkını örnekler ile açıklayınız.**

JavaScript'te == ve === karşılaştırma operatörleri, iki değerin eşit olup olmadığını karşılaştırmak için kullanılır. Ancak, aralarında bazı önemli farklılıklar vardır.

== operatörü, iki değerin değerini karşılaştırır. Değerler aynıysa, == operatörü true değerini döndürür. Değerler farklıysa, == operatörü false değerini döndürür.

=== operatörü, iki değerin değerini ve türünü karşılaştırır. Değerler aynıysa ve aynı türdeyse, === operatörü true değerini döndürür. Değerler farklıysa veya farklı türdeyse, === operatörü false değerini döndürür.

```JavaScript
// == operatörü

let a = 1;
let b = 1;

console.log(a == b); // true

let c = "1";
let d = 1;

console.log(c == d); // true

// === operatörü

let a = 1;
let b = 1;

console.log(a === b); // true

let c = "1";
let d = 1;

console.log(c === d); // false
```
Bu kod bloğunun çıktısı aşağıdaki gibidir:

```JavaScript
true
true
true
false
```

**10. let var const farkını tablo yapınız.**

|  Özellik | let     | var      | const    |
| ---------|:-------:| --------:| --------:|
| Değer ataması        | İlk kullanımda atanır  | İlk kullanımda atanabilir        |  Tanımlama sırasında atanır        |          
| Değer atanmazsa        | undefined olarak atanır   | undefined olarak atanır       | Hata verir         |
| Hoisting        | Evet     | Evet     |  Hayır        |
| Scope        | Blok kapsamı     | Fonksiyon kapsamı    |  Blok kapsamı        |
| Yeniden tanımlama	        | Evet     | Evet    | Hayır         |
| Değer değiştirme        | Evet     | Evet     | Hayır         |
| Kullanım alanları        | Değerin değişebileceği durumlar    | Değerin değişebileceği durumlar     |   Değerin değişmemesi gereken durumlar       |

**Hoisting:** let ve var ile tanımlanan değişkenler, tanımlandıkları blokun başına taşınır (hoist edilir). Bu, değişkenlere blokun başından erişilebilmesini sağlar. const ile tanımlanan değişkenler hoist edilmez.

**11. Arrow fonksiyonun normal fonksiyondan farkları nelerdir?**

Arrow fonksiyonları, JavaScript'te EcmaScript 2015'te tanıtılan bir fonksiyon türüdür. Normal fonksiyonlardan farklı olarak, arrow fonksiyonları aşağıdaki özelliklere sahiptir:

- Kendi yerel değişkenlerini oluşturmazlar. Arrow fonksiyonları, içinde tanımlandıkları bloktaki yerel değişkenleri kullanabilirler, ancak kendi yerel değişkenlerini oluşturamazlar.
- Kendi dönüş değerlerini açıkça belirtmek zorunda değillerdir. Arrow fonksiyonları, son ifadenin değeri olarak döndürülen tek satırlı fonksiyonlardır. Bu nedenle, dönüş değeri açıkça belirtilmezse, son ifadenin değeri döndürülür.
- Kod tekrarını azaltabilirler. Arrow fonksiyonları, kısa ve öz kodlar için kullanılabilir. Bu, kodun daha okunaklı ve sürdürülebilir olmasını sağlayabilir.

**12. switch bloğu içinde hatasız nasıl değişken tanımlanır?**

switch bloğu içinde değişkeni hatasız tanımlamak için, let veya var anahtar kelimesini kullanmanız gerekir. Ancak, bu durumda dikkat etmeniz gereken önemli bir nokta, aynı isimde bir değişkenin farklı case ifadelerinde tanımlanması durumudur. JavaScript'te, aynı isimde bir değişkeni birden fazla kez tanımlamak hataya neden olabilir.

Bu durumu önlemek için, switch bloğu dışında bir değişken tanımlayıp, bu değişken switch bloğu içinde kullanılabilir. Örnek vermek istersek:

```JavaScript
let result; // Değişkeni tanımla

switch (condition) {
    case 'case1':
        result = 'Value 1';
        break;
    case 'case2':
        result = 'Value 2';
        break;
    default:
        result = 'Default Value';
}
console.log(result);
```

**13. Pure fonksiyon ne demektir açıklayınız.**

Pure fonksiyonlar kendi argümanlarına bağlı olarak yeni bir değer döndüren fonksiyonlardır. Veritabanı yada io gibi yan etkilere sahip istekler içermezler. Sadece argümanlarına bağlı yeni bir değer hesaplaması yaparlar. Aynı argümanlarla birden fazla kere çağrıldığında hep aynı değeri döndürür. Ayrıca argümanların değerlerini değiştirmezler. Bunun yerine yeni bir değer döndürürler.
``` JavaScript
const greet = name => {
  return "Merhaba" + name;
};

const greetAll = names => {
  return names.map(greet);
};
```

**14. Rest operatör nedir örnekle açıklayınız.**

Rest operatör, JavaScript'te bir fonksiyonun son parametresini, sınırsız sayıda parametre olarak kabul etmesini sağlayan bir operatördür. Rest operatörünün sembolü, üç noktadır ( ... ).
Örneğin, aşağıdaki kod bloğunda sum() fonksiyonu, ...numbers parametresini kullanarak sınırsız sayıda sayı alır:

```JavaScript
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```
Bu kod bloğunda, sum() fonksiyonu, 1, 2, 3, 4, 5 sayılarını ...numbers parametresi aracılığıyla alır. Ardından, bu sayıları toplama işlemi gerçekleştirir ve sonucu döndürür.

**15. Object destructuring nedir örnekle açıklayınız.**

Object destructuring, JavaScript'te bir nesnenin özelliklerini, değişkenlere veya ifadelere atamak için kullanılan bir özelliktir. Object destructuring, kodu daha okunaklı ve sürdürülebilir hale getirmenin kullanışlı bir yoludur. Birkaç örnek vermek istersek:

**Temel Object Destructuring:**
```JavaScript
const person = { name: "John", age: 30, city: "New York" };

// Object destructuring kullanarak özellikleri değişkenlere atama
const { name, age, city } = person;

console.log(name); // John
console.log(age); // 30
console.log(city); // New York

```
Yukarıdaki örnekte, person nesnesinin özellikleri name, age, ve city adlı değişkenlere destructuring yöntemiyle atanmıştır.

**Default Değerler ile Object Destructuring:**
```JavaScript
const person = { name: "John", age: 30 };

// Default değerler ile object destructuring
const { name, age, city = "Unknown" } = person;

console.log(name); // John
console.log(age); // 30
console.log(city); // Unknown

```
Burada, city özelliği person nesnesinde tanımlı olmadığı için default değer olan "Unknown" atanmıştır.

**Rest Operatörü ile Object Destructuring:**
```JavaScript
const person = { name: "John", age: 30, city: "New York", country: "USA" };

// Rest operatörü ile object destructuring
const { name, age, ...address } = person;

console.log(name); // John
console.log(age); // 30
console.log(address); // { city: "New York", country: "USA" }

```
Burada, ...address ile city ve country özellikleri address adlı bir nesne içinde toplanmıştır.

**16. 2 elemanlı bir objeyi 6 farklı şekilde oluşturunuz.**
JavaScript'te bir objeyi birkaç farklı şekilde oluşturabilirsiniz. İki elemanlı bir objeyi altı farklı şekilde oluşturma örnekleri aşağıdaki gibidir:

**1. Obje Literal Notasyonu:**
```JavaScript
let obj1 = { key1: 'value1', key2: 'value2' };
```
**2. Object Constructor Kullanarak:**
```JavaScript
let obj2 = new Object();
obj2.key1 = 'value1';
obj2.key2 = 'value2';
```
**3. Object.create() Metodu Kullanarak:**
```JavaScript
let obj3 = Object.create(null);
obj3.key1 = 'value1';
obj3.key2 = 'value2';
```
**4. Object.assign() Metodu Kullanarak:**
```JavaScript
let obj4 = Object.assign({}, { key1: 'value1', key2: 'value2' });
```
**5.Objeyi Destructuring Kullanarak Oluşturmak:**
```JavaScript
let { key1, key2 } = { key1: 'value1', key2: 'value2' };
let obj5 = { key1, key2 };
```
**6. Yapıcı Fonksiyon (Constructor) ile Oluşturmak:**
```JavaScript
function MyObject(key1, key2) {
    this.key1 = key1;
    this.key2 = key2;
}

let obj6 = new MyObject('value1', 'value2');
```

**17. 2 elemanlı bir objenin key ve value değerlerinin karakter sayısı ile 2 farklı döngü methodu kullanarak yeni bir obje oluşturunuz.**

**1.  For...of döngüsü ve Object.entries() methodu kullanarak:**
```JavaScript
const obj = {
  key1: "Değer1",
  key2: "Değer2",
};

const yeniObj = {};
for (const [anahtar, değer] of Object.entries(obj)) {
  yeniObj[anahtar] = değer.length;
}

console.log(yeniObj); // { key1: 6, key2: 7 }

```
Bu yöntemde, Object.entries() metodu kullanılarak objenin key ve value değerlerinin bir dizi olarak döndürülmesi sağlanır. Daha sonra, for döngüsü ile bu dizi üzerinde iterasyon yapılarak key ve value değerlerinin karakter sayıları yeni objenin ilgili key değerlerine atanır.

**2. for...in döngüsüyle:**
```JavaScript
const obj = {
  key1: "value2",
};

const newObj = {};

for (const key in obj) {
  newObj[key] = obj[key].length;
}

console.log(newObj); // { key1: 6, key2: 7 }
```
Bu kod bloğunda, for döngüsü kullanarak, obj nesnesinin key-value çiftlerini dolaşıyoruz. Her bir key için, obj[key] değerinin uzunluğunu alarak, yeni bir nesnenin newObj[key] key'ine atıyoruz.

**18. Cookie, local storage ve session storage farkını tablo yapınız.**
|  Özellik | Cookie     | Local Storage      | Session Storage    |
| ---------|:-------:| --------:| --------:|
| Depolama yeri        | Kullanıcının tarayıcısında  | Kullanıcının tarayıcısında        |  Kullanıcının tarayıcısında        |          
| Depolama süresi        | Kullanıcı tarafından ayarlanabilir   | Kullanıcı tarafından ayarlanabilir       | Tarayıcı kapatıldığında silinir         |
| Boyut sınırı       | 4 KB     | 40 MB     |  5 MB        |
| Erişim       | Tüm siteler tarafından erişilebilir     | Sadece aynı site tarafından erişilebilir	   |  Sadece aynı site tarafından erişilebilir        |
| Güvenlik        | Düşük     | Orta    | Orta         |
| Kullanım alanları      | Kullanıcı oturumları, çerez tabanlı reklamlar     | Hesap oturumları, alışveriş sepetleri, kullanıcı tercihleri     | Kullanıcı oturumları         |

**19. Asenkron ve Senkron işlem farkı nedir?**

Asenkron (asynchronous) ve senkron (synchronous) işlemler, programların ve uygulamaların nasıl çalıştığına dair iki temel yaklaşımı temsil eder.

**Senkron İşlem (Synchronous):**

- Senkron işlem, işlemlerin sırasıyla ve adım adım gerçekleştiği bir yaklaşımı ifade eder.
- Bir işlemin tamamlanması beklenir ve ardından bir sonraki işlem başlatılır.
- Senkron işlemler, işlemlerin birbirine bağımlı olduğu durumlar ve belirli bir sıra gerektiren durumlar için kullanışlıdır.
- Örneğin, bir dosyanın okunması tamamlanmadan, dosya içeriğinin işlenmesine geçilemez.

**Asenkron İşlem (Asynchronous):**

- Asenkron işlem, işlemlerin sırasıyla beklenmeden, aynı anda veya birbirinden bağımsız olarak gerçekleşebileceği bir yaklaşımı ifade eder.
- Bir işlem tamamlanana kadar beklenmez ve diğer işlemler devam eder.
- Asenkron işlemler, özellikle ağ çağrıları, dosya okuma/yazma, zamanlayıcılar gibi uzun süren işlemler veya kullanıcı etkileşimine cevap verme gibi durumlar için kullanışlıdır.
- JavaScript'te, asenkron işlemleri genellikle callback fonksiyonları, Promises (Vaadler), ve async/await yapısı ile yönetiriz.

**20. Promise nedir ve neden ihtiyaç duyarız?**
Promise'ler, JavaScript'te asenkron işlemleri daha düzenli ve yönetilebilir hale getirmek için kullanılan bir yapıdır. Promise, bir işlemin sonucunu temsil eden bir nesnedir ve bu işlem başarılı bir şekilde tamamlandığında (çözüldüğünde) veya hata verdiğinde (reddedildiğinde) bir geri çağrı işlevi çağırır.

Promise nesnesi genellikle üç temel durumu temsil eder:

Bekleme (Pending): İşlem henüz tamamlanmamıştır.
Çözüldü (Resolved): İşlem başarılı bir şekilde tamamlandı ve sonuç alındı.
Reddedildi (Rejected): İşlemde bir hata oluştu ve sonuç alınamadı.

## Çıktı Soruları
**1. Aşağıdaki kodun çıktısı nedir? Nedenini açıklayınız.**

```JavaScript
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise
.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});
```
Çıktı:

```
Error 1
Success 4
```
job fonksiyonu bir Promise döndürmektedir ve bu promise hemen reddedilmektedir (reject).

İlk then bloğu, bir önceki promise başarılı olduğunda çalışır, ancak burada promise başarılı değil, reddedilmiş (rejected) durumda olduğu için bu blok atlanır.

Ardından gelen ikinci ve üçüncü then bloğu da, bir önceki then bloğu gibi bir önceki promise'den değil, ondan önceki rejected durumdan sonra gelen bir yeni promise'den türetilmiştir. Bu nedenle, bu bloklar da çalışmaz ve atlanır.

Ancak, ardından gelen catch bloğu, bir önceki promise reddedildiğinde çalışır ve 'Error 1' çıktısını verir.

Sonraki then bloğu, bir önceki catch bloğundan sonra gelir ve burada başka bir promise bulunmamaktadır. Bu nedenle, bu blok direkt çalışır ve 'Success 4' çıktısını verir.

**2. Aşağıdaki kodun çıktısı nedir? Nedenini açıklayınız.**

```JavaScript
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        }       
        else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
.then(function(data) {
    console.log(data);
    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }
    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);
    return job(false);
})

.then(function(data) {
    console.log(data);
    return job(true);
})

.catch(function(error) {
    console.log(error);
    return 'Error caught';
})

.then(function(data) {
    console.log(data);
    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});
```
Çıktı:

```
success
Defeat
error
Error caught
Success: test
```

job fonksiyonu true ile çağrıldığı için, bu fonksiyon bir Promise döndürür ve bu promise resolve durumunda 'success' değeriyle çözülür.

İlk .then() yöntemi, data parametresi olarak success değerini alır. Bu değer, konsola yazdırılır ve ardından job(true) çağrılarak başka bir Promise döndürülür.

İkinci then bloğu, bir önceki then bloğundan gelen promise başarılı olduğunda çalışır ve data parametresi olarak victory değerini bekler. data değeri victory değerine eşit değilse, bir Defeat hatası fırlatılır. Bu hata, .catch() yöntemi tarafından yakalanır.

catch bloğu, bir önceki then bloğundan gelen hatayı ele alır ve 'Defeat' çıktısını verir. Daha sonra job(false) fonksiyonunu çağırarak yeni bir promise döndürür.

Dördüncü catch bloğu, bir önceki then bloğundan gelen promise reddedildiğinde çalışır ve 'error' çıktısını verir. Daha sonra 'Error caught' string'ini içeren bir resolved promise döndürür.

Beşinci then bloğu, bir önceki catch bloğundan gelen promise başarılı bir şekilde çözümlendiğinde çalışır ve 'Error caught' çıktısını verir. Daha sonra yeni bir Error nesnesi içeren bir resolved promise döndürür.

Altıncı then bloğu, bir önceki then bloğundan gelen promise başarılı bir şekilde çözümlendiğinde çalışır. Ancak, bu then bloğunda, bir önceki then bloğundan gelen değer bir hata nesnesi olduğu için çalışır ve 'Success: test' çıktısını verir.