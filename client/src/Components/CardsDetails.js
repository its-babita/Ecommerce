import React from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import styled from 'styled-components';

const CardsDetails = () => {
  return (
    <>
      <Wrapper className='container mt-2'>

        <h2 className='text-center'>Items Details Page</h2>

        <section className='container mt-3'>
          <div className="items_details">
            <div className='items_img'>
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>:Massala Theoryy</p>
                    <p> <strong>Price</strong>:रु300</p>
                    <p> <strong>Dishes</strong>:North Indian, Biryani,Mughlai</p>
                    <p> <strong>Total</strong>:रु300</p>
                  </td>
                <td>
                  <p><strong>Rating:</strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>3.5 ★</span></p>
                  <p><strong>Order Review:</strong><span>1175 + order placed from here recently</span></p>
                  <p><strong>Remove:</strong><span> <FontAwesomeIcon icon={faTrash} style={{color:"red",fontSize:20,cursor:"pointer"}}/></span></p>
                </td>
                </tr>
              </Table>
            </div>
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