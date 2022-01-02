import React from 'react';
import { SkipNavigation } from './Accessibility';
/*
    This file is supposed to be edited. Rather change stuff in here than in _app.tsx.
*/

/**
   * Sets the content and / or logic of the 'header'.
   * @returns JSX
*/
export const Header = () => {
    return(
        <header className='header'>
        <SkipNavigation />

        </header>
    )
};

/**
   * Sets the content and / or logic of the main page container.
   * @returns JSX
*/
export const Content = (props) => {
    return(
        <div className='content' id='main-content'>
            {props.children}
        </div>
    )
};

/**
   * Sets the content and / or logic of the Footer. The footer will be sticky by default.
   * @returns JSX
*/
export const Footer = () => {
    const currentYear: number = new Date().getFullYear();
    return(
        <footer className='footer'>
            <span id='year'>{currentYear}</span>
        </footer>
    )
};

/**
   * Wraps the whole structure (Header, Content, Footer).
   * @returns JSX
*/
export const PageContainer = (props) => {
    return(
        <div className='pagecontainer'>
            {props.children}
        </div>
    )
};