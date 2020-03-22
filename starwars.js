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
        let listItem = document.createElement('ul');
        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
        starShipList2.appendChild(listItem);
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
        let listItem = document.createElement('ul');
        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
        starShipList3.appendChild(listItem);
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
        let listItem = document.createElement('ul');
        listItem.innerHTML = '<p>' + ' Ship Class: ' + s.starship_class + ' Number of Crew: '+ s.crew +' Number of Passengers: '+ s.passengers + '</p>';
        starShipList4.appendChild(listItem);  
    }
}
);