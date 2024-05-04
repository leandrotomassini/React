import ContentModal from './ContentModal';


function Card( { title, body, idx } ) {

  return (
    <div className="mx-2 mb-3">
      <div className="card">
        <div className="z-2 ms-auto">
          <button className="d-flex align-items-center mt-2 btn btn-outline-danger btn-sm me-3">
            <span className="pe-1">Delete</span>
            <i className="bi bi-trash3 fs-6"></i>
          </button>
        </div>
        <div className="card-body">
          <h2>{ title }</h2>
          <p>{ body }</p>
          <a type="button" className="stretched-link" data-bs-toggle="modal" data-bs-target={ "#note" + idx }></a>
        </div>
      </div>
      <ContentModal title={ title } body={ body } id={ idx } />
    </div>
  );
}

export default Card;