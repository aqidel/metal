import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import logo from '../../images/logo.png';

export default function Header() {

  const [state, setState] = useState(false);

  const targetScroll = document.querySelector('body');

  useEffect(() => {
    state ? disableBodyScroll(targetScroll) : enableBodyScroll(targetScroll)
  }, [state]);

  return (
    <header>
      <div id='header-logo-wrap'>
        <Link to='/' onClick={() => setState(false)}>
          <img src={logo} alt='logo'/>
        </Link>
        <div id='burger-wrap' onClick={() => setState(!state)}>
          <span className={'upper-line' + (state ? ' upper-line-active' : '')}/>
          <span className={'mid-line' + (state ? ' mid-line-active' : '')}/>
          <span className={'down-line' + (state ? ' down-line-active' : '')}/>
        </div>
      </div>
      <nav id={state ? 'nav-open' : 'nav-closed'}>
        <div/>
        <Link to='/ferrous' onClick={() => setState(false)}>Черный лом</Link>
        <div/>
        <Link to='/non-ferrous' onClick={() => setState(false)}>Цветной лом</Link>
        <div/>
        <Link to='/about' onClick={() => setState(false)}>О нас</Link>
        <div/>
        <Link to='/contact' onClick={() => setState(false)}>Контакты</Link>
        <div/>
      </nav>
    </header>
  );
}