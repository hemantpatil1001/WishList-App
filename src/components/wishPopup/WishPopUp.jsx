import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'


const WishPopup = (props) =>{
  const [wish, setWish] = useState();
  const [wishDescription, setWishDescription] = useState();
  const [supportingDoc, setSupportingDoc] = useState();
  const [notes,setNotes] = useState();

  console.log(">>>>>>>>>>>Wish",wish)


  const onClickContinue = () => {


    const wishCard = {
      wish,
      wishDescription,
      supportingDoc,
      notes
    }

    const newList = props.list.concat(wishCard);
    props.setList(newList);
    props.setShowWishPopUP(false)
    setWish('');
    setWishDescription('');
    setSupportingDoc('')


  }

  const setImageUrl = (props) => {

  }

  return(
    <Modal show={props.show}>

      <Modal.Header style= {{justifyContent:'center',alignItems:'center',textAlign:'center'}} >
        <Modal.Title >Make a wish</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{justifyContent:'center',alignItems:'center'}}>
        <Form style = {{padding:10}}>

           <Form.Control type="text" placeholder="It's always your wish" style={{marginTop:20,marginBottom:20}} onChange={(e)=>setWish(e.target.value)}/>
           <Form.Control  as="textarea" rows={3} placeholder="Describe your wish in few sentences"  style={{marginTop:20,marginBottom:20}} onChange={(e)=>setWishDescription(e.target.value)}/>
           <Form.File id="exampleFormControlFile1" label="Add an image or a supporting doc" onChange={(e)=>setSupportingDoc(URL.createObjectURL(e.target.files[0]))} />

           <Button  variant="primary"   block  style={{marginTop:20,marginBottom:20}} onClick={onClickContinue}>
              Continue
           </Button>

        </Form>

      </Modal.Body>

    </Modal>
  )

  }

export default WishPopup
