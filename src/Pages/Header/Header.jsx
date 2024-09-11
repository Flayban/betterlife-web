import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdExit } from "react-icons/io";
import Styles from '../Header/Header.module.css';
import dadosUserLogadoService from '../../Services/DadosUserLogado/DadosUserLogado-service';

const Header = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/perfil');
  };

  const realizarLogout = () => {
    dadosUserLogadoService.logOut();
    navigate('/login');
  };

  const forum = () => {
    navigate('/forum');
  };

  return (
    <div className={Styles.headerContainer}>
      <h1 className={Styles.title}>Betterlife | {dadosUserLogadoService.getUserInfo().tipousuario}</h1>
      <div className={Styles.iconContainer}>
        <div  className={Styles.textIcon} onClick={forum}>Fórum</div>
        <FaUserCircle className={Styles.profileIcon} onClick={goToProfile} />
        <IoMdExit className={Styles.profileIcon} onClick={realizarLogout} />
        
      </div>
    </div>
  );
}

export default Header;
