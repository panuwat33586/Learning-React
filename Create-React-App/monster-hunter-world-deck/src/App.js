import React,{useState} from 'react';
import CategorySection from './components/complex/CategorySection';

function App() {
  const [category,setCategory]=useState({
    largeMonster:[
       {
         name:'Banbaro',
         image:'https://vignette.wikia.nocookie.net/monsterhunter/images/0/01/MHWI-Banbaro_Render_001.png/revision/latest?cb=20190509235010',
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
