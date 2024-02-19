import React from 'react'

const Form = () => {

    return (
    <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="c5f64e55-7ee5-4a20-a85a-20681a7f2512"/>
        <input type="text" name="name" required/>
        <input type="email" name="email" required/>
        <textarea name="message" required></textarea>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit Form</button>
    </form>
    )
}

export default Form