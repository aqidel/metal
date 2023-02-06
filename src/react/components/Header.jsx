import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import logo from '../../images/logo.png';

export default function Header() {

  const [state, setState] = useState(false);

  return (
    <header>
      <div id='header-logo-wrap'>
        <img src={logo} alt='logo'/>
        <div id='burger-wrap'>
          <span className={'upper-line' + (state ? ' upper-line-active' : '')}/>
          <span className={'mid-line' + (state ? ' mid-line-active' : '')}/>
          <span className={'down-line' + (state ? ' down-line-active' : '')}/>
        </div>
      </div>
    </header>
  );
}