import React from "react";

const commentsData = [
  {
    name: "test",
    text: "test comment",
    replies: [
      {
        name: "test",
        text: "test comment",
        replies: [
          {
            name: "test",
            text: "test comment",
            replies: [
              {
                name: "test",
                text: "test comment",
                replies: [
                    {
                        name: "test",
                        text: "test comment",
                        replies: [],
                      },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "test",
        text: "test comment",
        replies: [],
      },
      {
        name: "test",
        text: "test comment",
        replies: [
          {
            name: "test",
            text: "test comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "test 1",
    text: "test 1 comment",
    replies: [],
  },
  {
    name: "test 2",
    text: "test 2 comment",
    replies: [],
  },
  {
    name: "test 3",
    text: "test 3 comment",
    replies: [],
  },
  {
    name: "test 4",
    text: "test 4 comment",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
