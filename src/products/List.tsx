import { Link } from "react-router-dom";

import { useDeleteProductMutation, useGetProductsQuery } from "./productsApi";

const List = () => {
  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDelete = (id: any) => {
    const ok = confirm("ban co muon xoa k");
    if (ok) {
      deleteProduct(id);
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(item.id)}
                >
                  delete
                </button>

                <Link className="btn btn-primary" to={`/edit/${item.id}`}>
                  edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
