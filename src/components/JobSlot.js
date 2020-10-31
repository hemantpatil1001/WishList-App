import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import React, { useState,useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import EdiText from 'react-editext'


const JobSlot = (props) =>{



  const colors = ['5EA6FD','54BBE3','69F7FA','54E3BD','5EFDA5']

  const backgroundColor = '#69F7FA'
  const [notes,setNotes] = useState();

  const deleteJobSlot = () =>{

    const newList = props.list.filter((item) => item.wish !== props.wishCard.wish);
    console.log("+>>>>",newList)
    console.log(props)
    props.setList(newList);

    console.log('Deleted')
  }

  const addNote = note =>{

    setNotes(note);

  }




  return (
      <Jumbotron fluid style={{padding:20,marginTop:5,borderRadius:5}} >
        <Container>
          <Row >

            <Col xs={8} style = {{borderBottom:'1px solid #14a2b8',padding:10,fontWeight:'bold'}}>
              {props.wishCard.wish}
            </Col>

            <Col style = {{borderBottom:'1px solid #14a2b8'}}>
              <Button variant= 'outline-info' className="float-right" onClick={deleteJobSlot} >
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </Button>

            </Col>

          </Row>

          <Row>

            <Col   style = {{borderRight:'1px solid #14a2b8',marginTop:5,minHeight:'200px'}}>
              <Image src={props.wishCard.supportingDoc} fluid style = {{minHeight:'200px',maxHeight:'400px'}} />
            </Col>

            <Col  style = {{borderRight:'1px solid #14a2b8',marginTop:5,minHeight:'50px'}}>
               <span style = {{fontWeight:'bold '}}>Description :</span><br></br>{props.wishCard.wishDescription}
            </Col>

            <Col style ={{marginTop:5,minHeight:'50px'}}>
              <span style = {{fontWeight:'bold '}}>Notes</span>
                <EdiText
                  type='textarea'
                  onSave={addNote}
                  style = {{minHeight:'200px',maxHeight:'400px'}}
                />

            </Col>

          </Row>

          <Row>

          </Row>
        </Container>


      </Jumbotron>
  )
}

export default JobSlot;
