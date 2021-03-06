import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem, 
    Button,Modal,ModalHeader,ModalBody,Row, Label} from 'reactstrap';
import {Link} from 'react-router-dom'
import { Control, LocalForm, Errors} from 'react-redux-form'
import {Loading} from './LoadingComponent'
import { baseUrl } from '../Shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


const required=(val)=> val && val.length;
const maxLength=(len)=>(val)=>!(val)||(val.length<=len)
const minLength=(len)=>(val)=>(val)&&(val.length>=len)

class CommentForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    
    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishID,Number(values.rating),values.name,values.comment)
    }

    render(){
        return(
            <React.Fragment> 
                <div className='row'>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm className='ml-3 mr-3'onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Please type your name here"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     /> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
            </Modal>
            </React.Fragment>
        )
    }

}



function RenderDish({dish}){   
        return(          
            <div  className="col-12 col-md-5 m-1">
              <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl+dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
            </div>
            
        )         
}  
    
    

function RenderComments({comments}){
        if(comments){
            return (               
                <div className="row">
                    <h4>Comments</h4>
                    <ul className='list-unstyled' >
                    <Stagger in>
                    {comments.map((comment)=>{
                        return(
                            <Fade in>
                            <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                            </Fade>
                        )                      
                    })}
                    </Stagger>
                    </ul>
                </div>              
            )
        }
        else{
            return (<div></div>)
        }       
    
}

const DishDetail=(props)=>{
    if(props.isLoading){
        return  (
            <div className='container'>
                <div className='row'>
                    <Loading/>
                </div>
            </div>
        )
    }
    else if(props.errMess){
        return (
            <div className='container'>
                <div className='row'>
                   <h4>{props.errMess}</h4>
                </div>
            </div> 
        )
    }
    else if(props.dish!= null){
        return(
            <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <RenderDish dish={props.dish} />
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                    <CommentForm    postComment={props.postComment} 
                                    dishID={props.dish.id}/>
                </div>
            </div>
            </div>
            )       
    }
    else
        return (<div></div>)
        
}

export default DishDetail