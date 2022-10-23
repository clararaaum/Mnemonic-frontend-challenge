import styles from './TableHeader.module.css'

const TableHeader = ( {isVisible, setOrderBy, orderBy, setSortBy, sortBy} ) => {

  const handleClick = (e) => {  
    if(orderBy === e.target.textContent) { 
      if(sortBy === 'asc') {
        setSortBy('desc');
        return
      }
      else {
        setSortBy('asc');
        return
      }
    }
    setOrderBy(e.target.textContent); 
  }

  const displayArrow = (name) => {
    if(orderBy === name) {
      if(sortBy === 'desc') {
        return <span>&#8593;</span> // vis pil ned
      }
      else {
        return <span>&#8595;</span>
      }
    }
    return <div className = {styles.placeholder}></div> // bare så ikke boksene hopper rundt når du sorterer ulikt
    
  }

  return ( 
    <div className = {styles.row}> 
      <div className = {styles.flexrow}>
        <div className = {styles.id} onClick = {handleClick}>id</div>
        <div>{displayArrow("id")}</div>
      </div>
      
      <div className={styles.name}>name</div>
      
      {isVisible && 
      
      <div className = {styles.row}>
        <div className = {styles.flexrow}>
        <div className = {styles.item} onClick = {handleClick}>height</div>
        <div>{displayArrow("height")}</div>
      </div>
        
      <div className = {styles.flexrow}>
        <div className = {styles.weight} onClick = {handleClick}>weight</div>
        <div>{displayArrow("weight")}</div>
      </div>
        <div className = {styles.types}>types</div>
      </div>

      }
    </div>
  )
}


export default TableHeader;