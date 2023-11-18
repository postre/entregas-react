const categories = [
    {
      id: "smartphones",
      name: "Celulares"
    },
    {
      id: "laptops",
      name: "Notebooks"
    },
    {
      id: "fragrances",
      name: "Perfumes"
    },
  
    {
      id: "skincare",
      name: "Cosmética"
    },
  
  ];

export const getCategories = () => { 
    return new Promise( (resolve, reject) => { 
        if(categories.length > 0) {
            setTimeout ( () => { 
                 resolve( categories )   
             }, 2000)
        } else {
            reject("NO items fetch")
        }
    } )
 }

 export const getCategory = (id) => {
  return new Promise((resolve, reject) => {
    if (categories.length > 0) {
      const category = categories.find( cat => cat.id == id);
      setTimeout(() => {
        if(!category) {
          reject(`La Categoría con id ${id} no existe`)
        }
        resolve(category);
      }, 1000);
    } else {
      reject("NO items fetch");
    }
  });
};