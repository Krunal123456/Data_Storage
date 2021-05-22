import React, { Component } from 'react';

export default class FormDataComponent extends Component {
    userData;

    constructor(props) {
        super(props);
        this.onChangeOrder = this.onChangeOrder.bind(this);
        this.onChangePurchase = this.onChangePurchase.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            order: '',
            purchase: '',
            name: '',
            amount:'',
            item:'',
            quantity:'',
            price:'',
            total:'',
            reset:''
        }
    }
    onChangeOrder(e) {
        this.setState({ order: e.target.value })
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangePurchase(e) {
        this.setState({ purchase: e.target.value })
    }

    onChangeAmount(e) {
        this.setState({ amount: e.target.value })
    }
    onChangeItem(e) {
        this.setState({ item: e.target.value })
    }
    onChangeQuantity(e) {
        this.setState({ quantity: e.target.value })
    }
    onChangePrice(e) {
        this.setState({ price: e.target.value })
    }
    onChangeTotal(e) {
        this.setState({ total: e.target.value })
    }
    onChangeReset(e) {
        this.setState({reset: e.target.value })
    }
  

  
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                order: this.userData.order,
                name: this.userData.name,
                purchase: this.userData.purchase,
                amount: this.userData.amount,
                Item: this.userData.item,
                quantity: this.userData.quantity,
                price: this.userData.price,
                total: this.userData.total

            })
        } else {
            this.setState({
                order: '',
                name: '',
                purchase: '',
                amount: '',
                item:'',
                quantity:'',
                price:'',
                total:'',
                reset:''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Order No.</label>
                        <input type="text" className="form-control" value={this.state.order} onChange={this.onChangeOrder} />
                    </div>
                    <div className="form-group">
                        <label>Customer Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Purchase Date</label>
                        <input type="date" className="form-control" value={this.state.date} onChange={this.onChangePurchase} />
                    </div>
                    <div className="form-group">
                        <label>Total Amount</label>
                        <input type="number" className="form-control" value={this.state.amount} onChange={this.onChangeAmount} />
                    </div>
                    <div className="form-group">
                        <label>Item Name</label>
                        <input type="text" className="form-control" value={this.state.item} onChange={this.onChangeItem} />
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" className="form-control" value={this.state.quantity} onChange={this.onChangeQuantity} />
                    </div>
                    <div className="form-group">
                        <label>Per Unit Price</label>
                        <input type="Number" className="form-control" value={this.state.price} onChange={this.onChangePrice} />
                    </div>
                    <div className="form-group">
                        <label>Total Price</label>
                        <input type="text" className="form-control" value={this.state.total} onChange={this.onChangeTotal} />
                    </div>
                    <button type="submit" className="btn btn-primary ">Save</button>
                    <button type="reset" className="btn btn-secoundary">Reset</button>
                </form>
            </div>
        )
    }
}
