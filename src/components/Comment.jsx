const Comment = ({data}) => {
  return (
    <div className="flex items-center p-2 my-1 bg-gray-200 dark:bg-zinc-700 gap-3">
      <img
      className="h-10"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt=""
      />
      <div>
        <h1 className="font-semibold">{data.name}</h1>
        <h1>{data.commentText}</h1>
      </div>
    </div>
  );
};

export default Comment;
