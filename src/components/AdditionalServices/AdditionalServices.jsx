import AdditionalServicesComponents from "./AdditionalServicesComponents";
import calculationOfMaterials from '../../assets/aditionServises/calculation.jpg';
import assistanceInTheSelectionAndPurchaseOfMterials from '../../assets/aditionServises/assistance.jpg';
import visitOfASpecialistToTheObject from '../../assets/aditionServises/visit.png';
import obvyzka from '../../assets/aditionServises/obvyzka.jpeg';


const AdditionalServices = ()=>{

const additionalServicesItems = [
  {
    name: 'Бесплатный выезд специалиста на объект',
    picture: visitOfASpecialistToTheObject,
  },
  {
    name: 'Расчет материала',
    picture: calculationOfMaterials,
  },
  {
    name: 'Помощь в выборе и покупке материалов',
    picture: assistanceInTheSelectionAndPurchaseOfMterials,
  },
  {
    name: 'Монтаж обвязки',
    picture: obvyzka,
  },
  
];

  return(
  <div className='additionalServices'>
      {additionalServicesItems.map((item, ind)=>{
        return (<AdditionalServicesComponents name={item.name} picture={item.picture} key={ind}/>)
      })}
  </div>
  )
};

export default AdditionalServices;