export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 animate-fadeInUp">
          딩코딩코 소개
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scaleIn opacity-0">
              <div className="text-4xl mb-4 animate-float">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">코딩 튜토리얼</h3>
              <p className="text-gray-700">
                초보자부터 전문가까지, 모두가 따라할 수 있는 실용적인 코딩 튜토리얼을 제공합니다.
                다양한 프로그래밍 언어와 프레임워크를 다룹니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scaleIn opacity-0 animation-delay-200">
              <div className="text-4xl mb-4 animate-float">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">개발 팁 & 트릭</h3>
              <p className="text-gray-700">
                효율적인 개발을 위한 다양한 팁과 트릭을 공유합니다.
                생산성을 높이는 도구와 방법론을 소개합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scaleIn opacity-0 animation-delay-400">
              <div className="text-4xl mb-4 animate-float">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">트렌드 분석</h3>
              <p className="text-gray-700">
                최신 IT 트렌드와 기술 동향을 분석하고 공유합니다.
                개발자로서 알아야 할 중요한 정보를 전달합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scaleIn opacity-0 animation-delay-600">
              <div className="text-4xl mb-4 animate-float">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">프로젝트 실습</h3>
              <p className="text-gray-700">
                실제 프로젝트를 함께 만들어가며 실전 경험을 쌓습니다.
                포트폴리오에 추가할 수 있는 프로젝트를 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
