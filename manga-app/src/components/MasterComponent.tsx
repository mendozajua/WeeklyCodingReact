import {useEffect, useState} from "react";
import {MangaData} from "../database/manga_data";
import {Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import useMangaNames from "../customHooks/manga-names";
import {IMangaData} from "../models/manga-models";

export const MasterComponent = () => {
    const [toggleDetail, setToggleDetail] = useState(false);
    const [selected, setSelected] = useState(undefined as unknown as IMangaData || undefined);
    const mangaNames = useMangaNames();

    const detailFunc = (chosenManga:IMangaData)=>{
        setSelected(chosenManga);
        console.log("Selected manga", chosenManga);
        setToggleDetail(true);
    }
    const listManga = (e:any)=>{
        e.preventDefault();
        setToggleDetail(false);
    }

    return (
        <Container>
            {!toggleDetail &&
            <Row>
                <Col></Col>
                <Col style={{marginTop: "50px"}}>
                    <ListGroup>
                        {MangaData?.map((n, index) => {
                            return index % 2 == 0 ?
                                <ListGroup.Item onClick ={()=> detailFunc(n)} key={index} action variant="danger">{n.name}</ListGroup.Item>
                                :
                                <ListGroup.Item onClick ={()=> detailFunc(n)} key={index} action variant="warning">{n.name} </ListGroup.Item>
                        })}
                    </ListGroup>
                </Col>
                <Col></Col>
            </Row>
            }
            {toggleDetail &&
                <Card>
                    <Button onClick={(e)=>listManga(e)}>Back to List of Manga</Button>
                    <Card.Header>{selected.name}</Card.Header>
                    <Card.Body>
                        <ListGroup>
                            {Object.entries(selected).map(([key,val],i)=>{
                                return(
                                    <ListGroup.Item key={i}>{key}: {val}</ListGroup.Item>
                                )
                            })
                            }
                        </ListGroup>
                    </Card.Body>
                </Card>
            }
        </Container>
    )
}
