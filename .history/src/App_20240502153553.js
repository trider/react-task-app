// import logo from './logo.svg';
import Gallery from './components/basic/Gallery.js';
import Profile from './components/basic/Profile.js';
import Avatar from './components/basic/Avatar.js';
import GridX from './components/basic/GridX.js';
import Time from './components/time/Time.js';
import List from './components/basic/ListT.js';
import ListP from './components/people/people.js';
import Tea from './components/basic/Tea.js';
import MyFancy from './components/fancyText/MyFancy.js';
import Interactive from './components/inveractive/interactive.js';
import State from './components/state/state.js';
import StateManagement from './components/stateManagement/StateManagement.js';

import Card from './components/basic/Card.js';

import './App.css';
import './styles.css';

const props = {
  avatar: {
    size: 100,
    person: {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2'
    }
  },
  show: {
    default: {
      show:false,
      components:{
        clock: false, 
        avatar: false,
        gallery: false,
        grid: false,
        profile: false,
        list: false,
        people: false,
        tea: true,
        fancy: true
      }
    },
    interactive: false,
    state: false,
    stateManagement: true

  
 
  }

}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};




let App = () => {
  return (
    <div>

     



    </div>


  );
}


export default App;
