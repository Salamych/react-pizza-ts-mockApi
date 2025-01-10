import React from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

type PizzaObj = {
  imageUrl: string;
  title: string;
  price: number;
}

export default function FullPizza(){

  const navigate = useNavigate();

  const [ pizza, setPizza ] = React.useState<PizzaObj>();
  const { id } = useParams();

  const fetchPizza = async () => {
    try {
      const {data} = await axios.get(`https://67724fe2ee76b92dd491dd02.mockapi.io/items/${id}`);
      setPizza(data);
    } catch (error) {
      alert('Ошибка при получении пиццы!');
      navigate('/');
    }
  }

  React.useEffect(() => {
    fetchPizza();
  }, []);


  const contentRender = !pizza ? 'Loading....' : 
  (<>
    <img src={pizza.imageUrl}/>
    <h2>{pizza.title}</h2>
    <h4>{pizza.price} ₽</h4> 
  </>);

  return (
    <div className="container">
      {contentRender}
    </div>
  );
}