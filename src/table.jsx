import React from "react";
import style from "./table.module.css"

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
            <div className={style.divTable}>
                <table className={style.border}>
                    <caption className={style.captionOfTable}>SALES TABLE</caption>
                    <tr>
                        <th className={style.border}>ID</th>
                        <th className={style.border}>Name</th>
                        <th className={style.border}>Data</th>
                        <th className={`${style.paddingOfText} ${style.border}`}>Count</th>
                        <th className={`${style.paddingOfText} ${style.border}`}>Price, $</th>
                        <th className={`${style.paddingOfText} ${style.border}`}>Total amount, $</th>
                    </tr>
                    {products.map((item, i) => 
                            // {let countOfProduct = 1}
                            <Rows key={i} id={item.id} name={item.name} date={currentDate} count={item.count} price={item.price} amount={item.count * item.price}/>
                        )
                    }
                    <FooterOfTable total={products.reduce((sum, current) => {
                        return sum + current.count * current.price;
                    }, 0)} />
                </table> 
            </div>
        )
    }
}

class Rows extends React.Component{
    render() {
        return (
            <tr>
                <td className={`${style.idOfProduct} ${style.border}`}>{this.props.id}</td>
                <td className={`${style.nameOfProduct} ${style.paddingOfText} ${style.border}`}>{this.props.name}</td>
                <td className={`${style.paddingOfText} ${style.border}`}>{this.props.date}</td>
                <td className={`${style.centeredText} ${style.border}`}>{this.props.count}</td>
                <td className={`${style.centeredText} ${style.priceOfProduct} ${style.border}`}>{this.props.price}</td>
                <td className={`${style.centeredText} ${style.totalAmountOfProduct} ${style.border}`}>{this.props.amount}</td>
            </tr>
        )
    }
}

class FooterOfTable extends React.Component{
    render() {
        return (
            <tfoot>
                <td className={`${style.backcolor} ${style.border}`}></td>
                <td className={`${style.centeredText} ${style.backcolor} ${style.border}`}>Total</td>
                <td className={`${style.backcolor} ${style.border}`}></td>
                <td className={`${style.backcolor} ${style.border}`}></td>
                <td className={`${style.backcolor} ${style.border}`}></td>
                <td className={`${style.centeredText}  ${style.border} ${style.totalSum}`}>{this.props.total}</td>
            </tfoot>
        )
    }
}

export default Table;