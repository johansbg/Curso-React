import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount(){
        console.log('Menu Component componentDidMount invoked')
    }

    componentDidUpdate(){
        console.log('Menu Component componentDidUpdate invoked')
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
                <li className="mb-3 mt-3">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
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
        console.log('Menu Component render invoked')
        const dish =this.props.dish;
        if(dish!=null)
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>
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