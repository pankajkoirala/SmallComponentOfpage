import React, { useEffect, useState } from "react";
import a from "../../asets/a.jpg";
import "./readLessMore.css"
import {token_key} from "../axiosConfig/constant/baseURL"

import jsonData from "./moreless.json";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";

let MoreLessButton = (props) => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectesId] = useState([]);
 

  useEffect(() => {
    setData(jsonData);
  }, []);

  let addId = (id) => {
    setSelectesId([...selectedId, id]);
  };
  let removeId = (id) => {
    setSelectesId(selectedId.filter((arg) => arg !== id));
  };
  return (
    <div>
    <div className=" row h-100 w-100 ">
   

      {data.map((arg) => {
        return (
          <div className="col-4">
            <div>
   
              <Card>
                <CardImg top width="100%" src={a} alt="Card image cap" />
                {selectedId.includes(arg.id)}

                <CardBody>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText
                    className= {selectedId.includes(arg.id) ? "more" : "less"}
                  >
                    {arg.detail}
        
                  </CardText>
                  {selectedId.includes(arg.id) ?  (
                    <Button
                      onClick={() => {
                        removeId(arg.id);
                      }}
                      className="m-2"
                    >
                      {" "}
                      read less
                    </Button>
                  ):(
                    <Button
                      onClick={() => {
                        addId(arg.id);
                      }}
                      className="m-2"
                    >
                      read more
                    </Button>
                  ) }
                  
                </CardBody>
               

              </Card>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};
export default MoreLessButton;
