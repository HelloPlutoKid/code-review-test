export default function Videos() {
  const videos = [
    {
      title: "최신 영상 1",
      description: "흥미로운 코딩 주제를 다룹니다",
      thumbnail: "https://via.placeholder.com/400x225/6366f1/ffffff?text=Video+1",
    },
    {
      title: "최신 영상 2",
      description: "개발 팁과 트릭을 공유합니다",
      thumbnail: "https://via.placeholder.com/400x225/8b5cf6/ffffff?text=Video+2",
    },
    {
      title: "최신 영상 3",
      description: "실전 프로젝트 튜토리얼",
      thumbnail: "https://via.placeholder.com/400x225/3b82f6/ffffff?text=Video+3",
    },
    {
      title: "최신 영상 4",
      description: "프로그래밍 기초부터 심화까지",
      thumbnail: "https://via.placeholder.com/400x225/6366f1/ffffff?text=Video+4",
    },
    {
      title: "최신 영상 5",
      description: "IT 트렌드 분석과 전망",
      thumbnail: "https://via.placeholder.com/400x225/8b5cf6/ffffff?text=Video+5",
    },
    {
      title: "최신 영상 6",
      description: "코딩 챌린지와 문제 해결",
      thumbnail: "https://via.placeholder.com/400x225/3b82f6/ffffff?text=Video+6",
    },
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          인기 영상
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@dingcodingco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
          >
            더 많은 영상 보기
          </a>
        </div>
      </div>
    </section>
  );
}
