


    for(let i = 0;  i<=8; i++){
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=5277${i}`
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
         displayFood(data)
        
        })   
    
    }
    function displayFood(foods){
        const divFoods = document.getElementById("foods");

        const divFood = document.createElement("div");
        divFood.className = "food"

      
        const foodsInfo = `
        <img   class='foodDetailsImg w-100 pb-3' src='${foods.meals[0].strMealThumb}'/>
          <h3 class="food-name">${foods.meals[0].strMeal}</h3>
          
          <button class="btn btn-primary" onClick="displayFoodDetails('${foods.meals[0].strMeal}')">click</button>
        
        `
        divFood.innerHTML = foodsInfo;
        divFoods.appendChild(divFood)
       
   console.log(foods)
    }



  function displayFoodDetails(name){
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
   
      fetch(url)
      .then(res => res.json())
      .then(data => {
        renderFoodInfo(data.meals[0])
      })

      const raju = document.getElementById("foods");
      raju.style.display = "none"
  }
  function renderFoodInfo(foods){
         const foodsNewDiv = document.getElementById("food-details");
         foodsNewDiv.innerHTML = `
         
         <img  src="${foods.strMealThumb}"/>
        
        <h4> ${"Foods Name : ("} ${foods.strMeal} ${" )"}</h4>
        <p>${"Made in :="} ${foods.strArea}</p>

        <h5>Ingredients :-</h5>
         <ul>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure1}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure2}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure3}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure4}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure5}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure6}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure7}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure8}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure9}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure10}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure11}</li>
         <li><i class="fas fa-check-circle"></i>${foods.strMeasure12}</li>
         
         </ul>

         `
  }




   