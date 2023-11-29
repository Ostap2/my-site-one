import React from 'react';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import Test from './Test/Test'

function App() {

  return (
      <div>
        {/* <div className='container'>
    <form action="#">
      <select name="language" className='select'>
          <option value="en" className='en'>En</option>
        <option value="uk"className='uk'>Uk</option>
      </select>
    </form>
    </div> */}

      <div className='container'>
        <LanguageSwitcher />
        </div>
        <div className='container'>
       <Test/>
        </div>
      </div>
  );
}

export default App;