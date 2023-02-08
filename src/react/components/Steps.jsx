import React, { useRef, useEffect } from 'react';
import { useInViewport } from 'react-in-viewport';

export default function Steps() {
  const ref = useRef();

  const { inViewport } = useInViewport(ref);

  // Makes animation work only first time

  useEffect(() => {
    if (inViewport) {
      document.getElementById('step-one').classList.add('anim-from-right');
      document.getElementById('step-two').classList.add('anim-from-left');
      document.getElementById('step-three').classList.add('anim-from-right');
    }
  });

  return (
    <div id='steps-wrap' ref={ref}>
      <h2>Сдайте Ваш металл в три простых шага!</h2>
      <div id='step-one' className='step'>
        <div className='step-number'>
          <h1>1</h1>
          <p>Шаг первый</p>
        </div>
        <div className='step-text'>
          <h3>Вывоз или доставка</h3>
          <p>Просто привозите Ваш металл по адресу: г. Уфа, ул. Рабкоров, д. 1/1.</p>
          <br/>
          <p>При сдаче металла от 2-х тонн и более, мы вывезем его сами - позвоните по номеру +7 (937) 498-67-40.</p>
        </div>
      </div>
      <div id='step-two' className='step'>
        <div className='step-number'>
          <h1>2</h1>
          <p>Шаг второй</p>
        </div>
        <div className='step-text'>
          <h3>Оформление документов</h3>
          <p>
            Металл в наше время весьма ценен, поэтому его кража, к сожалению, стала популярным занятием.
            Поэтому мы должны убедиться, что покупаем его у собственника в соответствии с законом.
          </p>
        </div>
      </div>
      <div id='step-three' className='step'>
        <div className='step-number'>
          <h1>3</h1>
          <p>Шаг третий</p>
        </div>
        <div className='step-text'>
          <h3>Оплата металла</h3>
          <p>
            После того, как металл окажется на нашем складе и все документы оформлены,
            мы незамедлительно проведем оплату. Мы осуществляем платежи путем банковских
            переводов для обеспечения максимальной честности и открытости.
          </p>
        </div>
      </div>
    </div>
  );
}