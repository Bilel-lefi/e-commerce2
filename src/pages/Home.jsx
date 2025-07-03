import React, { useState } from "react";
import { Hand, MapPin, Shield, Crown, Package } from "lucide-react";
import labubuImage from "../assets/labubu.png";
export default function Home() {
  const [selectedPrice, setSelectedPrice] = useState("دينار99.00");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [mainImage, setMainImage] = useState(
    "https://via.placeholder.com/500x400/FFC0CB/FFFFFF?text=Labubu+Doll"
  );
  const features = [
    {
      icon: <Hand className="w-6 h-6 text-gray-600" />,
      title: "الدفع عند الاستلام",
      bgColor: "bg-blue-50",
    },
    {
      icon: <MapPin className="w-6 h-6 text-gray-600" />,
      title: "متوفر بتونس",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Shield className="w-6 h-6 text-gray-600" />,
      title: "خدمة العملاء",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Crown className="w-6 h-6 text-gray-600" />,
      title: "ضمان 100%",
      bgColor: "bg-blue-50",
    },
  ];
  const thumbnails = Array(7).fill(labubuImage);

  const pricingOptions = [
    {
      label: "اشتر 1 - جودة استثنائية في كل تفصيلة",
      price: "دينار99.00",
      original: "دينار99.00",
    },
    {
      label: "🔥 اشتر 2 واحصل على تخفيض",
      price: "دينار193.00",
      original: "دينار198.00",
      badge: "العرض الأكثر طلبا",
    },
    {
      label: "🎁 اشتر 3 واستفد من سعر خاص",
      price: "دينار280.00",
      original: "دينار297.00",
    },
  ];

  const handleThumbnailClick = (color) => {
    setMainImage(
      `https://via.placeholder.com/500x400/${color}/FFFFFF?text=Labubu+Doll`
    );
  };

  const handlePriceSelect = (price) => {
    setSelectedPrice(price);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const allFilled = Object.values(formData).every((v) => v.trim());
    if (allFilled) {
      alert(
        "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u0628\u0646\u062C\u0627\u062D! \u0633\u0646\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0642\u0631\u064A\u0628\u0627ً."
      );
    } else {
      alert(
        "\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629."
      );
    }
  };

  return (
    <div dir="rtl" className="bg-[#f8f5f0] text-[#333] font-sans">
      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-2 text-sm relative overflow-hidden">
        🔥 الكمية محدودة! لا تضيع الفرصة
      </div>

      <header className="bg-white p-5 shadow flex justify-between items-center">
        <div className="text-2xl font-bold">Salem.tn 🛍️</div>
        <a
          href="#order"
          className="bg-red-700 hover:bg-red-900 text-white px-6 py-3 rounded-full text-lg shadow-md"
        >
          🛒 اطلب الآن
        </a>
      </header>

      <main className="max-w-6xl mx-auto p-5">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <img
              src={labubuImage}
              className="rounded-xl shadow-xl w-full h-[400px] object-cover mb-4"
              alt="Labubu"
            />
            <div className="grid grid-cols-7 gap-2">
              {thumbnails.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  onClick={() => handleThumbnailClick(img)}
                  className="w-[60px] h-[60px] object-cover rounded cursor-pointer hover:scale-110 transition border-2 border-transparent hover:border-red-700"
                />
              ))}
            </div>
          </div>

          <div className="shadow-sm border-2 p-4 rounded-lg bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-yellow-500 text-lg">★★★★★</div>
              <div className="flex gap-1 overflow-visible">
                {[
                  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1603415526960-f8f0b1cdd7d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1613654568348-6f06fa7dc7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1573496130141-209d200cebd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                ].map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Client ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-5">
              العشوائي labubu دمية - blind box - مفاجأة داخل كل كيس !!
            </h1>
            <div className="text-3xl font-bold text-red-700 mb-5">99 دينار</div>

            <div className="bg-white p-5  border-black border-2 rounded-xl shadow mb-5">
              <h3 className="text-lg font-semibold mb-4">
                👇 للطلب، يرجى إدخال معلوماتك هنا
              </h3>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="الاسم الكامل"
                className="mb-3 p-4 border-2 rounded-lg w-full focus:outline-none focus:border-red-700"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="رقم الهاتف"
                className="mb-3 p-4 border-2 rounded-lg w-full focus:outline-none focus:border-red-700"
              />
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                type="text"
                placeholder="عنوان التوصيل"
                className="mb-3 p-4 border-2 rounded-lg w-full focus:outline-none focus:border-red-700"
              />
            </div>

            <div className="bg-white p-5 rounded-xl shadow mb-5">
              {pricingOptions.map((opt, i) => (
                <div
                  key={i}
                  className={`p-4 border-2 rounded-lg mb-3 cursor-pointer transition ${
                    selectedPrice === opt.price
                      ? "border-red-700 bg-red-50"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handlePriceSelect(opt.price)}
                >
                  {opt.badge && (
                    <div className="absolute -mt-10 mr-2 text-xs bg-red-700 text-white py-1 px-3 rounded-full inline-block">
                      {opt.badge}
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <div className="text-sm text-gray-600">{opt.label}</div>
                    <div className="text-red-700 font-bold">{opt.price}</div>
                    <div className="text-sm line-through text-gray-400">
                      {opt.original}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg text-center text-xl font-bold text-red-700 mb-4">
              إجمالي المبلغ: {selectedPrice}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-red-700 hover:bg-red-900 text-white py-4 rounded-lg text-lg font-bold transition shadow animate-zoomPulse"
              id="order"
            >
              اضغط هنا للطلب
            </button>

            <div className="bg-gray-200 rounded-xl p-6 my-10 text-center space-y-4">
              <div className="flex justify-center items-center gap-2 text-sm text-gray-700 font-medium">
                <span>🔔</span>
                <span>متوفر بكمية محدودة</span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-red-600">
                🔥 تخفيض لفترة محدودة - PROMO
              </h2>
              <h3 className="text-3xl font-bold text-red-600">
                💯 جودة ممتازة بالضمان
              </h3>

              <p className="text-lg text-gray-700">✨ استعد للمفاجأة!</p>

              <p className="text-right text-sm md:text-base text-gray-700 leading-relaxed">
                • دمية لابوبو داخل كيس مغلق -{" "}
                <span className="font-bold text-black">
                  لا تعرف أي شخصية ستحصل عليها حتى تفتحها!
                </span>
                <br />
                كل كيس يحتوي على شخصية عشوائية من بين مجموعة مميزة، وبعضها نادر
                جداً 🎁
              </p>

              <p className="text-center text-xl font-bold text-red-700 mt-4">
                لابوبو مش مجرد دمية... إنها قطعة ستايل!
              </p>

              <ul className="text-right text-sm md:text-base text-gray-800 mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">◆</span> خامة عالية الجودة
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">◆</span> تجربة فتح ممتعة
                  ومليئة بالحماس
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">◆</span> مثالية للهدايا أو
                  إضافة
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500">⚠️</span> المنتج يُباع
                  عشوائياً (Blind Box) – لا يمكن اختيار الشخصية.
                </li>
              </ul>

              <div className="mt-4 font-bold text-gray-700 uppercase">
                BEST QUALITY
              </div>
            </div>
            {/* Guarantees Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div
                      className={`${feature.bgColor} rounded-2xl p-4 flex items-center justify-center`}
                    >
                      {feature.icon}
                    </div>
                    <p className="text-gray-800 font-medium text-sm leading-relaxed">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Promotion Banner */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl border-2 border-dashed border-orange-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 text-right">
                  <h3 className="text-orange-600 font-bold text-lg mb-2">
                    🔥 هذا المنتج عليه طلب كبير
                  </h3>
                  <p className="text-gray-600 text-sm">
                    سارع في الطلب لضمان توفر المنتج
                  </p>
                </div>
                <div className="mr-4">
                  <Package className="w-12 h-12 text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
