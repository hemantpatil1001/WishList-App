import React, { useState,useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import InputGroup from 'react-bootstrap/InputGroup'

import ListGroup from 'react-bootstrap/ListGroup'
import JobSlot from './JobSlot'
import ImageUploader from 'react-images-upload'
import logo from './148059.svg';
import WishPopup from './wishPopup/WishPopUp'


const ListPage = () => {

  const initialList = [];
  const [showWishPopUP, setShowWishPopUP] = useState(false);    //controls the Add Wish list popup
  const [count, setCount] = useState(0);    //No. of wishes added
  const [list, setList] = useState(initialList);    // list of all the wishes added so far

  const colors = ['5EA6FD','54BBE3','69F7FA','54E3BD','5EFDA5'] // random color combos






  const onClickAddButton = () => {

    setShowWishPopUP(true);

  }




    const itemsList = list.map((item) =>
        // <li key={item.companyName}>{item.companyName} {item.jobTitle}</li>
        <JobSlot wishCard = {item} setList = {setList} list={list}/>
    );

console.log("List : ",list)


    return (

      <div className='bg' style = {{backgroundImage: 'linear-gradient(to right, #2BC0E4 0%, #EAECC6 51%, #2BC0E4 100%)',minHeight:"100vh"}}>

        <Container className='bg'  style = {{justifyContent:'center',alignItems:'center', padding:10}}>

            <div style = {{textAlign:'center', fontFamily:'Trattatello'}}> <h3> WISHLIST </h3></div>
            <div style = {{textAlign:"center"}}> <p> {list.lenght} Wishes </p></div>
            <Button style = {{fontSize:25}} variant= 'light' size="sm" block onClick={()=>{onClickAddButton()}}>+</Button>

            <Container>
              {itemsList}
            </Container>

            <WishPopup show={showWishPopUP} setShowWishPopUP = {setShowWishPopUP} list = {list} setList = {setList}/>

        </Container>
      </div>


  )
}

export default ListPage;
