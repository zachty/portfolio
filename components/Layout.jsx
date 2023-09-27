//Layout is necessary in Next for things to work
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
