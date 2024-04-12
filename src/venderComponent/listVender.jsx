import SingleVender from "./singleVender";

const ListVender = ({vender}) => {
  return ( 
    <>
    <div className="list-vender  grid  grid-cols-1 md:grid-cols-2 gap-10">
      {
        vender.map((vend) =>{
          return <SingleVender key={vend.id} {...vend}/>
        })
      }
    </div>
    </>
   );
}
 
export default ListVender;