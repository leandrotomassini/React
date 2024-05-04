

function ContentModal( { title, body, idx } ) {
  return (
    <div className="fade modal modal-xl" id={ "note" + idx } data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={ "note" + idx + "Label" } aria-hidden="true">
      <div className="modal- modal-dialog modal-dialog-scrollable modal-fullscreen-xl-down">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="fs-5 modal-title" id={ "note" + idx + "Label" }>Content modal</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2>{ title }</h2>
            <p>{ body }</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              <span className="pe-2">Close</span>
              <i className="bi bi-fullscreen-exit"></i>
            </button>
            <button type="button" className="btn btn-primary" data-bs-target="#editormodal" data-bs-toggle="modal">
              <span className="pe-2">Edit</span>
              <i className="bi bi-pencil"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentModal;