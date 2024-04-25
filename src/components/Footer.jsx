import React from "react"
import logo from '../img/logoFooter.svg'
import logoMobile from '../img/logoFooterMobile.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="wrapper__logo--desktop">
                    <img src={logo} alt="logo" />
                </div>
                <div className="wrapper__logo--mobile">
                    <img src={logoMobile} alt="logoM" />
                </div>
                <div className="wrapper__separator" />
                <p className="wrapper__copyright">© 2024 RIMAC Seguros y Reaseguros.</p>
            </div>
        </footer>
    )
}

export default Footer