import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }
    renderDish(dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>                      
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){
        const Comments = comments.map((comment) => 
            <div key={comment.id}>
                <li className="mb-3 mt-3">{comment.comment}</li>
                <li className="mb-3 mt-3">-- {comment.author} , {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                }).format(new Date(Date.parse(comment.date)))}</li>
            </div>
        );
        
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">{Comments}</ul>
            </div>
        );
        
    }
    render() {
        const dish =this.props.dish;
        if(dish!=null)
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
}

export default DishDetail;