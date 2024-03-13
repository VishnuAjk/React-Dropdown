import { useState, useEffect } from 'react';
import styles from "./dropdown.module.css"

// destructing the props in the Component
function Dropdown({options}){
   
    // local state to handle the toggle of Dropdown
    const [toggle, setToggel] = useState(false);
    const [dropOption, setDropOption] = useState("Select")

    useEffect(()=>{

        document.addEventListener('click', ()=>{
            setToggel(false)
        });
    })

    // handles Dropdown option clicks
    const handleOptionClick = (option)=>{
       
        setToggel(false)
        setDropOption(option)
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <h2>Should you use dropdown ?</h2>
                    <button className={styles.dropdownButton} 
                    onMouseEnter={()=>setToggel(true)}>
                        {dropOption} <span>&#9660;</span>
                    </button>
                    {toggle?
                    <>
                    <ul className={styles.dropdownListContainer}>
                        {/* Mapping through the options array to dynamically add the options to the list */}
                        {options.map((option, index)=>(
                            <li key={index} onClick={()=>handleOptionClick(option)}>{option}</li>
                        ))}          
                    </ul>

                    </>
                    :
                    null}
                </div>
        </>
    )

}


export default Dropdown;