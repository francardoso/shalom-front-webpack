import React, {Component} from 'react';
import imgPlaceHolderURL from '../../assets/images/image-placeholder.png';

class ItemDetails extends Component{
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            editing: false, 
            product: {
                name: this.props.name,
                description: this.props.description,
                in_stock: this.props.in_stock,
                image_url: this.props.image_url
            }
        }
    }
    handleSubmit(){
        const {product} = this.state;
        this.handleEdit();
        this.props.handleEdit(product);
    };
    handleEdit(){
        this.setState({
            ...this.state,
            editing: !this.state.editing
        })
    }
    handleChange(event){
        event.preventDefault();
        const inputName = event.target.name;
        switch(inputName){
            case 'name':
                this.setState({
                    ...this.state,
                    product:{
                        ...this.state.product,
                        name: event.target.value
                    }
                });
                break;
            case 'description':
                this.setState({
                    ...this.state,
                    product:{
                        ...this.state.product,
                        description: event.target.value
                    }
                });
                break;
            case 'in_stock':
                this.setState({
                    ...this.state,
                    product:{
                        ...this.state.product,
                        in_stock: event.target.value
                    }
                });
                break;
            case 'image_url':
                this.setState({
                    ...this.state,
                    product:{
                        ...this.state.product,
                        image_url: event.target.value
                    }
                });
                break;
            default:
                return;
        }
    }
    render(){
        const {name, description, image_url, in_stock,handleDelete} = this.props;
        return (
            <div onSubmit={() =>{}} className="card mb-3 item-details-card">
                <img src={image_url ? image_url : imgPlaceHolderURL} className="card-img-top" alt={name}/>
                {
                    !this.state.editing ?
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">No estoque: {in_stock}</small></p>
                        <div className="btn-group" role="group" aria-label="crud buttons">
                            <button type="button" className="btn btn-info" onClick={this.handleEdit}>Editar</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Excluir</button>
                        </div>
                    </div>
                    :
                    <form autoComplete="off">
                        <div className="form-group">
                            <label className="col-sm-2 col-form-label">Nome do produto*</label>
                            <div className="col-sm-10">
                                <input 
                                type="text"
                                className="form-control" 
                                placeholder="nome" 
                                name='name' 
                                onChange={this.handleChange} 
                                value={this.state.product.name} 
                                required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 col-form-label">Descrição</label>
                            <div className="col-sm-10">
                                <textarea 
                                className="form-control" 
                                rows="3" 
                                placeholder="uma breve descrição sobre o produto, opcional"  
                                name='description' 
                                onChange={this.handleChange}
                                value={this.state.product.description}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 col-form-label">Quantidade</label>
                            <div className="col-sm-10">
                                <input 
                                type="number" 
                                className="form-control" 
                                min="0" 
                                name='in_stock' 
                                onChange={this.handleChange}
                                value={this.state.product.in_stock}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 col-form-label">Imagem</label>
                            <div className="col-sm-10">
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="exemplo: https://pixabay.com/static/img/logo_square.png" 
                                name='image_url' 
                                onChange={this.handleChange}
                                value={this.state.product.image_url}
                                />
                            </div>
                        </div>
                        <div className="btn-group" role="group" aria-label="crud buttons">
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Salvar</button>
                            <button type="button" className="btn btn-secondary" onClick={this.handleEdit}>Cancelar</button>
                        </div>
                    </form>
                }
            </div>
        )
    }
};

export default ItemDetails;