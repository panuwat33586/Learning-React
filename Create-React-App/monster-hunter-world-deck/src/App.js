import React, { useState } from 'react';
import CategorySection from './components/complex/CategorySection';
import { Logo } from './components/basic/Container';

function App() {
  const [category] = useState({
    largeMonster: [
      {
        name: 'Banbaro',
        image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/01/MHWI-Banbaro_Render_001.png/revision/latest?cb=20190509235010',
        species: 'Brute wyvern',
        weakness: [{ element: 'Dragon', level: 3 }, { element: 'Fire', level: 2 }],
        alignment: { blights: ['Iceblight', 'FireBlight', 'WaterBlight'] },
        description: "A monster with two giant horns, like a running brick wall. It charges at threats while digging its massive horns in the ground, sometimes picking up entire trees along the way.",
        locations: ['Ancient Forest', 'Wildspire Waste', 'Coral Highlands', 'Rotten Vale', "Elder's Recess", 'Hoarfrost Reach', "Guiding Lands"]
      }
    ],
    smallMonster: [
      {
        name: 'Aptonoth',
        image: 'https://i.pinimg.com/originals/41/4e/78/414e78b0dae3db386f9aa314b340b9c5.png',
        species: 'n/a',
        weakness: [{ element: 'n/a', level: 0 }],
        alignment: { blights: ['n/a'] },
        description: " Docile herbivores that graze in packs. Their meat is considered a delicacy and is rich in nutrients. If one member of the herd is attacked, the rest will flee immediately",
        locations: ['Ancient Forest']
      }
    ]
  })
  return (
    <div>
      <Logo>
        <img style={{width:'400px',height:'200px'}} src={process.env.PUBLIC_URL + '/images/Logo.png'} alt='monster-hunter-world-logo'/>
      </Logo>
      <h2>Large Monster</h2>
      <CategorySection
        category={category.largeMonster}
      />
      <h2>Small Monster</h2>
      <CategorySection
        category={category.smallMonster}
      />
    </div>
  );
}

export default App;
