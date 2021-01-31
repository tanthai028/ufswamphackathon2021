import React from 'react'
import './Bank.css';

export default function Bank() {
    return (
        <div className="tutorialPage">
          <p className="title">Banking 101</p>
           <div className="explainBank">
            <p className="text">Why use a bank?</p>
                <ul className="text">
                    <li>Makes it possible to shop online and in stores</li>
                    <li>Allows you bills and withdraw money from ATMs</li>
                    <li>Allows you to deposit and lend money</li>
                    <li>Banks are secure, convienient and lets you be able to invest</li>
                    <li>Offers higher interest rates than traditional banks and charge less fees</li>
                </ul>
           </div>

           <div className="explainBank">
            <p className="text">Choosing a bank</p>
                <p className="text2">Storing your money in cash isn't always safe. There are many examples of why it isn't safe. 
                    For example, in the case of a burglary, someone you know taking your money, a natural disaster, or a fire in your house. In summary, if money is something hard to get for you, you can't afford
                    to lose it. Banks are the most secure places to store your money. This means that any money you store in banks will be protected, as long as you choose the right bank.
                </p>

                <p className="text">You want to look for banks that have:</p>
                <ul className="text">
                    <li>
                        <a href="https://www.investopedia.com/terms/f/fdic.asp">Federal Deposit Insurance Corporation (FDIC)</a>
                    </li>
                    <li>
                        <a href="https://www.investopedia.com/terms/c/creditunion.asp">Credit union</a> or&nbsp; 
                        <a href="https://www.investopedia.com/terms/n/ncua-insured-institution.asp">National Credit Union Association insurance)</a>
                    </li>
                </ul>
           </div>

           <div className="explainBank">
            <p className="text">Bank Fees</p>
            <p className="text2">To make a profit and pay operating expenses, banks typically charge for the services they provide. 
            When a bank lends you money, it charges interest on the loan. Even fee-free checking and savings accounts have some fees.</p>

            <p className="text2">Here are some situation where you may encounter bank fees:</p>
            <ul className="text">
                <li>You may encounter fees for letting your balance fall below a certain threshold</li>
                <li>Not having your paycheck directly deposited to your account, overdrawing your account</li>
                <li>Using an ATM</li>
                <li>Requesting paper statements, and even closing your account</li>
            </ul>
           </div>

           <div className="explainBank">
            <p className="text">Smart Banking Tips</p>
            <ol className="text2">
                <li>Re-evaluate your bank</li>
                <li>Don’t assume your bank is giving you the best rate</li>
                <li>Don’t let a high rate fool you</li>
                <li>Strategically plan your bank interactions</li>
                <li>Communicate if you plan to close an account</li>
                <li>Utilize a CD for a fixed APY</li>
                <li>Closing a savings or money market account too soon could cost you</li>
                <li>Get the best of both worlds to maximize your APY</li>
                <li>Don’t forget about that card you never use</li>
                <li>The same goes for your bank account</li>
                <li>Let your bank know when you’re traveling</li>
                <li>Budgeting will help you save</li>
            </ol>
           </div>

           <div className="checkContainer">
               <div className="check">
                   
               </div>
           </div>
        </div>
    )
}


