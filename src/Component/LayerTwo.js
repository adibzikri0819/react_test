import { Parallax } from 'react-parallax';
import spiderman2_pic2 from '../img/spiderman2_pic2.jpg'

const LayerTwo = () => (
    <Parallax className='image' blur={0} bgImage={spiderman2_pic2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Spider-Man (Miles Morales)</span>
        </div>
    </Parallax>
);

export default LayerTwo