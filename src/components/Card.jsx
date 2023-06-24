import React, { useEffect, useState } from "react";
import {
    Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
} from "reactstrap";

export default function CardMenu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const { categories } = await response.json();

      setData(categories);
    } catch (error) {
      console.error("Error fetching data: " + error);
    }
  };

  return (
    <>
      <h1 className="text-center">Nuestro menú</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => (
            <div className="col-md-4 mb-4" key={item.idCategory}>
              <Card>
                <CardImg
                  top
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                />
                <CardBody>
                  <CardTitle className="text-bold">
                    Nombre del plato: {item.strCategory}
                  </CardTitle>
                  <Button className="btn btn-primary btn-block" onClick={console.log("Botón presionado")}>Ábreme</Button>
                  {/* <CardText>
                    Descripción: {item.strCategoryDescription}
                  </CardText> */}
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
