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

      { props.show.default.show && 
        <div>
          {props.show.default.components.clock && <Card><Time /></Card>}
          {props.show.default.components.profile && <Card><Profile /></Card>}
          {props.show.default.components.grid && <Card><GridX /></Card>}
          {props.show.default.components.person &&
            <Card>
              <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
                <img
                  className="avatar"
                  src="https://i.imgur.com/7vQD0fPs.jpg"
                  alt="Gregorio Y. Zara"
                />
                <ul>
                  <li>Improve the videophone</li>
                  <li>Prepare aeronautics lectures</li>
                  <li>Work on the alcohol-fuelled engine</li>
                </ul>
              </div>
            </Card>
          }


            {props.show.default.components.avatar &&
              <Card>
                <div className="avatar"><Avatar {...props.avatar} /></div>
              </Card>

            }

            {props.show.default.components.list && <Card><List /></Card>}
            {props.show.default.components.gallery && <Card><Gallery /></Card>}
            {props.show.default.components.people && <Card><ListP /></Card>}
            {props.show.default.components.tea && <Card><Tea /></Card>}
            {props.show.default.components.fancy && <Card><MyFancy /></Card>}



        </div>
      }
      {props.show.interactive && <Interactive />}
      {props.show.state && <State />}
      {props.show.stateManagement && <StateManagement />}



    </div>


  );
}


export default App;
