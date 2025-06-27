
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe, Play, Star, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Học tương tác",
      description: "Bài học đa dạng với video, audio và quiz"
    },
    {
      icon: Users,
      title: "Cộng đồng học tập",
      description: "Kết nối với người học khác trên toàn thế giới"
    },
    {
      icon: Award,
      title: "Chứng chỉ",
      description: "Nhận chứng chỉ sau khi hoàn thành khóa học"
    },
    {
      icon: Globe,
      title: "Học mọi lúc mọi nơi",
      description: "Truy cập từ mọi thiết bị, mọi nơi"
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn Minh An",
      text: "Ứng dụng tuyệt vời! Tôi đã cải thiện được rất nhiều kỹ năng tiếng Anh.",
      rating: 5
    },
    {
      name: "Trần Thị Hoa",
      text: "Giao diện đẹp, dễ sử dụng và nội dung chất lượng cao.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Học Tiếng Anh
            <span className="text-blue-600"> Hiệu Quả</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Nền tảng học tiếng Anh trực tuyến hiện đại với phương pháp giảng dạy 
            tương tác và công nghệ AI tiên tiến
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Bắt đầu học ngay
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Xem demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tại sao chọn chúng tôi?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp trải nghiệm học tập toàn diện với công nghệ hiện đại
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Học viên đang học</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-blue-100">Bài học chất lượng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Tỷ lệ hài lòng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Học viên nói gì về chúng tôi
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="pt-0">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sẵn sàng bắt đầu hành trình học tiếng Anh?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Tham gia cùng hàng nghìn học viên đã thành công
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Đăng ký miễn phí ngay
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">English Learning</h3>
              <p className="text-gray-400">
                Nền tảng học tiếng Anh trực tuyến hàng đầu Việt Nam
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Khóa học</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tiếng Anh cơ bản</li>
                <li>Tiếng Anh giao tiếp</li>
                <li>IELTS</li>
                <li>TOEIC</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Trung tâm trợ giúp</li>
                <li>Liên hệ</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Theo dõi chúng tôi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Facebook</li>
                <li>YouTube</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 English Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
