import HeaderBaner from "../HeaderBaner/HeaderBaner";
import Product from "../Product/Product";

const Fundament = ({itemsCard})=>{



  return (<>
    <HeaderBaner itemsCard={itemsCard}/>
    <Product/>
  </>)
};

export default Fundament;