import './Form.css';

// if time: https://www.w3schools.com/react/react_forms.asp
// form handling

export default function Form(){

    return(
        <div className='form-container'>
            <form action="/">

                <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" required placeholder="Jane" />
                <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" required placeholder="Doe" />
                <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="janedoe@website.com" />
                <label for="order">Order Number</label>
                    <input type="text" id="order" name="order" placeholder="12-34567890" pattern="[0-9]{2}-[0-9]{8}" />
                <label for="reason">How Can We Help You?</label>
                    <select name="reason" id="reason">
                        <option value="Issue with my order">Issue with my online order</option>
                        <option value="Product-related question">Product-related question</option>
                        <option value="Shipping-related question">Shipping-related question</option>
                        <option value="Other">Other</option>
                    </select>
                <label for="comments">Comments</label>
                    <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Tell us why you're reaching out."></textarea>

                <button type="submit">Submit</button>
            
            </form>
        </div>
    )
}