document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        // Hamburger ikonasını dəyişdirmək
        this.classList.toggle('active');
        
        // Menyunun görünürlüyünü dəyişdirmək
        navMenu.classList.toggle('active');
    });
    
    const translations = {
        az: {
            "home": "Ana Səhifə",
            "about": "Haqqımızda",
            "services": "Xidmətlər",
            "products": "Məhsullar",
            "contact": "Əlaqə",
            "hero-title-1": "Eviniz üçün peşəkar",
            "hero-title-2": "təmir",
            "hero-title-3": "və",
            "hero-title-4": "təmizlik",
            "hero-title-5": "xidmətləri",
            "hero-subtitle": "HomeNova ilə evinizi yeniləyin, təmiz və rahat yaşayış tərzini qoruyun.",
            "our-services": "Xidmətlərimiz",
            "contact-us": "Bizimlə Əlaqə",
            "who-we-are": "Biz Kimik?",
            "about-description": "HomeNova olaraq 10 ildən artıq təcrübəmizlə təmir və təmizlik sahəsində peşəkar xidmətlər təqdim edirik. Müştərilərimizin tələblərinə uyğun yüksək keyfiyyətli iş görmək bizim prioritetimizdir.",
            "why-choose-us": "Niyə Bizi Seçməlisiniz?",
            "professional-team": "Peşəkar komanda",
            "quality-materials": "Keyfiyyətli materiallar",
            "affordable-prices": "Sərfəli qiymətlər",
            "guaranteed-service": "Zəmanətli xidmət",
            "customer-satisfaction": "Müştəri məmnuniyyəti",
            "renovation": "Təmir işləri",
            "renovation-desc": "Mənzil və ofis sahələrinin peşəkar təmiri, dizayn və planlaşdırma xidmətləri.",
            "cleaning": "Təmizlik",
            "cleaning-desc": "Ev, ofis və sənaye obyektlərinin cari və əsaslı təmizlik xidmətləri.",
            "furniture": "Mebel yığımı",
            "furniture-desc": "İstənilən tip mebelin peşəkar yığılması və quraşdırılması.",
            "plumbing": "Santexnika",
            "plumbing-desc": "Su və kanalizasiya sistemlərinin quraşdırılması və təmiri.",
            "cleaning-products": "Təmizlik vasitələri",
            "cleaning-products-desc": "Yüksək keyfiyyətli ekoloji təmizlik məhsulları.",
            "paint-materials": "Rəng materialları",
            "paint-materials-desc": "Müxtəlif rəng və kafel üçün keyfiyyətli materiallar.",
            "tools": "Alətlər",
            "tools-desc": "Peşəkar tikinti və təmir alətləri.",
            "plumbing-products": "Santexnika məhsulları",
            "plumbing-products-desc": "Yüksək keyfiyyətli santexnika avadanlıqları.",
            "price-from": "Qiymət: ",
            "view-details": "Ətraflı",
            "address": "Ünvan",
            "phone": "Telefon",
            "email": "E-poçt",
            "working-hours": "İş saatları",
            "working-hours-value": "Bazar ertəsi - Şənbə: 09:00 - 18:00",
            "send-message": "Bizə mesaj göndərin",
            "name-placeholder": "Adınız və Soyadınız",
            "email-placeholder": "E-poçt ünvanınız",
            "phone-placeholder": "Telefon nömrəniz",
            "message-placeholder": "Mesajınız",
            "send": "Göndər",
            "quick-links": "Sürətli keçidlər",
            "follow-us": "Bizi izləyin",
            "footer-description": "Təmir və təmizlik xidmətlərində peşəkar həllər.",
            "rights-reserved": "Bütün hüquqlar qorunur."
        },
        en: {
            "home": "Home",
            "about": "About",
            "services": "Services",
            "products": "Products",
            "contact": "Contact",
            "hero-title-1": "Professional",
            "hero-title-2": "renovation",
            "hero-title-3": "and",
            "hero-title-4": "cleaning",
            "hero-title-5": "services for your home",
            "hero-subtitle": "Renew your home with HomeNova, maintain a clean and comfortable lifestyle.",
            "our-services": "Our Services",
            "contact-us": "Contact Us",
            "who-we-are": "Who We Are?",
            "about-description": "At HomeNova, we provide professional services in renovation and cleaning with over 10 years of experience. Delivering high-quality work that meets our customers' requirements is our priority.",
            "why-choose-us": "Why Choose Us?",
            "professional-team": "Professional team",
            "quality-materials": "Quality materials",
            "affordable-prices": "Affordable prices",
            "guaranteed-service": "Guaranteed service",
            "customer-satisfaction": "Customer satisfaction",
            "renovation": "Renovation",
            "renovation-desc": "Professional renovation, design and planning services for apartments and offices.",
            "cleaning": "Cleaning",
            "cleaning-desc": "Regular and deep cleaning services for homes, offices, and industrial facilities.",
            "furniture": "Furniture Assembly",
            "furniture-desc": "Professional assembly and installation of any type of furniture.",
            "plumbing": "Plumbing",
            "plumbing-desc": "Installation and repair of water and sewage systems.",
            "cleaning-products": "Cleaning Products",
            "cleaning-products-desc": "High-quality ecological cleaning products.",
            "paint-materials": "Paint Materials",
            "paint-materials-desc": "Quality materials for various paints and tiles.",
            "tools": "Tools",
            "tools-desc": "Professional construction and repair tools.",
            "plumbing-products": "Plumbing Products",
            "plumbing-products-desc": "High-quality plumbing equipment.",
            "price-from": "Price from: ",
            "view-details": "View Details",
            "address": "Address",
            "phone": "Phone",
            "email": "Email",
            "working-hours": "Working Hours",
            "working-hours-value": "Monday - Saturday: 09:00 - 18:00",
            "send-message": "Send us a message",
            "name-placeholder": "Your Name and Surname",
            "email-placeholder": "Your Email",
            "phone-placeholder": "Your Phone Number",
            "message-placeholder": "Your Message",
            "send": "Send",
            "quick-links": "Quick Links",
            "follow-us": "Follow Us",
            "footer-description": "Professional solutions in renovation and cleaning services.",
            "rights-reserved": "All rights reserved."
        },
        ru: {
            "home": "Главная",
            "about": "О нас",
            "services": "Услуги",
            "products": "Продукты",
            "contact": "Контакты",
            "hero-title-1": "Профессиональные услуги",
            "hero-title-2": "ремонта",
            "hero-title-3": "и",
            "hero-title-4": "уборки",
            "hero-title-5": "для вашего дома",
            "hero-subtitle": "Обновите свой дом с HomeNova, поддерживайте чистый и комфортный образ жизни.",
            "our-services": "Наши Услуги",
            "contact-us": "Свяжитесь с Нами",
            "who-we-are": "Кто Мы?",
            "about-description": "В HomeNova мы предоставляем профессиональные услуги по ремонту и уборке с более чем 10-летним опытом. Наш приоритет – выполнение высококачественных работ, отвечающих требованиям наших клиентов.",
            "why-choose-us": "Почему Выбирают Нас?",
            "professional-team": "Профессиональная команда",
            "quality-materials": "Качественные материалы",
            "affordable-prices": "Доступные цены",
            "guaranteed-service": "Гарантированное обслуживание",
            "customer-satisfaction": "Удовлетворенность клиентов",
            "renovation": "Ремонт",
            "renovation-desc": "Профессиональные услуги по ремонту, дизайну и планированию для квартир и офисов.",
            "cleaning": "Уборка",
            "cleaning-desc": "Услуги регулярной и глубокой уборки домов, офисов и промышленных объектов.",
            "furniture": "Сборка мебели",
            "furniture-desc": "Профессиональная сборка и установка любых типов мебели.",
            "plumbing": "Сантехника",
            "plumbing-desc": "Установка и ремонт систем водоснабжения и канализации.",
            "cleaning-products": "Чистящие средства",
            "cleaning-products-desc": "Высококачественные экологические чистящие средства.",
            "paint-materials": "Материалы для покраски",
            "paint-materials-desc": "Качественные материалы для различных красок и плитки.",
            "tools": "Инструменты",
            "tools-desc": "Профессиональные инструменты для строительства и ремонта.",
            "plumbing-products": "Сантехнические изделия",
            "plumbing-products-desc": "Высококачественное сантехническое оборудование.",
            "price-from": "Цена от: ",
            "view-details": "Подробнее",
            "address": "Адрес",
            "phone": "Телефон",
            "email": "Эл. почта",
            "working-hours": "Рабочие часы",
            "working-hours-value": "Понедельник - Суббота: 09:00 - 18:00",
            "send-message": "Отправьте нам сообщение",
            "name-placeholder": "Ваше Имя и Фамилия",
            "email-placeholder": "Ваша Эл. почта",
            "phone-placeholder": "Ваш Номер Телефона",
            "message-placeholder": "Ваше Сообщение",
            "send": "Отправить",
            "quick-links": "Быстрые ссылки",
            "follow-us": "Следите за нами",
            "footer-description": "Профессиональные решения в услугах ремонта и уборки.",
            "rights-reserved": "Все права защищены."
        },
        tr: {
            "home": "Ana Sayfa",
            "about": "Hakkımızda",
            "services": "Hizmetler",
            "products": "Ürünler",
            "contact": "İletişim",
            "hero-title-1": "Eviniz için profesyonel",
            "hero-title-2": "tadilat",
            "hero-title-3": "ve",
            "hero-title-4": "temizlik",
            "hero-title-5": "hizmetleri",
            "hero-subtitle": "HomeNova ile evinizi yenileyin, temiz ve konforlu bir yaşam tarzını koruyun.",
            "our-services": "Hizmetlerimiz",
            "contact-us": "Bize Ulaşın",
            "who-we-are": "Biz Kimiz?",
            "about-description": "HomeNova olarak 10 yılı aşkın tecrübemizle tadilat ve temizlik alanında profesyonel hizmetler sunuyoruz. Müşterilerimizin ihtiyaçlarına uygun yüksek kaliteli iş yapmak önceliğimizdir.",
            "why-choose-us": "Neden Bizi Seçmelisiniz?",
            "professional-team": "Profesyonel ekip",
            "quality-materials": "Kaliteli malzemeler",
            "affordable-prices": "Uygun fiyatlar",
            "guaranteed-service": "Garantili hizmet",
            "customer-satisfaction": "Müşteri memnuniyeti",
            "renovation": "Tadilat İşleri",
            "renovation-desc": "Daire ve ofis alanları için profesyonel tadilat, tasarım ve planlama hizmetleri.",
            "cleaning": "Temizlik",
            "cleaning-desc": "Ev, ofis ve sanayi tesisleri için düzenli ve derinlemesine temizlik hizmetleri.",
            "furniture": "Mobilya Montajı",
            "furniture-desc": "Her türlü mobilyanın profesyonel montajı ve kurulumu.",
            "plumbing": "Sıhhi Tesisat",
            "plumbing-desc": "Su ve kanalizasyon sistemlerinin kurulumu ve onarımı.",
            "cleaning-products": "Temizlik Ürünleri",
            "cleaning-products-desc": "Yüksek kaliteli ekolojik temizlik ürünleri.",
            "paint-materials": "Boya Malzemeleri",
            "paint-materials-desc": "Çeşitli boyalar ve karolar için kaliteli malzemeler.",
            "tools": "Aletler",
            "tools-desc": "Profesyonel inşaat ve tadilat aletleri.",
            "plumbing-products": "Sıhhi Tesisat Ürünleri",
            "plumbing-products-desc": "Yüksek kaliteli sıhhi tesisat ekipmanları.",
            "price-from": "Fiyat: ",
            "view-details": "Detaylar",
            "address": "Adres",
            "phone": "Telefon",
            "email": "E-posta",
            "working-hours": "Çalışma Saatleri",
            "working-hours-value": "Pazartesi - Cumartesi: 09:00 - 18:00",
            "send-message": "Bize mesaj gönderin",
            "name-placeholder": "Adınız ve Soyadınız",
            "email-placeholder": "E-posta Adresiniz",
            "phone-placeholder": "Telefon Numaranız",
            "message-placeholder": "Mesajınız",
            "send": "Gönder",
            "quick-links": "Hızlı Bağlantılar",
            "follow-us": "Bizi Takip Edin",
            "footer-description": "Tadilat ve temizlik hizmetlerinde profesyonel çözümler.",
            "rights-reserved": "Tüm hakları saklıdır."
    }
};
function changeLanguage(lang) {
    console.log("Changing to language: " + lang);
    
    // Update elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active button
    document.querySelectorAll('.language-selector button').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });


    // Add click events to buttons
    document.querySelectorAll('.language-selector button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
    
        hamburger.addEventListener('click', function() {
            // Hamburger ikonasını dəyişdirmək
            this.classList.toggle('active');
            
            // Menyunun görünürlüyünü dəyişdirmək
            navMenu.classList.toggle('active');
        });
        
        // Menyu linkləri üçün hadisə dinləyicisi
        const navLinks = document.querySelectorAll('.nav-menu li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Menyunu bağlamaq
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    });
}
