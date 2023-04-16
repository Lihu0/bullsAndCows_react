import rndNum from './scripts/rndNum';
import Input from './components/input';
import RndContext from './RndContext';
import BullsAndCowsTable from './components/bullsAndCowsTable';
import ValuesContext from './ValuesContext';
import { useState } from 'react';

const rnd = rndNum(4);

function App() {
  const [tableValues, setTableValues] = useState([]);


  return (
    <RndContext.Provider value={rnd}>
      <ValuesContext.Provider value={{ tableValues, setTableValues }}>
        <div className="h-screen text-center text-lg pt-14 dark:bg-slate-800 dark:text-white overflow-auto">
          <Input />
          <BullsAndCowsTable teableValues={tableValues}/>
          <footer className="text-[32px] mt-20">המשחק של ליהוא לויט</footer>
        </div>
      </ValuesContext.Provider>
    </RndContext.Provider>
  );
}

export default App;
