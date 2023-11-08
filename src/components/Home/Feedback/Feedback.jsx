import React from 'react'
import feedbackPhoto from "../../Assets/img/feedback.png"
import { FormControl, FormGroup, TextField } from '@mui/material'
import "./_feedback.css"

function Feedback() {
  return (
    
    <section className='feedback'>
        <div className="container">
            <div className="feedback-content">
                <h4>Обратная связь!</h4>
                <div className="feedback-wrapper">
                    <div className="feedback-form">
                        <div className="feedback-form-content">
                            <p>Если у вас возникли затруднения в выборе, оставьте свои контактные данные и мы вам поможем!</p>
                            <h4>Мы перезвоним</h4>
                            <FormGroup className='feedback-form-group'>
                                <FormControl>
                                    <label className='feedback-label' htmlFor="name">Ваше имя</label>
                                    <TextField sx={{marginTop: "6px"}} className='feedback-input' color='warning' type='text' id='name' variant="outlined" label='Имя'/>
                                </FormControl>
                                <FormControl>
                                    <label className='feedback-label' htmlFor="location">Где живёте</label>
                                    <TextField sx={{marginTop: "6px"}} className='feedback-input' color='warning' type='text' id='location' variant="outlined" label='место заказа'/>
                                </FormControl>
                                <FormControl>
                                    <label className='feedback-label' htmlFor="phone">Телефон</label>
                                    <TextField sx={{marginTop: "6px"}} className='feedback-input' color='warning' type='text' id='phone' variant="outlined" label='+998'/>
                                </FormControl>
                            </FormGroup>
                            <div className='cover-btn-feedback'>
                                <button type='button' className='btn-feedback'>Отправить для обратного звонка</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feedback