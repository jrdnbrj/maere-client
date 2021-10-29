import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

import frutas from '../assets/img/frutas2.jpg'
import logo from '../assets/img/logo_2.svg'

import symborg from '../assets/img/symborg.svg'
import catawba from '../assets/img/catawba.svg'
import acp from '../assets/img/acp.svg'
import fcnecsa from '../assets/img/fcnecsa.svg'

import prod from '../assets/img/prod.png'


const GET_PRODUCT_HEADER = gql`
    query {
        getProductHeader {
            title
            text
        }
    }
`

const GET_CATEGORIES = gql`
    query getCategories {
        getCategories {
            name
            sequence
        }
    }
`

const GET_PRODUCTOS = gql`
    query {
        getProducts {
            name
            formulator
            category
            image
        }
    }
`

const Productos = () => {

    const [products, setProducts] = useState([])
    const [productsFilter, setProductsFilter] = useState([])
    const [brand, setBrand] = useState('')

    const { error: headerError, data: headerData } = useQuery(GET_PRODUCT_HEADER)
    const { error: categoryError, data: categoryData } = useQuery(GET_CATEGORIES)
    const { error, data } = useQuery(GET_PRODUCTOS, {
        onCompleted: (data) => {
            setProducts(data.getProducts)
            setProductsFilter(data.getProducts)
        },
        fetchPolicy: 'cache-and-network'
    })

    useEffect(() => {
        if (brand === '') setProductsFilter(products)
        else setProductsFilter(products.filter(product => product.formulator === brand))
        // eslint-disable-next-line
    }, [brand])

    const onChangeBrand = b => {
        if (b === brand) setBrand('')
        else setBrand(b)
    }

    headerError && console.log(headerError)
    categoryError && console.log(categoryError)
    error && console.log(error)

    return <>
        <section className="header">
            <img src={frutas} className="frutas" alt="frutas" />
            <section>
                <img src={logo} alt="logo" />
                {headerData && <>
                    <h3>{headerData.getProductHeader.title}</h3>
                    <p>{headerData.getProductHeader.text}</p>
                </>}
            </section>
        </section>
        <section className="bio-menu">
            {categoryData && categoryData.getCategories.map(category => {
                return <span key={category.sequence}>
                    <a href={`#${category.name.split(' ')[0]}`}>{category.name}</a>
                </span> 
            })}
        </section>
        { data &&
            <section className="products">
                <section className="row">
                    <img src={symborg} className="product-brand col" alt="Symborg" onClick={() => onChangeBrand('Symborg')} />
                    <img src={catawba} className="product-brand col" alt="Catawba" onClick={() => onChangeBrand('Catawba')} />
                    <img src={acp} className="product-brand col" alt="acp" onClick={() => onChangeBrand('ACP')} />
                    <img src={fcnecsa} className="product-brand col" alt="fenecsa" onClick={() => onChangeBrand('Fenecsa')} />
                </section>
                {categoryData && categoryData.getCategories.map(category => {
                    return <section className={category.name.split(' ')[0]} key={category.sequence}>
                        <h2 id={category.name.split(' ')[0]}>{category.name.toUpperCase()}</h2>
                        <section className="row product-list" id="row-correction">
                            { productsFilter.map(product => {
                                if (product.category === category.name) {
                                    return <section className="col-lg-3 col-12 col-sm-6" data-aos="fade-up" key={product.name}>
                                        {/* <img src={product.image} alt={product.name} /> */}
                                        <img src={prod} alt={product.name} />
                                        <a 
                                            href="https://www.catawbabrand.com/shields-up/" 
                                            target="_blank" rel="noreferrer"
                                        >
                                            <span>{product.name}</span>
                                        </a>
                                    </section>
                                }
                                return null
                            }) }
                        </section>
                    </section>
                }) }
            </section>
        }
    </>
}

export default Productos
