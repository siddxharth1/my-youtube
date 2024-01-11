import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: " User 1",
    commentText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
    replies: [
      {
        name: " User 1 r1",
        commentText:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
        replies: [
          {
            name: " User 1 r1 r1",
            commentText:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
          },
          {
            name: " User 1 r1 r2",
            commentText:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
            replies: [
              {
                name: " User 1 r1 r2 r1",
                commentText:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
              },
              {
                name: " User 1 r1 r2 r1",
                commentText:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
              },
            ],
          },
          {
            name: " User 1 r1 r3",
            commentText:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
          },
        ],
      },
    ],
  },
  {
    name: " User 2",
    commentText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
    replies: [
      {
        name: " User 2 r1",
        commentText:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
      },
    ],
  },
  {
    name: " User 3",
    commentText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
    replies: [
      {
        name: " User 3 r1",
        commentText:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
        replies: [
          {
            name: " User 3 r1 r1",
            commentText:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
          },
        ],
      },
    ],
  },
  {
    name: " User 4",
    commentText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam nam exercitationem asperiores? Explicabo fugit amet ",
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div className="">
        <Comment data={comment} />
        {comment.replies && (
          <div className="pl-3 border border-l-black border-t-0 border-r-0 border-b-0">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (<>
      <input type="text" className="border border-gray-400 w-full rounded-lg p-2 my-2 outline-none focus:border-gray-600"  placeholder="Comment"/>
      <CommentList comments={commentData} />
  </>
  );
};

export default CommentsContainer;
