import React from 'react';

const ProductsTable = ({ data, isOpen }) => {
  console.log(data);
  return (
    <div className={`${isOpen === true ? 'user__table' : 'table_hide'}`}>
      <table>
        <tr className="t-head">
          <th className="first">Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Image</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Reviews</th>
          <th className="last">Created At</th>
        </tr>
        <tr>
          {data.map((prod) => (
            <div key={prod._id} className="t-body">
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{prod.price}</td>
              <td>{prod.rating}</td>
              <td className="prod__image">
                <img src={prod.images[0].url} alt={prod.name} />
              </td>
              <td>{prod.category}</td>
              <td>{prod.stock}</td>
              <td>{prod.reviews}</td>
              <td>{prod.createdAt}</td>
            </div>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default ProductsTable;
