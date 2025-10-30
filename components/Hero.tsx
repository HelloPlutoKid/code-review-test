export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            딩코딩코
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            코딩 유튜버
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            개발자들을 위한 유익하고 재미있는 코딩 콘텐츠를 만들고 있습니다.
            <br />
            프로그래밍 튜토리얼, 개발 팁, 그리고 IT 트렌드를 함께 나눠요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@dingcodingco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
            >
              유튜브 구독하기
            </a>
            <a
              href="#videos"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all hover:scale-105 shadow-lg"
            >
              영상 보러가기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
