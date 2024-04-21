import React from 'react'
import { checkOtp } from '../../Services/auth'

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = async (event) => {
    event.preventDefault()
    if (code.length !== 5) {
      return
    }
    
    const {response , error } = await checkOtp(mobile , code);
    if (response) {
      console.log(response);
    }

    if (error) {
      console.log(error.response.data.message);
    }
  }

  const handleStepChange = () => {
    setStep(1);
  }

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده </p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید </span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input type="text" id='input' placeholder='کد تایید' value={code} onChange={(e) => setCode(e.target.value)} />
      <button type='submit'>ورود</button>
      <button onClick={handleStepChange}>تغییر شماره موبایل</button>
    </form>
  )
}

export default CheckOtpForm