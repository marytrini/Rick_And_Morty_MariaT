import Card from '../Card/Card';
export default function Cards({characters, onClose}) {
   
   return (<div style={{display: "flex", justifyContent: "space-between",width: "90%", margin: "auto", padding: "2em"}}>
         {characters.map(({id, name, species, gender, image}) => {
            return <Card
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose = {onClose}
            />
         })}
   </div>);
}
