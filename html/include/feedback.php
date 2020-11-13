<div class="panel__item panel-item panel-item-direction menu__feedback feedback">
  <div class="panel-item__title">Свяжитесь с нами, заполнив удобную форму ниже</div>
  <form class="feedback__form" name="feedback-form" method="post">
    <fieldset class="fieldset">
      <div class="three-row">
        <label class="for-input three-col"><span class="for-input__name">Имя</span>
          <input type="text" name="feedback[name]" placeholder="Введите ваше имя"/>
        </label>
        <label class="for-input three-col"><span class="for-input__name">Телефон</span>
          <input type="text" name="feedback[phone]" placeholder="+7 (999) 999-99-99"/>
        </label>
        <label class="for-input three-col"><span class="for-input__name">E-mail</span>
          <input type="email" name="feedback[email]" placeholder="example@example.ru"/>
        </label>
      </div>
      <label class="for-input"><span class="for-input__name">Название организации</span>
        <input type="text" name="feedback[organization]" placeholder="ООО “Грейтвассер”"/>
      </label>
      <label class="for-input"><span class="for-input__name">Ваш запрос</span>
        <textarea name="feedback[text]" placeholder="Поле для заполнения"></textarea>
      </label>
    </fieldset>
    <button class="btn btn--fullwidth" type="submit" onclick="ym(62114872,'reachGoal','lead'); ga('send', 'event', 'form', 'submit', 'lead');">Отправить</button>
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