<?php 
  $req = $_SERVER['REQUEST_URI'];
?>
<nav class="nav">
      <div class="nav__item"><a class="nav__link" href="/">Главная</a></div>
      <div class="nav__item<?=($req=='/about.php') ? ' active' : ''?>"><a class="nav__link" href="/about.php">О компании</a></div>
      <div class="nav__item"><a class="nav__link" href="/about.php#services-anchor">Направления</a></div>
      <div class="nav__item<?=($req=='/docs.php') ? ' active' : ''?>"><a class="nav__link" href="/docs.php">Документы</a></div>
      <div class="nav__item<?=($req=='/reviews.php') ? ' active' : ''?>"><a class="nav__link" href="/reviews.php">Отзывы</a></div>
      <div class="nav__item<?=($req=='/vacancies.php') ? ' active' : ''?>"><a class="nav__link" href="/vacancies.php">Вакансии</a></div>
      <div class="nav__item<?=($req=='/contacts.php') ? ' active' : ''?>"><a class="nav__link" href="/contacts.php">Контакты</a></div>
      <div class="nav__item nav__line"></div>
      <!-- <div class="nav__item"><a class="nav__link nav__page <?=($req=='/')?'nav__page--current' : ''?>" href="/">01</a></div>
      <div class="nav__item"><a class="nav__link nav__page <?=($req=='/about.php')?'nav__page--current' : ''?>" href="/about.php">02</a></div>
      <div class="nav__item"><a class="nav__link nav__page <?=($req=='/fields.php')?'nav__page--current' : ''?>" href="/fields.php">03</a></div>
      <div class="nav__item"><a class="nav__link nav__page <?=($req=='/docs.php')?'nav__page--current' : ''?>" href="/docs.php">04</a></div>
      <div class="nav__item"><a class="nav__link nav__page <?=($req=='/contacts.php')?'nav__page--current' : ''?>" href="/contacts.php">05</a></div> -->
    </nav>
    <div class="menu" id="menu">
      <div class="menu__content">
        <div class="menu__nav menu-nav">
          <div class="menu-nav__item"><a class="menu-nav__link" href="http://site.kedr.group">Вход</a></div>
          <div class="menu-nav__item"><a class="menu-nav__link <?=($req=='/')?'menu-nav__link--current' : ''?>" href="/">Главная страница</a></div>
          <div class="menu-nav__item"><a class="menu-nav__link <?=($req=='/about.php')?'menu-nav__link--current' : ''?>" href="/about.php">О компании</a></div>
          <div class="menu-nav__item"><a class="menu-nav__link with_dropdown <?=($req=='/fields.php')?'menu-nav__link--current' : ''?>" href="#">Направления</a>
            <div class="menu-nav__subnav menu-subnav">
              <div class="menu-subnav__item"><a href="/training.php">Обучение и повышение квалификации</a></div>
              <div class="menu-subnav__item"><a href="/physical-security.php">Физическая охрана</a></div>
              <div class="menu-subnav__item"><a href="/transport-safety.php">Транспортная безопасность</a></div>
              <div class="menu-subnav__item"><a href="https://pult.kedr.group">Пультовая охрана</a></div>
              <div class="menu-subnav__item"><a href="/video-monitoring.php">Удаленный видеомониторинг</a></div>
              <div class="menu-subnav__item"><a href="/escort.php">Сопровождение</a></div>
              <div class="menu-subnav__item"><a href="/security-equipment.php">Технические средства охраны</a></div>
              <div class="menu-subnav__item"><a href="/polygraph.php">Проверка на полиграфе</a></div>
            </div>
          </div>
          <div class="menu-nav__item"><a class="menu-nav__link <?=($req=='/docs.php')?'menu-nav__link--current' : ''?>" href="/docs.php">Документы</a></div>
          <div class="menu-nav__item"><a class="menu-nav__link <?=($req=='/reviews.php')?'menu-nav__link--current' : ''?>" href="/reviews.php">Отзывы</a></div>
          <div class="menu-nav__item"><a class="menu-nav__link <?=($req=='/vacancies.php')?'menu-nav__link--current' : ''?>" href="/vacancies.php">Вакансии</a></div>
          <div class="menu-nav__item"><a class="menu-nav__link <?=($req=='/contacts.php')?'menu-nav__link--current' : ''?>" href="/contacts.php">Контакты</a></div>
        </div>
        <div class="menu__address">680026 г. Хабаровск, ул. Доватора 5б <br/>info@kedr.group <br/> 8 (4212) 68-38-08 </div>
        <div class="menu__feedback feedback">
          <div class="feedback__title">Обратная связь</div>
          <form class="feedback__form" name="feedback-form" method="post">
            <fieldset class="fieldset">
              <label class="for-input"><span class="for-input__name">Имя</span>
                <input type="text" name="feedback[name]" placeholder="Сильвестр"/>
              </label>
              <label class="for-input"><span class="for-input__name">Организация</span>
                <input type="text" name="feedback[organization]" placeholder="ООО “Грейтвассер”"/>
              </label>
              <label class="for-input"><span class="for-input__name">Телефон</span>
                <input type="text" name="feedback[phone]" placeholder="8 (999) 123-45-67"/>
              </label>
              <label class="for-input"><span class="for-input__name">E-mail</span>
                <input type="email" name="feedback[email]" placeholder="example@example.com"/>
              </label>
              <label class="for-input"><span class="for-input__name">Запрос</span>
                <textarea name="feedback[text]" placeholder="Текст запроса..."></textarea>
              </label>
            </fieldset>
            <button class="btn btn--fullwidth" type="submit" onclick="ym(62114872,'reachGoal','feedback'); ga('send', 'event', 'form', 'submit', 'feedback');">Отправить</button>
            <div class="feedback__success umsg">
              <div class="umsg__logo">
                <img src="/images/kedr-logo.png" alt="Логотип КЕДР">
              </div>
              <div class="umsg__title">Спасибо!</div>
              <div class="umsg__subtitle">
                Ваша заявка принята.<br>
                В ближайшее время наш специалист свяжется с Вами.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <header class="header"><a class="header__hamburger hamburger js-hamburger" href="#"><img class="hamburger__icon" src="./images/hamburger.svg" alt=""><img class="hamburger__icon hamburger__icon--hidden" src="./images/cross.svg" alt=""></a>
      <div class="header__info" id="headerInfo">
        <address class="header-info__item">680026, г. Хабаровск, ул. Доватора 5б</address><a class="header-info__item email_button" href="mailto:info@kedr.group">info@kedr.group</a><a class="header-info__item" href="tel:84212683808">8 (4212) 68-38-08</a>
      </div><a class="header__logo" href="/"><img src="./images/logo.svg" alt="Логотип"></a>
    </header>