import rockImg from './asset/rock.svg';
import scissorImg from './asset/scissor.svg';
import paperImg from './asset/paper.svg';
import './Hand.css';

const HAND_IMGS = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({value, className, state=0}) {
  const src = HAND_IMGS[value];
  if(state===1){
    className =className+' Hand-winner';
  }
  return(
    <img className={className} src={src} alt={value}/>
  );
}

export default HandIcon;