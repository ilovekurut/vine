import { Outlet } from "react-router";
import CustomLink from "../../Custom/CustomLink";
import s from "./Layout.module.css"


const Layout = () => {
    return (
        <>
        <header className={s.header}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="random">Random CockTails</CustomLink>
            <CustomLink to="search">Search</CustomLink>
        </header>
       <Outlet />

       <footer>2024</footer>
        </>

    );
};

export default Layout;