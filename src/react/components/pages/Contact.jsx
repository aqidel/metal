import React, { useEffect } from 'react';

export default function Contact() {

  useEffect(() => {document.title = 'Контакты'}, []);

  return (
    <React.Fragment>
      <div id='contacts-main'>
        <h2>Свяжитесь с нами</h2>
        <h1>Позвоните нам или посетите наш офис</h1>
        <div id='contacts'>
          <h3>Наши контакты</h3>
          <h4>Наш офис находится по адресу: Республика Башкортостан, г. Уфа, ул. Рабкоров, д. 1/1</h4>
          <p>450103, г. Уфа, <br/>ул. Рабкоров, д. 1/1</p>
          <div className='divider'/>
          <p>+7 (937) 498-67-40</p>
          <div className='divider'/>
          <p>info@bmlom.ru</p>
        </div>
      </div>
      <iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3A805c1a04e0c77a31b0bb2b1631ca568f5019a844ca13797c577aea1a73cc613a&amp;source=constructor' width='100%' height='400' frameBorder='0'></iframe>
      <div id='faq'>
        <h1><b>Часто</b><br/> задаваемые вопросы</h1>
        <div id='faq-grid-container'>
          <div className='faq-grid-element'>
            <h3>Какие виды металла Вы покупаете?</h3>
            <p>
              Мы покупаем как черные, так и цветные металлы,
              ✓ Алюминий ✓ Бронза ✓ Латунь ✓ Медь ✓ Железо
              ✓ Сталь ✓ Свинец и многие другое.
            </p>
          </div>
          <div className='faq-grid-element'>
            <h3>Как происходит оплата?</h3>
            <p>
              Мы производим оплату банковскими переводами,
              оплата происходит в российских рублях.
            </p>
          </div>
          <div className='faq-grid-element'>
            <h3>Возможна ли оплата наличными?</h3>
            <p>
              Нет, мы не используем наличные, 
              оплата происходит исключительно банковскими переводами.
            </p>
          </div>
          <div className='faq-grid-element'>
            <h3>Какие расценки на металл?</h3>
            <p>
              Цены на металл не стоят на месте и подвержены
              частым изменениям - поэтому цена может меняться
              каждый день. Однако, Вы можете быть уверены,
              что мы предложим лучшую цену.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}