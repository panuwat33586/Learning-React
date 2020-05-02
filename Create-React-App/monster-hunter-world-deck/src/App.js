import React,{useState} from 'react';
import CategorySection from './components/complex/CategorySection';

function App() {
  const [category,setCategory]=useState({
    largeMonster:[
       {
         id:1,
         name:'Banbaro',
         species:'Brute wyvern',
         weakness:[{element:'Dragon',level:3},{element:'Fire',level:2}],
         alignment:{blight:['Iceblight','FireBlight','WaterBlight']},
         description:"A monster with two giant horns, like a running brick wall. It charges at threats while digging its massive horns in the ground, sometimes picking up entire trees along the way.",
         locations:['Ancient Forest','Wildspire Waste','Coral Highlands','Rotten Vale',"Elder's Recess",'Hoarfrost Reach',"Guiding Lands"]
       }
    ]
  })
  return (
    <div>
      <h1>Monster Hunter World</h1>
      <h2>Large Monster</h2>
      <CategorySection
      category={category.largeMonster}
      />
    </div>
  );
}

export default App;
