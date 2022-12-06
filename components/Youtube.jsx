export default function YouTube({ id }) {
    return (
      <div className="relative max-w-full pt-[56.25%]">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          allow="autoplay; encrypted-media fullscreen"
          title="Embedded YouTube video"
          className="absolute top-0 left-0 w-full h-full"
        />
       </div>
    );
  }