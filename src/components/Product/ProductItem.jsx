

const ProductItem = ({itemImg, itemText, imagesTxt})=>{

  return (<>
    <div className='productItemContainerImg'>
        <img src={itemImg} alt={'images ' + imagesTxt}/>
        <span className='name'>{itemText}</span>
    </div>
  </>)
};

export default ProductItem;