import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const Tweet = ({
  user,
  content,
  timestamp,
  comments,
  showComments,
  toggleComments,
}: {
  user: string;
  content: string;
  timestamp: string;
  comments: { content: string; owner: string }[];
  showComments: boolean;
  toggleComments: () => void;
}) => (
  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md mb-4">
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full bg-slate-400 dark:bg-gray-700 mr-3"></div>
      <div>
        <div className="font-bold text-lg text-gray-900 dark:text-white">
          {user}
        </div>
        <div className="text-sm text-gray-500">{timestamp}</div>
      </div>
    </div>
    <div className="text-gray-800 dark:text-gray-300 px-1">{content}</div>
    <button onClick={toggleComments} className="text-blue-500 mt-2 mx-1">
      {showComments ? 'Hide Comments' : 'Show Comments'}
    </button>

    {showComments && (
      <div className="mt-2">
        {comments.map((comment, index) => (
          <div key={index} className="text-gray-800 dark:text-gray-300 px-1">
            <span className="font-bold mr-2">{comment.owner}: </span>
            {comment.content}
          </div>
        ))}
      </div>
    )}
    <div className="flex flex-row items-center">
      <input
        className="flex-grow p-2 border-none rounded-lg focus:outline-none dark:bg-slate-800 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        placeholder="Write your Comment"
      ></input>

      <button className="px-2">
        <svg
          className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 1.843 0 3.586-.502 5.037-1.383L21.5 22l-1.619-4.537C21.123 16.632 22 14.426 22 12 22 6.477 17.523 2 12 2zM11 7v4H7v2h4v4h2v-4h4v-2h-4V7h-2z"
            fill=""
          />
        </svg>
      </button>
    </div>
  </div>
);

const Discussions = () => {
  const [notes, setNotes] = useState([
    {
      user: 'User One',
      content: 'This is the first tweet content!',
      timestamp: '2h ago',
      comments: [
        { content: 'Comment 1', owner: 'Commenter A' },
        { content: 'Comment 2', owner: 'Commenter B' },
      ],
      showComments: false,
    },
    {
      user: 'User Two',
      content: 'Another tweet with more content here.',
      timestamp: '4h ago',
      comments: [
        { content: 'Comment 3', owner: 'Commenter C' },
        { content: 'Comment 4', owner: 'Commenter D' },
      ],
      showComments: false,
    },
    {
      user: 'User Three',
      content: 'Tweet tweet tweet!',
      timestamp: '1d ago',
      comments: [
        { content: 'Comment 5', owner: 'Commenter E' },
        { content: 'Comment 6', owner: 'Commenter F' },
      ],
      showComments: false,
    },
  ]);

  const toggleComments = (index: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, i) =>
        i === index ? { ...note, showComments: !note.showComments } : note,
      ),
    );
  };

  return (
    <DefaultLayout>
      {/* Main Feed */}
      <div className="col-span-1 md:col-span-2">
        <div className="mb-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <div className="flex flex-row items-center">
            <input
              className="flex-grow p-2 border-none rounded-lg focus:outline-none dark:bg-slate-800 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Search..."
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
        <div className="mb-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <div className="flex flex-row items-center">
            <input
              className="flex-grow p-2 border-none rounded-lg focus:outline-none dark:bg-slate-800 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Discussion Title"
            ></input>

<button className="px-2">
  <svg
    className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.01 21.23L22 12 2.01 2.77C1.4 2.46 1.02 3.16 1.45 3.69L9.1 11.19C9.37 11.46 9.37 11.92 9.1 12.19L1.45 19.69C1.02 20.22 1.4 20.92 2.01 20.61L2.01 21.23ZM4 17L16.97 12L4 7V10.73L10.91 12L4 13.27V17Z"
      fill=""
    />
  </svg>
</button>


          </div>
          <textarea
            className="w-full h-20 rounded-lg border-none border-stroke bg-transparent py-4 px-2 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={6}
            placeholder="Write discussion content here.."
          ></textarea>
        </div>
        {notes.map((note, index) => (
          <Tweet
            key={index}
            user={note.user}
            content={note.content}
            timestamp={note.timestamp}
            comments={note.comments}
            showComments={note.showComments}
            toggleComments={() => toggleComments(index)}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Discussions;
