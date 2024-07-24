import bird from './img/bird.svg';
import cat from './img/cat.svg';
import cow from './img/cow.svg';
import dog from './img/dog.svg';
import gator from './img/gator.svg';
import heart from './img/heart.svg';
import horse from './img/horse.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}

function AnimalShow({ type }) {
    return (
        <div>
            <img src={svgMap[type]} alt="animal" />
        </div>
    )
}

export default AnimalShow;
