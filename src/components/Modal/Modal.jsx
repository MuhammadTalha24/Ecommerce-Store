import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OrderModal = (props) => {
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
        <input type="text" className="form-control" id="fullname" placeholder="Name" />
        </div>
        <div className="mb-3">
        <label htmlFor="address" className="form-label">Enter Full Address</label>
        <input type="text" className="form-control" id="address" placeholder="Address" />
        </div>
        <div className="mb-3">
        <label htmlFor="number" className="form-label">Enter Mobile Number</label>
        <input type="text" className="form-control" id="number" placeholder="Mobile Number" />
        </div>
        <label htmlFor="delivery" className="form-label">Payment Method</label>
        <select id="delivery" className="form-select">
        <option >Cash On Delivery</option>
        <option >Jazzcash</option>
        </select>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-outline-success w-100'>Order Now</button>
        <Button className='btn btn-dark w-100' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal
