import React, { useState } from 'react';
import { ProductBase } from '../../API/API';
import { TextField, FormControl, MenuItem, FormGroup } from '@mui/material';
import "./_product.css";
import { useEffect } from 'react';

function Product() {
    const [size, setSize] = useState("По размерам");
    const [color, setColor] = useState("По цвету");
    const [style, setStyle] = useState("По стилю");
    const [form, setForm] = useState('По форме');
    const [group, setGroup] = useState('По составу');
    const [more, setMore] = useState('ещё');
    const [product, setproduct] = useState([]);

    useEffect(() => {
        setproduct(ProductBase);
    }, [])

  return (
    <section className='product'>
        <div className="container">
            <div className="product-content">
                <h4>Наши новейшие ковры!</h4>
                <p>В каждый ковер вложена душа мастеров, и все это именно для вас.</p>
                <div className="category-product">
                    <form action="#">
                        <div className="category-item">
                            <FormControl sx={{width: '100%'}}>
                                <FormGroup>
                                    <TextField
                                    id='outlined-select-currency'
                                    select 
                                    color='warning'
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}>
                                        <MenuItem value='По размерам'>
                                            По размерам
                                        </MenuItem>
                                        <MenuItem value='Size 1'>
                                            Size - 1
                                        </MenuItem>
                                        <MenuItem value='Size 2'>
                                            Size - 2
                                        </MenuItem>
                                    </TextField>
                                </FormGroup>
                            </FormControl>
                        </div>
                        <div className="category-item">
                            <FormControl sx={{width: '100%'}}>
                                <FormGroup>
                                    <TextField
                                    id='outlined-select-currency'
                                    select 
                                    color='warning'
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}>
                                        <MenuItem value='По цвету'>
                                            По цвету
                                        </MenuItem>
                                        <MenuItem value='Size 1'>
                                            Color - 1
                                        </MenuItem>
                                        <MenuItem value='Size 2'>
                                            Color - 2
                                        </MenuItem>
                                    </TextField>
                                </FormGroup>
                            </FormControl>
                        </div>
                        <div className="category-item">
                            <FormControl sx={{width: '100%'}}>
                                <FormGroup>
                                    <TextField
                                    id='outlined-select-currency'
                                    select 
                                    color='warning'
                                    value={style}
                                    onChange={(e) => setStyle(e.target.value)}>
                                        <MenuItem value='По стилю'>
                                            По стилю
                                        </MenuItem>
                                        <MenuItem value='Size 1'>
                                            Style - 1
                                        </MenuItem>
                                        <MenuItem value='Size 2'>
                                            Style - 2
                                        </MenuItem>
                                    </TextField>
                                </FormGroup>
                            </FormControl>
                        </div>
                        <div className="category-item">
                            <FormControl sx={{width: '100%'}}>
                                <FormGroup>
                                    <TextField
                                    id='outlined-select-currency'
                                    select 
                                    color='warning'
                                    value={form}
                                    onChange={(e) => setForm(e.target.value)}>
                                        <MenuItem value='По форме'>
                                            По форме
                                        </MenuItem>
                                        <MenuItem value='Size 1'>
                                            Form - 1
                                        </MenuItem>
                                        <MenuItem value='Size 2'>
                                            Form - 2
                                        </MenuItem>
                                    </TextField>
                                </FormGroup>
                            </FormControl>
                        </div>
                        <div className="category-item">
                            <FormControl sx={{width: '100%'}}>
                                <FormGroup>
                                    <TextField
                                    id='outlined-select-currency'
                                    select 
                                    color='warning'
                                    value={group}
                                    onChange={(e) => setGroup(e.target.value)}>
                                        <MenuItem value='По составу'>
                                            По составу
                                        </MenuItem>
                                        <MenuItem value='Size 1'>
                                            Group - 1
                                        </MenuItem>
                                        <MenuItem value='Size 2'>
                                            Group - 2
                                        </MenuItem>
                                    </TextField>
                                </FormGroup>
                            </FormControl>
                        </div>
                        <div className="category-item">
                            <FormControl sx={{width: '100%'}}>
                                <FormGroup>
                                    <TextField
                                    id='outlined-select-currency'
                                    select 
                                    color='warning'
                                    value={more}
                                    onChange={(e) => setMore(e.target.value)}>
                                        <MenuItem value='ещё'>
                                            ещё
                                        </MenuItem>
                                        <MenuItem value='Size 1'>
                                            More - 1
                                        </MenuItem>
                                        <MenuItem value='Size 2'>
                                            More - 2
                                        </MenuItem>
                                    </TextField>
                                </FormGroup>
                            </FormControl>
                        </div>
                    </form>
                </div>
                <div className="product-cards">
                    {
                        product.map((item, index) => {
                            return (
                                <div key={index + 1} className="product-card-item">
                                    <img src={item.product_images} alt={item.product_name} />
                                    <p className='category-text'>
                                        {item.product_category}
                                    </p>
                                    <p className='product-name-text'>
                                        <strong>
                                            {item.product_name}
                                        </strong> 
                                    </p>
                                    <p className='product-price'>
                                        {item.product_price}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='cover-more-btn'>
                    <button className='more-product-btn' type='button'>
                        Посмотреть все
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product