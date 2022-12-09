import home from '../img/01-Home.png';
import kopf from '../img/29-Lifestyle_b-o.png';
import bk from '../img/01-Books.png';
import back from '../img/02-Lifestyle.png';
import bild from '../img/46-Home_bm.png';
import sofa from '../img/45-Home_hem.png';


function Main() {
    return (
        <main>
            <div className='GG'>
                <figure>
                    <img src={home} alt="gfds"></img>
                    <figcaption><h3>Vifa Copenhagen 2.0 Loudspeaker</h3>
                        <br></br>
                        <p className='GRp'>$799.00</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={kopf} alt="gfds"></img>
                    <figcaption><h3>Bang & Olsufen Wireless Headphones</h3>
                        <br></br>
                        <p className='GRp'>$174.00</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={bk} alt="gfds"></img>
                    <figcaption><h3>Poketo: Creative Spaces</h3>
                        <br></br>
                        <p className='GRp'>$25.00</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={back} alt="gfds"></img>
                    <figcaption><h3>Ucon Acrobatics Hajo Backpack</h3>
                        <br></br>
                        <p className='GRp'>$79.00</p>
                    </figcaption>
                </figure>




            </div>
            <div className='FF'>
                <figure>
                    <img src={bild} alt="gfds"></img>
                    <figcaption><h3>Summer Print by Bratislav Milenkovic</h3>
                        <br></br>
                        <p className='GRp'>$27.00</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={sofa} alt="gfds"></img>
                    <figcaption><h3>Paolo Modular Coner Sofa by Hem</h3>
                        <br></br>
                        <p className='GRp'>$3,699.00</p>
                    </figcaption>
                </figure>
            </div>
        </main>
    );

}
export default Main;