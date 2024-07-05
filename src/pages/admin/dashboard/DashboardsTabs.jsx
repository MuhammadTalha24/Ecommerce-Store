import React from 'react'
import { Link } from 'react-router-dom'

const DashboardsTabs = () => {
  return (
    <>
   <div className="container">
    <div className="row">
        <div className="col-md-12">
        <ul className="nav gap-5 justify-content-center nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-orders-tab" data-bs-toggle="pill" data-bs-target="#pills-orders" type="button" role="tab" aria-controls="pills-orders" aria-selected="true"><i className="bi bi-box-seam me-1"></i>Orders </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-products-tab" data-bs-toggle="pill" data-bs-target="#pills-products" type="button" role="tab" aria-controls="pills-products" aria-selected="false"><i className="bi bi-cart-check me-1"></i>Product</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-users-tab" data-bs-toggle="pill" data-bs-target="#pills-users" type="button" role="tab" aria-controls="pills-users" aria-selected="false"><i className="bi bi-person-fill me-1"></i>Users</button>
  </li>
 
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-orders" role="tabpanel" aria-labelledby="pills-orders-tab">
  <h3 className='text-center py-5'>Orders Details</h3>
  <table className="table table-secondary table-striped-column table-hover">
  <thead>
    <tr>
     <th scope="col">Payment Id</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">332</th>
      <td>Blue Shirt</td>
      <td><figure className="figure">
  <img src="..." className="figure-img img-fluid rounded" alt="..."/>
</figure></td>
      <td>Rs.1500</td>
      <td>Kids</td>
      <td>Hammad</td>
      <td>Street #3 Eden Valley Faisalabad</td>
      <td>03007967851</td>
      <td>talhaji880@gmail.com</td>
      <td>21 July 2024</td>
    </tr>
    <tr>
      <th scope="row">332</th>
      <td>Blue Shirt</td>
      <td><figure className="figure">
  <img src="..." className="figure-img img-fluid rounded" alt="..."/>
</figure></td>
      <td>Rs.1500</td>
      <td>Kids</td>
      <td>Hammad</td>
      <td>Street #3 Eden Valley Faisalabad</td>
      <td>03007967851</td>
      <td>talhaji880@gmail.com</td>
      <td>21 July 2024</td>
    </tr>
    <tr>
      <th scope="row">332</th>
      <td>Blue Shirt</td>
      <td><figure className="figure">
  <img src="..." className="figure-img img-fluid rounded" alt="..."/>
</figure></td>
      <td>Rs.1500</td>
      <td>Kids</td>
      <td>Hammad</td>
      <td>Street #3 Eden Valley Faisalabad</td>
      <td>03007967851</td>
      <td>talhaji880@gmail.com</td>
      <td>21 July 2024</td>
    </tr>
    
  </tbody>
</table>
  </div>
  <div className="tab-pane fade" id="pills-products" role="tabpanel" aria-labelledby="pills-products-tab">
  <h3 className='text-center py-5'>Products Details</h3>
 <Link  className='btn btn-dark mb-4' to={'/addproduct'}><i className="bi bi-box-seam me-2"></i>Add Product</Link>
  <table className="table table-secondary table-striped-column table-hover">
  <thead>
    <tr>
     <th scope="col">SR#</th>
     <th scope="col">Image</th>
      <th scope="col">Title</th>     
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Date</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><figure className="figure">
  <img src="..." className="figure-img img-fluid rounded" alt="..."/>
</figure></td>
<td>Blue Shirt</td>
      <td>Rs.1500</td>
      <td>Kids</td>
      <td>21 July 2024</td>
      <td><div className="d-flex gap-2">
      <Link className='btn btn-success' to={'/updateproduct'}>Edit</Link>
      <button className='btn btn-danger'>Delete</button>
        </div></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td><figure className="figure">
  <img src="..." className="figure-img img-fluid rounded" alt="..."/>
</figure></td>
<td>Blue Shirt</td>
      <td>Rs.1500</td>
      <td>Kids</td>
      <td>21 July 2024</td>
      <td><div className="d-flex gap-2">
      <button className='btn btn-success'>Edit</button>
      <button className='btn btn-danger'>Delete</button>
        </div></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td><figure className="figure">
  <img src="..." className="figure-img img-fluid rounded" alt="..."/>
</figure></td>
<td>Blue Shirt</td>
      <td>Rs.1500</td>
      <td>Kids</td>
      <td>21 July 2024</td>
      <td><div className="d-flex gap-2">
      <button className='btn btn-success'>Edit</button>
      <button className='btn btn-danger'>Delete</button>
        </div></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td><figure className="figure">
  <img src="..." className="figure-img img-fluid rounded" alt="..."/>
</figure></td>
<td>Blue Shirt</td>
      <td>Rs.1500</td>
      <td>Kids</td>
      <td>21 July 2024</td>
      <td><div className="d-flex gap-2">
      <button className='btn btn-success'>Edit</button>
      <button className='btn btn-danger'>Delete</button>
        </div></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td><figure className="figure">
  <img src="..." className="figure-img img-fluid rounded" alt="..."/>
</figure></td>
<td>Blue Shirt</td>
      <td>Rs.1500</td>
      <td>Kids</td>
      <td>21 July 2024</td>
      <td><div className="d-flex gap-2">
      <button className='btn btn-success'>Edit</button>
      <button className='btn btn-danger'>Delete</button>
        </div></td>
    </tr>
    
  </tbody>
</table>
  </div>
  <div className="tab-pane fade" id="pills-users" role="tabpanel" aria-labelledby="pills-users-tab" >
  <h3 className='text-center py-5'>Users Details</h3>
  <table className="table table-secondary table-striped-column table-hover">
  <thead>
    <tr>
     <th scope="col">SR#</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">332</th>

      <td>Hammad</td>
      <td>Street #3 Eden Valley Faisalabad</td>
      <td>03007967851</td>
      <td>talhaji880@gmail.com</td>
      <td>21 July 2024</td>
    </tr>
    <tr>
      <th scope="row">332</th>

      <td>Hammad</td>
      <td>Street #3 Eden Valley Faisalabad</td>
      <td>03007967851</td>
      <td>talhaji880@gmail.com</td>
      <td>21 July 2024</td>
    </tr>
   
    
  </tbody>
</table>
  </div>

</div>
        </div>
    </div>
   </div>
    </>
  )
}

export default DashboardsTabs