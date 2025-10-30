export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-slideInLeft opacity-0">
            <h3 className="text-2xl font-bold mb-4">딩코딩코</h3>
            <p className="text-purple-200">
              개발자들을 위한 코딩 콘텐츠를 만드는 유튜버입니다.
            </p>
          </div>

          <div className="animate-fadeInUp opacity-0 animation-delay-200">
            <h4 className="text-xl font-bold mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-purple-200 hover:text-white transition-all hover:scale-105 inline-block">
                  소개
                </a>
              </li>
              <li>
                <a href="#videos" className="text-purple-200 hover:text-white transition-all hover:scale-105 inline-block">
                  영상
                </a>
              </li>
              <li>
                <a href="#contact" className="text-purple-200 hover:text-white transition-all hover:scale-105 inline-block">
                  연락하기
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-slideInRight opacity-0 animation-delay-400">
            <h4 className="text-xl font-bold mb-4">소셜 미디어</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.youtube.com/@dingcodingco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all hover:scale-105 inline-block"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dingcodingco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-all hover:scale-105 inline-block"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@dingcodingco.com"
                  className="text-purple-200 hover:text-white transition-all hover:scale-105 inline-block"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8 text-center animate-fadeIn opacity-0 animation-delay-600">
          <p className="text-purple-200">
            &copy; {new Date().getFullYear()} 딩코딩코. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
