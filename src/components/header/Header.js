import css from './header.module.css'

const Header = () => {

    return (
        <div className={css.wrap}>
            <header className={css.header}>
                <div className={css.logo}>Logo</div>
                <div>
                    <input className={css.input} type="text"/>
                </div>
                <div className={css.userDiv}>user</div>
            </header>
        </div>
    );
};

export {Header};