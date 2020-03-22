fetch('https://swapi.co/api/starships/') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  console.log(json)
    let ships = json.results;
    for (s of ships){
        if (s.name === 'Executor'){
        let listItem = document.createElement('ul');
        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
        executor.appendChild(listItem);}
        if (s.name === 'Sentinel-class landing craft'){
          let listItem = document.createElement('ul');
          listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
          sentinalClassLandingCraft.appendChild(listItem);}
          if (s.name === 'Death Star'){
            let listItem = document.createElement('ul');
            listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
            deathStar.appendChild(listItem);}
            if (s.name === 'Millennium Falcon'){
              let listItem = document.createElement('ul');
              listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
              millenniumFalcon.appendChild(listItem);}
              if (s.name === 'Y-wing'){
                let listItem = document.createElement('ul');
                listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                yWing.appendChild(listItem);} 
                if (s.name === 'X-wing'){
                  let listItem = document.createElement('ul');
                  listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                  xWing.appendChild(listItem);} 
                  if (s.name === 'TIE Advanced x1'){
                    let listItem = document.createElement('ul');
                    listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                    tieAdvancedX1.appendChild(listItem);} 
                    if (s.name === 'Slave 1'){
                      let listItem = document.createElement('ul');
                      listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                      slave1.appendChild(listItem);}
                      if (s.name === 'Imperial shuttle'){
                        let listItem = document.createElement('ul');
                        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                        imperialShuttle.appendChild(listItem);}
                        if (s.name === 'EF76 Nebulon-B escort frigate'){
                          let listItem = document.createElement('ul');
                          listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                          ef76NebulonBEscortFrigate.appendChild(listItem);}        
    }}
);
fetch('https://swapi.co/api/starships/?page=2')
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  console.log(json)
    let ships = json.results;
    for (s of ships){
      if (s.name === 'Calamari Cruiser'){
        let listItem = document.createElement('ul');
        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
        calamariCruiser.appendChild(listItem);}
        if (s.name === 'A-wing'){
          let listItem = document.createElement('ul');
          listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
          aWing.appendChild(listItem);}
          if (s.name === 'B-wing'){
            let listItem = document.createElement('ul');
            listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
            bWing.appendChild(listItem);}
            if (s.name === 'Republic Cruiser'){
              let listItem = document.createElement('ul');
              listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
              republicCruiser.appendChild(listItem);}
              if (s.name === 'Naboo fighter'){
                let listItem = document.createElement('ul');
                listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                nabooFighter.appendChild(listItem);}
                if (s.name === 'Naboo Royal Starship'){
                  let listItem = document.createElement('ul');
                  listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                  nabooRoyalStarship.appendChild(listItem);}
                  if (s.name === 'Scimitar'){
                    let listItem = document.createElement('ul');
                    listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                    scimitar.appendChild(listItem);}
                    if (s.name === 'J-type diplomatic barge'){
                      let listItem = document.createElement('ul');
                      listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                      jTypeDiplomaticBarge.appendChild(listItem);}
                      if (s.name === 'AA-9 Coruscant freighter'){
                        let listItem = document.createElement('ul');
                        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                        aa9CoruscantFreighter.appendChild(listItem);}
                        if (s.name === 'Jedi starfighter'){
                          let listItem = document.createElement('ul');
                          listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                          jediStarfighter.appendChild(listItem);}
    }
}
);
fetch('https://swapi.co/api/starships/?page=3')
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  console.log(json)
    let ships = json.results;
    for (s of ships){ 
      if (s.name === 'H-type Nubian yacht'){
        let listItem = document.createElement('ul');
        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
        hTypeNubianYacht.appendChild(listItem);}
        if (s.name === 'Star Destroyer'){
          let listItem = document.createElement('ul');
          listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
          starDestroyer.appendChild(listItem);}
          if (s.name === 'Trade Federation cruiser'){
            let listItem = document.createElement('ul');
            listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
            tradeFederationCruiser.appendChild(listItem);}
            if (s.name === 'Theta-class T-2c shuttle'){
              let listItem = document.createElement('ul');
              listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
              thetaClassT2CShuttle.appendChild(listItem);}
              if (s.name === 'T-70 X-wing fighter'){
                let listItem = document.createElement('ul');
                listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                t70XWingFighter.appendChild(listItem);}
                if (s.name === 'Rebel transport'){
                  let listItem = document.createElement('ul');
                  listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                  rebelTransport.appendChild(listItem);}
                  if (s.name === 'Droid control ship'){
                    let listItem = document.createElement('ul');
                    listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                    droidControlShip.appendChild(listItem);}
                    if (s.name === 'Republic Assault ship'){
                      let listItem = document.createElement('ul');
                      listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                      republicAssaultShip.appendChild(listItem);}
                      if (s.name === 'Solar Sailer'){
                        let listItem = document.createElement('ul');
                        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                        solarSailer.appendChild(listItem);}
                        if (s.name === 'Republic attack cruiser'){
                          let listItem = document.createElement('ul');
                          listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                          republicAttackCruiser.appendChild(listItem);}
                        }
}
);
fetch('https://swapi.co/api/starships/?page=4')
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  console.log(json)
    let ships = json.results;
    for (s of ships){
      if (s.name === 'Naboo star skiff'){
        let listItem = document.createElement('ul');
        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
        nabooStarSkiff.appendChild(listItem);}
        if (s.name === 'Jedi Interceptor'){
          let listItem = document.createElement('ul');
          listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
          jediInterceptor.appendChild(listItem);}
          if (s.name === 'arc-170'){
            let listItem = document.createElement('ul');
            listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
            arc170.appendChild(listItem);}
            if (s.name === 'Belbullab-22 starfighter'){
              let listItem = document.createElement('ul');
              listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
              belbullab22Starfighter.appendChild(listItem);}
              if (s.name === 'V-wing'){
                let listItem = document.createElement('ul');
                listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                vWing.appendChild(listItem);}
                if (s.name === 'CR90 corvette'){
                  let listItem = document.createElement('ul');
                  listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                  cr90Corvette.appendChild(listItem);}
                  if (s.name === 'Banking clan frigate'){
                    let listItem = document.createElement('ul');
                    listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
                    bankingClanFrigate.appendChild(listItem);}  
    }
}
);