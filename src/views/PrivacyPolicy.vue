<template>
  <div class="privacy-page">
    <NavMenu class="nav" />
    
    <ContentTitle 
      :title="pageTitle" 
      :description="pageDescription" 
      class="content-title"
    />

    <div class="privacy-content">
      <section class="privacy-section">
  <h2>1. Общие положения</h2>
  <p>Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей сайта «Яблоко нартов» (далее — Сайт). Используя Сайт, вы соглашаетесь с условиями данной Политики.</p>

  <h2>2. Какие данные мы собираем</h2>
  <ul>
    <li>Контактные данные: имя, адрес электронной почты, номер телефона</li>
    <li>Данные для входа: логин, хэш пароля</li>
    <li>Технические данные: IP-адрес, cookie, информация о браузере и устройстве</li>
    <li>Демографическая информация (если предоставлена добровольно)</li>
  </ul>

  <h2>3. Цели обработки данных</h2>
  <ul>
    <li>Предоставление услуг, бронирование поездок и экскурсий</li>
    <li>Обработка обращений пользователей</li>
    <li>Улучшение работы Сайта, его функциональности и контента</li>
    <li>Соблюдение требований законодательства</li>
    <li>Маркетинговая рассылка (при наличии согласия)</li>
  </ul>

  <h2>4. Правовая основа обработки</h2>
  <ul>
    <li>Ваше согласие (в соответствии со ст. 6 GDPR и ст. 6 152-ФЗ)</li>
    <li>Необходимость выполнения договора или оказания услуг</li>
    <li>Законные интересы компании, не нарушающие права субъекта данных</li>
  </ul>

  <h2>5. Хранение и защита данных</h2>
  <p>Персональные данные хранятся в защищённых системах в течение срока, необходимого для целей обработки, но не более 5 лет, если иное не предусмотрено законодательством.</p>
  <p>Мы применяем технические и организационные меры для защиты информации от утраты, несанкционированного доступа, изменения или раскрытия.</p>

  <h2>6. Передача данных третьим лицам</h2>
  <p>Мы не передаём персональные данные третьим лицам, за исключением случаев:</p>
  <ul>
    <li>Если это необходимо для предоставления услуг (например, платёжные системы)</li>
    <li>Если этого требует закон</li>
    <li>Если пользователь дал явное согласие</li>
  </ul>

  <h2>7. Права пользователя</h2>
  <p>Вы имеете право:</p>
  <ul>
    <li>Запрашивать информацию о своих данных</li>
    <li>Требовать их исправления, удаления или блокировки</li>
    <li>Отозвать согласие на обработку</li>
    <li>Подать жалобу в орган по защите персональных данных</li>
  </ul>

  <h2>8. Использование файлов cookie</h2>
  <p>Сайт использует cookie для улучшения работы и анализа поведения пользователей. Вы можете отключить cookie в настройках браузера, но это может повлиять на корректную работу Сайта.</p>

  <h2>9. Контакты</h2>
  <p>По вопросам, связанным с обработкой персональных данных, вы можете обратиться по email: <strong>privacy@yablokonartov.ru</strong></p>
</section>

    </div>

    <Footer />
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import Footer from '@/components/main-content/Footer.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';

const pageTitle = 'Политика конфиденциальности';
const pageDescription = 'Как мы защищаем ваши данные';
</script>

<style scoped>
.privacy-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 1400px;
  margin: 0 auto;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
}

.privacy-content {
  flex: 1;
  padding: 0 20px;
}

.privacy-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
  line-height: 1.7;
}

.privacy-section h2 {
  font-size: 1.5rem;
  color: #1D68F0;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}

.privacy-section p {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .privacy-section {
    padding: 1.5rem 0 3rem;
  }
  
  .privacy-section h2 {
    font-size: 1.3rem;
    margin: 2rem 0 0.8rem;
  }
}
</style>