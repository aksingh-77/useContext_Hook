import './App.css';
import React from 'react';
import ComponentC from './components/ComponentC';
 


export const UserContext = React.createContext();
export const ChannelContext = React.createContext()

/**
 * useContext is used consume the value provided by the Context api
 * Now the only things it helps us to resolve is making the consumption on values provided by Context API is easier
 * 
 * 
 * To provide the values to the Components using Context API we have create Context using React.createContext() Method
 * Usually it is done in the App.js and the Childs Components are wrapped under the Context Tag
 * 
 */
function App() {
  return (
    <div className="App">
      <UserContext.Provider  value={'Abhishek'}>
        <ChannelContext.Provider value={'Singh'}> 
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
