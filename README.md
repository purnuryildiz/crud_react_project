<h1>CRUD APP</h1>
<P>Create Read Update Delete</P>

<ul>
  <li>
    Projeye bootstrap i dahil et
    index.html e bootstrap cdn i ekle
  </li>
  <li>
    1-Yeni eklenecek elemani almak için form oluştur :
     -Form içerisinden gelen verileri al ve state a aktar,
     -Ekle butonuna basildiği  anda forma girilen bilgilerden yeni obje oluştur.-Oluşturulan objenin değerleri : tarih, kitapismi, id, okunduMu 
     -Oluşan objeyi kitaplar adindaki bir diziye aktar.(Bunu yapmamizin nedeni birden çok elemani listelemek için en kolay yol bunlari bir dizinin içerisinde tutmak.)
     -Obje oluşturulduktan sonra inputu sifirla
  </li>
  <li>
    2-Books state'inde tutulan kitaplari al ve map metodu ile listele(listeleden kasit ekrana basmak)
    - eğer state boşsa ekrana "henuz kitap eklenmedi" yaz
    - BookCard bileşenine kitap bilgilerini prop olarak gönder
    - BookCard bileşeninin kitapla ilgili bütün özelliklerini göster
  </li>
  <li>
    3-Kitap Silme: (Silmenin projedeki karsiliği ,silinecek şeyin kitaplar dizisinden çikarilmasi,yani dizi üzerinde bir işlem yapilacak)(Bu tarz cikarma,filtreleme gibi işlemlerin neredeyse tamami içerisindeki elemanin "id" sine göre yapilmali.)
    - Herhangi bir kitabin sil butonuna butonuna basildiğinda ,calisan fonksiyona silinecek olanin id si gitsin.
    - Gelen "id" yi fonksiyon içerisine parametre olarak al ve silinecek "id" ye eşit olmayanlari al ve bir diziye aktar.
    - Oluşan diziyi bir state a aktar.
  </li>
  <li>
   4- Kitabı okundu olarak işaretle
   -Okundu butonuna basınca çalışan fonksiyona kitabı gönder
   -Kitabın isRead değerini tersine çevir
  - Dizi içerisinde değişsecek olan elemanı bul 
  - o elemanı çıkar ve yerine yenisini ekle
  </li>
  <li>
  5-Düzenleme İşlemini yap:
  -Düzenleme butonuna tıklanıldığında ekrana bir modal çıksın 
  -ve düzenlenecek kitabı app.jse e aktarsın (editItem)
  -Modalda : Kitap ismini değiiştirmek için bir input 
  - input her değiştiğinde editItem değişkenini günceller ve app.jse e aktarır.
  -cancel butonu > modalı kapatır
  -save butonu > input içeriğini alır ve state i günceller.(  Ekrana bastığımız herhangi bir şeyi değiştirmek istiyorsak , yapmamız gereken ilk ve tek şey onun state ini değiştirmek) app.js de bulunan handleEditBook çalıştırır.
  -çalışan fonksiyon diziden eski elemanı çıkarır yerine yenisini koyar.
  - kitabı güncellerlen 4.görev deki adımları tekrarla.
  </li> 
</ul>
# crud_react_project
