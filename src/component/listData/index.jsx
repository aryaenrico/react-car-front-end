import Style from './listdata.module.css';
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Container,Row,Col,Button} from 'react-bootstrap';
import { mobilReducer,getMobil } from '../../reducers/mobil/mobil.slice';
function FilterCar() {
 const firstLoad = useRef(true)
  const { data, loading } = useSelector(mobilReducer)
  const dispatch = useDispatch();


  useEffect(() => {
      if(firstLoad.current) dispatch(getMobil());
      return () => {
          firstLoad.current = false
      }
    }, [])

    


  return (
    <section className={Style['filter-car']}>
      <Container>
            <Row className='justify-content-center'>
              <h1>{data.data.length}</h1>

            </Row>
      </Container>
    </section>
  );
}

export {FilterCar}
