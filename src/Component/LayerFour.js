import { Parallax } from 'react-parallax';
import spiderman2_pic1 from '../img/spiderman2_pic1.png';
const LayerFour = () => (
    <Parallax className='image' blur={0} bgImage={spiderman2_pic1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Thank you for visiting</span>
        </div>
    </Parallax>
);

export default LayerFour