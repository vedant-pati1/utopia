function SingleStory() {
  return (
    <div className="flex-shrink-0 w-24 h-24 rounded-full">
      <img
        src="/profile.png"
        alt="Story"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}

export default function StoryCoursel() {
  return (
    <div className="flex overflow-x-scroll p-4 space-x-4 scrollbar-hide w-[600px]">
      <SingleStory />
      <SingleStory />
      <SingleStory />
      <SingleStory />
      <SingleStory />
      <SingleStory />
      <SingleStory />
    </div>
  );
}
