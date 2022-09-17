import React from 'react'
import "./ProductList.css"
import Product1 from "../Product/Product1"
import Product2 from "../Product/Product2"
import Product3 from "../Product/Product3"
import Product4 from "../Product/Product4"
import Product5 from "../Product/Product5"
import Product6 from "../Product/Product6"

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">
                Creative Innovation By Terence
                <hr />
            </h1>
            <p className="pl-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nesciunt odit necessitatibus, suscipit id nisi ab explicabo sed nostrum obcaecati reprehenderit, laboriosam quam voluptate perspiciatis nulla fugiat natus laborum modi.
            </p>
        </div>
        <div className="pl-list">
            <Product1/>
            <Product2/>
            <Product3/>
            <Product4/>
            <Product5/>
            <Product6/>

        </div>
        
       
    </div>
  )
}

export default ProductList