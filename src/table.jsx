import React from "react";
import './App.css';

class Table extends React.Component{
    render() {
        let date = new Date; 
        let currentDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        let products = [
            {
                id: "56279",
                name: "heimish ALL CLEAN WHITE CLAY FOAM",
                count: 1,
                price: 14
            },
            {
                id: "52690",
                name: "ARAVIA Flower Lifting Toner",
                count: 2,
                price: 8
            },
            {
                id: "76570",
                name: "[Thinkco] AHA BHA PHA heal centella cica toner",
                count: 2,
                price: 15
            },
            {
                id: "92185",
                name: "erborian MILK&PEEL MASK",
                count: 1,
                price: 50
            },
            {
                id: "04875",
                name: "FarmStay Ceramide Every Night Sleeping Pack",
                count: 1,
                price: 13
            },
            {
                id: "65921",
                name: "[Thinkco] Niacinamide Brightening Ampoule",
                count: 3,
                price: 16
            },
            {
                id: "19645",
                name: "ICON SKIN Night Miracle Multi-Acid Serum",
                count: 1,
                price: 18
            },
            {
                id: "27628",
                name: "CLINIQUE moisture surge eye",
                count: 2,
                price: 47
            },
            {
                id: "26479",
                name: "ICON SKIN Aqua Recovery Healuronic Mineral Cream",
                count: 3,
                price: 8
            },
            {
                id: "71374",
                name: "ICON SKIN HEADRATING SUNSCREEN 50 SPF",
                count: 2,
                price: 23
            },
            {
                id: "19243",
                name: "LANCASTER Sun Sport Invisible Face Gel Matte Finish 30 SPF",
                count: 1,
                price: 36
            }
        ]
        return (
            <div className="divTable">
                <table className="border">
                    <caption className="captionOfTable">SALES TABLE</caption>
                    <tr>
                        <th className="border">ID</th>
                        <th className="border">Name</th>
                        <th className="border">Data</th>
                        <th className="paddingOfText border">Count</th>
                        <th className="paddingOfText border">Price, $</th>
                        <th className="paddingOfText border">Total amount, $</th>
                    </tr>
                    {products.map(item => 
                            // {let countOfProduct = 1}
                            <Rows id={item.id} name={item.name} date={currentDate} count={item.count} price={item.price} amount={item.count * item.price}/>
                        )
                    }
                </table> 
            </div>
        )
    }
}

class Rows extends React.Component{
    render() {
        return (
            <tr>
                <td className="idOfProduct border">{this.props.id}</td>
                <td className="nameOfProduct paddingOfText border">{this.props.name}</td>
                <td className="paddingOfText border">{this.props.date}</td>
                <td className="centeredText border">{this.props.count}</td>
                <td className="centeredText priceOfProduct border">{this.props.price}</td>
                <td className="centeredText totalAmountOfProduct border">{this.props.amount}</td>
            </tr>
        )
    }
}

export default Table;