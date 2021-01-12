import './headerImage.css';
import imageH from './mainimg.png';

export const HeaderImage = () => {
    return (
      <div>  
        <box className="image">
          {<img src={imageH} alt="himage"/>}
        </box> 
      </div>
  
    );
  }