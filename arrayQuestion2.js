
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];

// Yinelenen sayıları bulma
const yinelenenSayilar = arr.filter((value, index, self) => self.indexOf(value) !== index);
console.log("Yinelenen Sayılar:", yinelenenSayilar);

// Yinelenen sayıları silip yeni bir array oluşturma (Method 1)
const yeniArray1 = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log("Yinelenen Sayılar Silindi (Method 1):", yeniArray1);

// Yinelenen sayıları silip yeni bir array oluşturma (Method 2)
const yeniArray2 = [...new Set(arr)];
console.log("Yinelenen Sayılar Silindi (Method 2):", yeniArray2);

// En yüksek ve en düşük değeri bulma (Method 1)
const enYuksekDeger1 = Math.max(...arr);
const enDusukDeger1 = Math.min(...arr);
console.log("En Yüksek Değer (Method 1):", enYuksekDeger1);
console.log("En Düşük Değer (Method 1):", enDusukDeger1);

// En yüksek ve en düşük değeri bulma (Method 2)
const enYuksekDeger2 = arr.reduce((max, value) => (value > max ? value : max), arr[0]);
const enDusukDeger2 = arr.reduce((min, value) => (value < min ? value : min), arr[0]);
console.log("En Yüksek Değer (Method 2):", enYuksekDeger2);
console.log("En Düşük Değer (Method 2):", enDusukDeger2);



