import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../Stars';
import Steps from '../Steps';
import ferrous from '../../../images/ferrous/ferrous_metal.webp';
import non_ferrous from '../../../images/non_ferrous/non_ferrous_metal.webp';

export default function Home() {
  return (
    <main>
      <div id='main-info-wrap'>
        <div id='main-info-top'>
          <h3>Самая быстрая приемка металла в Уфе</h3>
          <div id='rated-wrap'>
            <p>Оценка 4/5 на Яндекс</p>
            <Stars/>
          </div>
          <h1>Лучшие цены на Ваш металлолом!</h1>
          <h4>Получите оплату сразу же после сдачи металла на переработку сегодня.</h4>
          <a href='tel:+7 937 498 67 40'>Звоните сейчас</a>
          <h2>
            <p>✚ Оплата сразу на месте</p>
            <br/>
            <p>✚ Услуги по доставке</p>
            <br/>
            <p>✚ Лучшие цены в Уфе</p>
            <br/>
            <p>✚ Широкий ассортимент</p>
          </h2>
        </div>
        <div id='main-info-bottom'>
          <h3>Наш телефон: <br/> +7 (937) 498-67-40</h3>
          <h2>Принимаем любые черные и цветные металлы</h2>
          <h4>
            <p>✓ Алюминий&nbsp;</p><p>✓ Латунь&nbsp;</p><p>✓ Медь&nbsp;</p><p>✓ Железо&nbsp;</p>
          </h4>
          <h4>
            <p>✓ Сталь&nbsp;</p><p>✓ Нержавеющая сталь&nbsp;</p><p>✓ Свинец&nbsp;</p>
          </h4>
          <h4>
            <p>✓ Аккумуляторы&nbsp;</p><p>✓ Кабели&nbsp;</p><p>✓ Двигатели&nbsp;</p>
          </h4>
          <h4>
            <p>✓ Утилизация старой техники</p>
          </h4>
          <a href='https://yandex.ru/maps/-/CCU77TCGGB'>Мы на Яндекс.Карты</a>
          <p>Республика Башкортостан, г. Уфа, ул. Рабкоров, д. 1/1</p>
        </div>
      </div>
      <div id='call-wrap'>
        <h2>Мы готовы вывезти Ваш металлолом</h2>
        <p>
          Вывезем Ваш металлолом сами <b>от 2-х и более тонн.</b>
          <br/>
          Просто позвоните по номеру: +7 (937) 498-67-40.
        </p>
        <a href='tel:+7 937 498 67 40'>Звоните сейчас</a>
      </div>
      <div id='we-buy'>
        <h2>Мы покупаем все виды металла</h2>
        <div id='metal-types-wrap'>
          <Link to='/ferrous'>
            <img src={ferrous} alt='img'/>
            <h2>Черные металлы</h2>
          </Link>
          <Link to='/non-ferrous'>
            <img src={non_ferrous} alt='img'/>
            <h2>Цветные металлы</h2>
          </Link>
        </div>
      </div>
      <Steps/>
      <div id='work-time'>
        <h2>Привозите Ваш металл на наш склад в г. Уфа</h2>
        <p>
          ООО "БашМетЛом"
          <br/>
          г. Уфа, ул. Рабкоров, д. 1/1
        </p>
        <p>
          <b>Понедельник - пятница с 10:00 до 19:00, суббота - воскресенье с 10:00 до 16:45</b>
        </p>
      </div>
    </main>
  );
}