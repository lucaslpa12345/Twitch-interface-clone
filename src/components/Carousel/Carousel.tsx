import React, {useEffect, useState} from 'react'
import { ArrowLeft,ArrowRight, Container } from './style'
import Data from './data'

 
interface props { 
    url: string 
}

function Carousel() { 

  const [NewData, setData] = useState<number[]>([])
  const [DataFinale , setFinale] = useState([''])
  const [Classes , setClasses ] = useState(['First' , 'Second' , 'Terceiro' , 'Quarto' , 'Quinto'])


 useEffect(() => { 
             
 }, [DataFinale])

 useEffect(() => {  }
 , [NewData])
 
  useEffect(() =>  {


    var arr = [];
    while (arr.length < 5)
  {
     const number =   Math.floor(Math.random() * 5)
     if ( arr.indexOf(number) === -1 ) { 
        arr.push(number)
     }
        
    }
  
    var primeiro = arr[0]
    var segundo = arr[1] 
    var terceiro = arr[2]
    var quarto = arr[3]
    var quinto = arr[4]

    const um = Data[primeiro]
    const dois = Data[segundo] 
    const tres = Data[quarto]
    const quatro = Data[terceiro]
    const cinco = Data[quinto]
     
    setFinale([um.url , dois.url, tres.url, quatro.url, cinco.url])
    

  } , [])
  
  
   function RollLeft() { 
      
    const newArray = [Classes[1] ,Classes[2] ,Classes[3] ,Classes[4] ,Classes[0]  ]
 
       setClasses(newArray)
   }

   function RollRight() { 
    const newArray = [Classes[4] ,Classes[0] ,Classes[1] ,Classes[2] ,Classes[3]  ]
 
    setClasses(newArray)
   }
           
  
     return ( 
       <Container>

       { 
         DataFinale.length === 5 ?  ( 
          <div className='Carousell' >

           <div 
             onClick = {() => RollLeft()}

           className='toleft' >
             <ArrowLeft/> 
           </div>

          <div className={Classes[0]} >
                    <iframe title={Classes[0]} width="420" height="315"
   src={DataFinale[0]}>
   
   </iframe>
                     </div >
   
                      <div className={Classes[1]}>
                      <iframe  title={Classes[1]} width="420" height="315"
   src={DataFinale[1]}>
   
   </iframe>
                      </div>
                      <div className={Classes[2]}>
                      <iframe title={Classes[2]} width="420" height="315"
   src={DataFinale[2]}>
   
   </iframe>
                      </div>
                      <div className={Classes[3]}>
                      <iframe title={Classes[3]} width="420" height="315"
   src={DataFinale[3]}>
   
   </iframe>
                      </div>
                      <div className={Classes[4]}>
                      <iframe title={Classes[4]} width="420" height="315"
   src={DataFinale[4]}>
   
   </iframe>
                       </div>
                       <div 
                        onClick = {() => RollRight()}
                       className='toright' >
              <strong><ArrowRight/> </strong>
           </div>           
             </div> 
         ) : <div> <strong>Load</strong> </div>
       }
       </Container>
     )
}


export default Carousel