import React,{Component} from 'react';

class AddItemForm extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            product: {
                name: '',
                description: '',
                in_stock: 0,
                image_url: ''
            }
        }
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
    handleSubmit(event){
        event.preventDefault();
        this.props.handleSubmit(this.state.product);
    }
    render(){
        const {name, description, in_stock, image_url} = this.state.product;
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Nome do produto*</label>
                    <div className="col-sm-10">
                        <input 
                         type="text"
                         className="form-control" 
                         placeholder="nome" 
                         name='name' 
                         onChange={this.handleChange} 
                         value={name} 
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
                         value={description}
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
                         value={in_stock}
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
                         value={image_url}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-outline-primary col-sm-10">Adicionar</button>
                </div>
            </form>
        ) 
    }
};

export default AddItemForm;