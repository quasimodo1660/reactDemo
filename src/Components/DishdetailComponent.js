import React,{Component} from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Dishdetail extends Component{

    renderComments=(comments)=>{
        if(comments){
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul>
                    {comments.map((comment)=>{
                        return(
                            <li className='list-unstyled' key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {comment.date}</p>
                            </li>
                        )                      
                    })}
                    </ul>
                </div>
            )
        }
        else
            return (<div></div>)
    }

    render(){
        if(this.props.dish==null)
            return (<div></div>)
        else{
            return(
            <div className='row'>
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                {this.renderComments(this.props.dish.comments)}
            </div>
            )
        }
    }
}