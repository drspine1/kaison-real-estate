import Singlebuy from "./singlebuy";

const ListBuy = ({buying}) => {
  return ( 
    <>
    <div className="list-buy">
      {
        buying.map((buy,index) =>{
          
          return <Singlebuy key={index} {...buy}/>
        })
      }
    </div>
    </>
   );
}
 
export default ListBuy;