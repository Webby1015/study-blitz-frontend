import { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import api from '../services/api';
import { Document, Page } from '@react-pdf/renderer';

const Note = ({
  title,
  URL,
}: {
  title: string;
  URL: string;
//   toggleComments: () => void;
}) => (
  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md mb-4">
    <div className="flex items-center mb-2">
      <div>
        <div className="font-bold text-lg m-1 text-gray-900 dark:text-white">
          {title}
        </div>
      </div>
    </div>

    <div className="mt-2">
      {/* <iframe src={URL} title="PDF Viewer" className="w-full h-100"></iframe> */}
      {/* <iframe src="https://drive.google.com/file/d/1ftt9UVsALRYKOyhvNZ8WgvKUDKS-0XU5/preview" width="640" height="480" allow="autoplay"></iframe> */}
      <button onClick={()=> window.open("https://drive.google.com/file/d/1ftt9UVsALRYKOyhvNZ8WgvKUDKS-0XU5/preview", "_blank")} >View PDF</button>
    </div>
    
    {/* <button onClick={toggleComments} className="text-blue-500 mt-2">
      {showComments ? 'Hide Comments' : 'Show Comments'}
    </button>
    {showComments && (<></>
      <div className="mt-2">
        {comments.map((comment, index) => (
          <div key={index} className="text-gray-800 dark:text-gray-300 px-1">
            <span className="font-bold">{comment.owner}: </span>
            {comment.content}
          </div>
        ))}
      </div>
    )} */}
  </div>
);

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([
    { title: 'dummy', URL: '' },
  ]);
  const [notesCopy, setNotesCopy] = useState([
    { title: 'dummy', URL: '' },
  ]);

//   const toggleComments = (index: number) => {
//     setNotes((prevNotes) =>
//       prevNotes.map((note, i) =>
//         i === index ? { ...note, showComments: !note.showComments } : note,
//       ),
//     );
//   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/notes');
        // console.log(response.data.data);
        setNotes(response.data.data);
        setNotesCopy(response.data.data)
        // toast(response.data.message)
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //   return loading ? (
  //     <Loader />
  //   ) : (
  //     <>
  //       <Routes></Routes>

  return (
    <DefaultLayout>
      {/* Main Feed */}
      <div className="col-span-1 md:col-span-2">
        <div className="mb-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <div className="flex flex-row items-center">
            <input 
              className="flex-grow p-2 border-none rounded-lg focus:outline-none dark:bg-slate-800 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Search..."
              onChange={(event)=>{if(event.target.value.length===0){
                setNotes(notesCopy)
              }else{
                setNotes([...notes.filter(item => item.title.includes(event.target.value))])}}
              }
                
            ></input>
            <button className="px-2">
              <svg
                className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </div>

        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            URL={note.URL}
            // toggleComments={() => toggleComments(index)}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Notes;
