import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { fireDB } from '../../firebase/FireBaseConfig';

const OrderModal = (props) => {
  const cartItems = useSelector((state) => state.cart);
  const [cities, setCities] = useState([]);

  const config = {
      cUrl: 'https://api.countrystatecity.in/v1/countries/PK',
      ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
  };

  useEffect(() => {
      fetchCities();
  }, []);

  const fetchCities = () => {
      fetch(`${config.cUrl}/cities`, { headers: { "X-CSCAPI-KEY": config.ckey } })
          .then(response => response.json())
          .then(data => {
              setCities(data);
          })
          .catch(error => console.error('Error loading cities:', error));
  };

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [usercity, setUserCity] = useState('');
  const [paymentmethod, setPaymentMethod] = useState('');

  const buyNow = async () => {
    if (!name || !address || !mobileno || !usercity || !paymentmethod) {
      toast.error('All Fields Are Required');
      return;
    }

    const orderInfo = {
      addressInfo: {
        name,
        address,
        mobileno,
        usercity,
        paymentmethod,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        })
      },
      cartItems,
      email: JSON.parse(localStorage.getItem('user')).user.email,
      userid: JSON.parse(localStorage.getItem('user')).user.uid,
      status: "Confirmed",
      date: new Date().toLocaleString('en-US', {
        month: "short",
        day: "2-digit",
        year: 'numeric'
      }),
      time: Timestamp.now()
    };

    try {
      const orderRef = collection(fireDB, 'order');
      await addDoc(orderRef, orderInfo);
      setName('');
      setAddress('');
      setMobileNo('');
      setUserCity('');
      setPaymentMethod('');
      toast.success('Order Placed Successfully');
      props.onHide();
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='px-4'
    >
      <Modal.Header className='border-0' closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4 className='text-center mb-4'>Shipping Details</h4>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">Enter Full Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="fullname" placeholder="Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Enter Full Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" placeholder="Address" />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Enter Mobile Number</label>
          <input value={mobileno} onChange={(e) => setMobileNo(e.target.value)} type="text" className="form-control" id="number" placeholder="Mobile Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="delivery" className="form-label">Select City</label>
          <select id="delivery" className="form-select" onChange={(e) => setUserCity(e.target.value)}>
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city.iso2} value={city.iso2}>{city.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="payment" className="form-label">Payment Method</label>
          <select id="payment" className="form-select" onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Jazzcash">Jazzcash</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={buyNow} className='btn btn-outline-success w-100'>Order Now</button>
        <Button className='btn btn-dark w-100' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderModal;
