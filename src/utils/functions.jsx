export default function convertTextToLinks(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text?.split(urlRegex).map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={i}
          href={part}
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}
