
import FooterComponent from "./footer";
import HeaderComponent from "./header";

export default function IndexPage() {
    
    return (
        <main>
            <section id="header">
                <HeaderComponent />
            </section>
                
            <section id="body-context">
            
            </section>
                
            <section id="footer">
                <FooterComponent />
            </section>
        </main>
    );
}