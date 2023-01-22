const imgCont = document.querySelector('#dog-image-container')
const list = document.querySelector("#dog-breeds")
const dogSorted = document.querySelector("#breed-dropdown")
let breedArray = [];

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response =>response.json())
.then(response => response.message.forEach(dog =>renderDog(dog) ) )

function renderDog(dogP)   /// adds one dog photo
{
    const photo = document.createElement('img');
    photo.src = dogP //.message
    imgCont.appendChild(photo)
    
    
}

fetch("https://dog.ceo/api/breeds/list/all")
.then(response =>response.json())
.then(response =>{ 
    breedArray = Object.keys(response.message)
    breedArray.forEach(dog =>renderDogBr(dog) )
}
)

function renderDogBr(dogP) ///adds one dog to list and change color when clicked
{
    const listItm = document.createElement('li')
    listItm.textContent = dogP
    list.appendChild(listItm) 
   
    //EventListener
    listItm.addEventListener('click',(event)=> listItm.style.color = 'green') 
  
}


function removeBreeds( parent){          //clears out list
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
 ///// alterative from this point on shown below
function filterList(letter){                 /// filters after drop down selected
    removeBreeds(list)
    const nArrayA = breedArray.filter(oArryPP =>oArryPP.charAt(0) === letter )
    console.log(nArrayA)
    nArrayA.forEach(dog =>renderDogBr(dog))
    }

  dogSorted.addEventListener('change',(event)=> {  //where letter selected
    filterList(event.target.value)
     }) 
    



// dogSorted.addEventListener('change',(event)=> {
    
//     removeBreeds(list)
//     const nArrayA = breedArray.filter(oArryPP =>oArryPP.charAt(0) === event.target.value)
//     console.log(nArrayA)
//     nArrayA.forEach(dog =>renderDogBr(dog))
//      }) 
    

