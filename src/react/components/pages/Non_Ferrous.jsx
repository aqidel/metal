import React, { useEffect } from 'react';
import Stars from '../Stars';
import Steps from '../Steps';

export default function Non_Ferrous() {

  useEffect(() => {document.title = 'Цветные металлы'}, []);

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
        <h1>Цветные металлы - что мы покупаем</h1>
        <p>Наша фирма предлагает лучшие цены на цветной металлолом.</p>
        <p>Неполный перечень того, что мы принимаем:</p>
        <div id='metals-grid'>
          <div id='aluminium' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Алюминий</p>
          </div>
          <div id='brass' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Латунь<br/>и<br/>бронза</p>
          </div>
          <div id='cables' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Кабели</p>
          </div>
          <div id='copper' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Медь</p>
          </div>
          <div id='lead' className='metal-item'>
            <div className='metal-item-bg'/>
            <p>Свинец</p>
          </div>
          <div id='batteries' className='metal-item'>
            <div className='metal-item-bg'/>
            <p style={{fontSize: '26px'}}>Аккумуляторы</p>
          </div>
        </div>
      </div>
      <Steps/>
    </React.Fragment>
  );
}