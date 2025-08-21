async function fetchData() {
    try {
        
        const response = await fetch('https://www.codewars.com/api/v1/users/Ballchinian');
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        
        const data = await response.json();

        createList(data)
       
    } catch (error) {
        
        console.error('There has been a problem with your fetch operation:', error);
    }

}
function createList(data) {


    const ul = document.getElementById('codewars')
    
    for (const [key, value] of Object.entries(data.ranks.languages)) {
        
      
        const li = document.createElement('li');
        console.log(value.rank)
        li.textContent = `${key}: ${value.name} with score:${value.score}`; 

        console.log(li)

        ul.append(li);
        
    }

  

    
        
}


document.addEventListener('DOMContentLoaded', fetchData);


