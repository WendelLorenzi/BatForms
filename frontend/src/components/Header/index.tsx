import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.batIni}>
                <p> .BatForms </p>
                </div>
                <nav>
                   <a className={styles.active}>Home</a>
                   <a>Produtos</a>
                </nav>
                {/* <SignInButton /> */}
            </div>
        </header>
    );
}