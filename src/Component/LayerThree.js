import { Parallax } from 'react-parallax';
import spiderman2_pic4 from '../img/spiderman2_pic4.jpg'
const LayerThree = () => (
    <Parallax className='image' blur={0} bgImage={spiderman2_pic4} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Venom (Harry Osborn)</span>
        </div>
    </Parallax>
);

export default LayerThree