import React from 'react';
import Stars from '../Stars';

export default function Ferrous() {
  return (
    <React.Fragment>
      <div id='call-us'>
        <div id='call-us-rating-wrap'>
          <p>Оценка 4/5 на Яндекс</p>
          <Stars/>
        </div>
        <h2>
          Сдайте Ваш лом сегодня!
          <br/>
          <b>Лучшие цены гарантированы.</b>
        </h2>
        <h2>
          Звоните по номеру:
          <br/>
          <b>+7 (937) 498-67-40</b>
        </h2>
      </div>
      <div id='what-we-buy'>
        <h1>Черные металлы - что мы покупаем</h1>
        <p>Наша фирма предлагает лучшие цены на черный металлолом.</p>
        <p>Неполный перечень того, что мы принимаем:</p>
        <div id='metals-grid'></div>
      </div>
    </React.Fragment>
  );
}