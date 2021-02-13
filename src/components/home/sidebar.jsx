import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SideBar ( props ) {
    const [ path, setPath ] = useState( "" );
    const PUBLIC_URL = "/react/molla";

    useEffect( () => {
        setPath( window.location.href );
    } )

    useEffect( () => {
        document.querySelector( ".megamenu-container .sf-with-ul" ).addEventListener( "mouseover", function ( e ) {
            let demoItems = document.querySelectorAll( '.demo-item.show' );
            for ( let i = 0; i < demoItems.length; i++ ) {
                demoItems[ i ].classList.toggle( 'show' );
            }
            const demos = document.querySelector( '.view-all-demos' )
            if(demos){
                demos.classList.remove( 'disabled-hidden' );
            }
        } );
    } )

    function showAllDemosHandler ( e ) {
        let demoItems = document.querySelectorAll( '.demo-item.hidden' );

        for ( let i = 0; i < demoItems.length; i++ ) {
            demoItems[ i ].classList.toggle( 'show' );
        }

        document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
        e.preventDefault();
    }

    return (
        <div className="side-div">
            <div className="header sidebar">
                <div className="header-top">
                    <Link to={ `${process.env.PUBLIC_URL}` } className="logo">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/logo.svg` } alt="OLLA Logo" width="100" height="20" />
                    </Link>
                </div>

                <div className="header-main">
                    <nav className="main-nav">
                        <ul className="menu sf-arrows">
                            <li className="megamenu-container" id="menu-home">
                                <Link to={ `${process.env.PUBLIC_URL}/` } className="sf-with-ul">Home</Link>
                            </li>
                            <li className={ path.indexOf( "shop" ) > -1 ? 'active' : '' }>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="sf-with-ul">Woman</Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">Categories</div>
                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Coats &amp; Jackets</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={ path.indexOf( "shop" ) > -1 ? 'active' : '' }>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="sf-with-ul">Man</Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">Categories</div>
                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Coats &amp; Jackets</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={ path.indexOf( "shop" ) > -1 ? 'active' : '' }>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="sf-with-ul">Kids</Link>

                                <div className="megamenu demo left">
                                    <div className="menu-col">
                                        <div className="menu-title">Categories</div>
                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Coats &amp; Jackets</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div className="header-bottom">
                    <div className="social-icons">
                        <Link to="#" className="social-icon facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>

                        <Link to="#" className="social-icon twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>

                        <Link to="#" className="social-icon instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>

                        <Link to="#" className="social-icon youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>

                        <Link to="#" className="social-icon pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                    </div>

                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } Molla Store.<br />All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar;