import SingleSelling from "./singleSelling";

const ListSell = ({selling}) => {
  return (
    <>
     <div className="list-buy">
      {
        selling.map((sell,index) =>{
          
          return <SingleSelling key={index} {...sell}/>
        })
      }
    </div>
    </>
    );
}
 
export default ListSell;