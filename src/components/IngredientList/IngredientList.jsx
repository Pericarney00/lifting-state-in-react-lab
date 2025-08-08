// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {

  return(
  <ul>
    {props.availableIngredients.map((ingredient, index) => {
      return (
        <li  style={{backgroundColor : ingredient.color}} key={index}>
            <p>{ingredient.name}</p>
            <button>+</button>
      </li>
    )
  })}
  </ul>
  )
};

export default IngredientList;
