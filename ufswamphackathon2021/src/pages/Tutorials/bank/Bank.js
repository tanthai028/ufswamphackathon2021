import React from 'react'
import './Bank.css';

export default function Bank() {
    return (
        <div className="tutorialPage">
          <p className="title">Tutorials</p>
           <div>
              <div className="modules">
              <p className = "headings" >Credit and Debit 101</p>
              </div>

              <div className="modules">
              <p className = "headings" >Taxes 101</p>
              </div>

              <div className="modules">
              <p className = "headings" >How To: Banking</p>
              </div>

              <div className="modules">
              <p className = "headings" >How To: Checks and Bills</p>
              </div>
              
           </div>
           <div className="checkContainer">
               <div className="check">
                   
               </div>
           </div>
        </div>
    )
}


