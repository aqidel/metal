import React, { useEffect } from 'react';
import Stars from '../Stars';
import Steps from '../Steps';

export default function Ferrous() {

  useEffect(() => {document.title = 'Черные металлы'}, []);

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
        <div id='metals-grid'>
          <div id='iron' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Железо</p>
          </div>
          <div id='steel' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Сталь</p>
          </div>
          <div id='car-scrap' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Старые<br/>кузова</p>
          </div>
          <div id='engine' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Двигатели</p>
          </div>
          <div id='hms' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Тугоплавкая<br/>сталь</p>
          </div>
          <div id='lda' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Бытовая<br/>техника</p>
          </div>
        </div>
      </div>
      <Steps/>
    </React.Fragment>
  );
}