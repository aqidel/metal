import React from 'react';
import Stars from '../Stars';

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
          <a href='tel:+7 937 498 67 40'>
            <span>Звонить сейчас</span>
          </a>
          <ul>
            <li>Оплата сразу на месте</li>
            <br/>
            <li>Услуги по доставке</li>
            <br/>
            <li>Лучшие цены в Уфе</li>
            <br/>
            <li>Широкий ассортимент</li>
          </ul>
        </div>
        <div id='main-info-bottom'>
          <h3>Наш телефон: <br/> +7 (937) 498-67-40</h3>
          <h2>Принимаем любые черные и цветные металлы</h2>
          <h2>
            <span>✓ Алюминий </span><span>✓ Латунь </span><span>✓ Медь </span><span>✓ Железо </span>
            <br/>
            ✓ Сталь ✓ Нержавеющая сталь ✓ Свинец
            <br/>
            ✓ Аккумуляторы ✓ Кабели ✓ Двигатели
            <br/>
            ✓ Утилизация старой автотехники
          </h2>
        </div>
      </div>
    </main>
  );
}