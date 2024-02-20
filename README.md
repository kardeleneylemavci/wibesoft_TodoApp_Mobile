# wibesoft_TodoApp_Mobile
## Todo Uygulaması

Bu uygulama, basit bir yapılacaklar listesi (todo list) uygulamasıdır. Kullanıcılar, yapacakları işleri listeye ekleyebilir, işleri tamamlandıkça işaretleyebilir ve istedikleri zaman listeden silebilirler. Ayrıca her iş için bir ilerleme çubuğu ayarlanabilir.

## Başlangıç

Uygulamayı kullanmak için Expo Go uygulamasını kullanarak bir iOS veya Android cihazda çalıştırabilirsiniz. Aşağıdaki adımları takip ederek uygulamayı çalıştırabilirsiniz.

1. Bu projeyi klonlayın:

   ```bash
   git clone <repo-url>

Tabii, aşağıdaki gibi README.md dosyasını tüm açıklamaları Markdown formatında verebilirim:

markdown
Copy code
# Todo Uygulaması

Bu uygulama, basit bir yapılacaklar listesi (todo list) uygulamasıdır. Kullanıcılar, yapacakları işleri listeye ekleyebilir, işleri tamamlandıkça işaretleyebilir ve istedikleri zaman listeden silebilirler. Ayrıca her iş için bir ilerleme çubuğu ayarlanabilir.

## Başlangıç

Uygulamayı kullanmak için Expo Go uygulamasını kullanarak bir iOS veya Android cihazda çalıştırabilirsiniz. Aşağıdaki adımları takip ederek uygulamayı çalıştırabilirsiniz.

1. Bu projeyi klonlayın:

   ```bash
   git clone <repo-url>

2. Proje dizinine gidin:

   ```bash
   cd <project-directory>


3. Gerekli paketleri yükleyin:

   ```bash
   npm install

4.Expo kullanarak projeyi başlatın:

    ```bash
    npm start

5.QR kodunu taramak için Expo Go uygulamasını kullanarak bir iOS veya Android cihazda uygulamayı görüntüleyin veya bir emülatör kullanın.

## Kullanım

Uygulama başlatıldığında, ana ekranda bir "TODO APP" başlığı ve bir boş yapılacaklar listesi görüntülenir. Yeni bir yapılacak eklemek için alt kısımda yer alan metin giriş kutusuna bir metin yazın ve "Ekle" düğmesine tıklayın veya klavyeden "Enter" tuşuna basın.

- Yapılacakları tamamlandıkça, yanındaki onay işaretine tıklayarak işleri işaretleyebilirsiniz. İşaretlenen işler, çizili olarak gösterilir.
- Her işin yanında, ilerleme çubuğunu ayarlamak için bir metin giriş kutusu bulunur. İlerleme çubuğu 0'dan 100'e kadar bir sayı girerek ayarlanabilir.
- İşlerin yanındaki "X" düğmesine tıklayarak bir işi listeden silebilirsiniz.

## Proje Yapısı

- **App.js**: Ana uygulama bileşeni. Yapılacakları listeler ve temel işlevleri sağlar.
- **AddTodo.js**: Yeni bir yapılacak eklemek için kullanılan bileşen.
- **TodoItem.js**: Her bir yapılacak öğesini temsil eden bileşen. İşleri işaretlemek ve silmek için kullanılır.
- **TodoList.js**: Yapılacaklar listesini görüntülemek için kullanılan bileşen.

## Geliştirme

Uygulama, React Native ve Expo framework'ü kullanılarak geliştirilmiştir. İlgili dosyaları düzenleyerek veya yeni özellikler ekleyerek geliştirmeye devam edebilirsiniz.

## Katkıda Bulunma

Katkıda bulunmak istiyorsanız, açık bir GitHub issues oluşturabilir veya bir pull isteği gönderebilirsiniz. Katkılarınızı memnuniyetle karşılarız.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakın.
