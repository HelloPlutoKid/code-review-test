export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 animate-fadeInUp">
          연락하기
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-gray-700 mb-12 animate-fadeInUp animation-delay-200">
            협업 문의, 제안, 또는 궁금한 점이 있으시면 아래 채널을 통해 연락주세요!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://www.youtube.com/@dingcodingco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 text-center animate-scaleIn opacity-0 animation-delay-400"
            >
              <div className="text-5xl mb-4 animate-bounce-slow">📺</div>
              <h3 className="text-2xl font-bold mb-2">YouTube</h3>
              <p className="text-red-100">유튜브 채널 방문</p>
            </a>

            <a
              href="mailto:contact@dingcodingco.com"
              className="bg-purple-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 text-center animate-scaleIn opacity-0 animation-delay-600"
            >
              <div className="text-5xl mb-4 animate-bounce-slow">✉️</div>
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-purple-100">이메일 보내기</p>
            </a>

            <a
              href="https://github.com/dingcodingco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 text-center animate-scaleIn opacity-0 animation-delay-800"
            >
              <div className="text-5xl mb-4 animate-bounce-slow">💻</div>
              <h3 className="text-2xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-300">깃허브 방문</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
