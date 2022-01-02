import styles from '../styles/Accessibility.module.css';

export const SkipNavigation = () => {
    return(
        <a className={styles.skipNavLink} href="#main-content" >Skip Navigation</a>
    );
};