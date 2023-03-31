import styles from './SearchBar.module.css'
import { useState } from 'react';
export default function SearchBar(props) {
   
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={styles.searchBarContainer}>
         <input
            type='search'
            name='search'
            id='search'
            onChange={handleChange}
         />
         <button onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
   );
}
