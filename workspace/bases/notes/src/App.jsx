import Masonry from 'react-masonry-css';

import EditorModal from './components/EditorModal';
import Card from './components/Card';


function App() {

  const dummyNotes = [
    { title: 'Header1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium.consectetur adipiscing elit. Maecenas volutpat egestas pretium.consectetur adipiscing elit. Maecenas volutpat egestas pretium. ', id: 1 },
    { title: 'Header2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. ', id: 2 },
    { title: 'Header3', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. ', id: 3 },
    { title: 'Header4', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. ', id: 4 },
    { title: 'Header5', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. Maecenas volutpat egestas pretium. ', id: 5 },
    { title: 'Header6', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat egestas pretium. ', id: 6 },
  ];

  return (
    <>
      <EditorModal />
      <div className="mt-5 text-center container">

        <Masonry
          breakpointCols={ { default: 3, 1200: 2, 768: 1 } }
          className="d-flex my-masonry-grid" columnClassName="my-masonry-grid_column"
        >
          {
            dummyNotes.map( note => {
              return <Card tite={ note.title } body={ note.body } key={ note.id } />;
            } )
          }
        </Masonry>

      </div>
      <div className="bottom-0 z-2 position-fixed m-4 end-0">
        <button className="d-flex align-items-center btn btn-primary" data-bs-toggle="modal" data-bs-target="#editormodal">
          <span className="pe-2">
            New note
          </span>
          <i className="bi bi-journal-plus fs-2"></i>
        </button>
      </div>
    </>
  );
}

export default App;
