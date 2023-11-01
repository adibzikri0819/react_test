import { Parallax } from 'react-parallax';
import spiderman2_pic5 from '../img/spiderman2_pic5.jpg';
const LayerOne = () => (
    <Parallax className='image' blur={0} bgImage={spiderman2_pic5} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Spider-Man (Peter Parker)</span>
        </div>
    </Parallax>
);

export default LayerOne