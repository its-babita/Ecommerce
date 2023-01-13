import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, DLT, REMOVE } from '../Services/Actions/action';

const CardsDetails = () => {

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [data,setData]=useState([])
  //console.log(data);

  const {id}=useParams();
  //console.log(id);
 const getdata = useSelector((state)=>state.cartreducer.carts);
 //console.log(getdata);

 const compare =()=>{
  let comparedata=getdata.filter((e)=>{
    return e.id == id
  });
  setData(comparedata);
 }

 useEffect(()=>{
 compare()
 },[id])

 const dlt=(id)=>{
  dispatch(DLT(id))
  navigate("/products")
 }

 //remove one

 const remove=(item)=>{
  dispatch(REMOVE(item))
 }

 //add data

 const send=(e)=>{
  //console.log(e);
  dispatch(ADD(e))
}

  return (
    <>
      <Wrapper className='container mt-2'>

        <h2 className='text-center'>Items Details Page</h2>

        <section className='container mt-3'>
          <div className="items_details">
          {
            data.map((ele)=>{
             return(
              <>
              <div className='items_img'>
              <img src={ele.imgdata} alt="" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>:{ele.rname}</p>
                    <p> <strong>Price</strong>:{ele.price}</p>
                    <p> <strong>Dishes</strong>:{ele.address}</p>
                    <p> <strong>Total</strong>:रु{ele.price *ele.qnty}</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                      <span onClick={ele.qnty <=1 ? ()=>dlt(ele.id):()=>remove(ele)} style={{fontSize:24}}>-</span>
                      <span style={{fontSize:22}}>{ele.qnty}</span>
                      <span onClick={()=>send(ele)} style={{fontSize:24}}>+</span>

                    </div>
                  </td>
                <td>
                  <p><strong>Rating:</strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★</span></p>
                  <p><strong>Order Review:</strong><span>{ele.somedata}</span></p>
                  <p><strong>Remove:</strong><span> <FontAwesomeIcon onClick={()=>dlt(ele.id)} icon={faTrash} style={{color:"red",fontSize:20,cursor:"pointer"}}/></span></p>
                </td>
                </tr>
              </Table>
            </div>
              </>
             )
            })
          }
          
          </div>
        </section>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
 .items_details{
      max-width: 900px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.082);
  }
  .items_img{
      flex: .4;
  }
  .items_img img{
      width: 30rem;
      border-radius: 5px;
  }
  .details{
      flex: .5;
  };
  .rating{
      background-color: green;
  }
    
  @media (max-width:772px){
      .iteamsdetails{
          flex-direction: column;
          align-items: center;
          justify-content: center;
      }
  }
  @media (max-width:450px){
    

  
      /* individual iteams details */
     
      .items_img img{
          width: 16rem;
      }
      
  }

`

export default CardsDetails