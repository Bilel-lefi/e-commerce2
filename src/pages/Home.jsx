import React, { useState, useEffect } from "react";
import axios from "axios";
import { Hand, MapPin, Shield, Crown, Package } from "lucide-react";

export default function Home() {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("دينار99.00");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get("https://server-Pop_mart_tn.onrender.com/api/products")
      .then((res) => {
        const firstProduct = res.data[0];
        setProduct(firstProduct);
        setMainImage(firstProduct.imageUrl[0]);
      })
      .catch((err) => console.error("Erreur de chargement du produit:", err));
  }, []);

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

  const handlePriceSelect = (price) => setSelectedPrice(price);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const allFilled = Object.values(formData).every((v) => v.trim());
    if (!allFilled || !product) {
      alert("يرجى ملء جميع الحقول المطلوبة.");
      return;
    }

    const order = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      product: product._id,
      selectedPrice: selectedPrice,
      quanity:
        selectedPrice === `${product.price} دينار`
          ? 1
          : selectedPrice === `${product.price * 2} دينار`
          ? 2
          : 3,
    };

    try {
      await axios.post(
        "https://server-Pop_mart_tn.onrender.com/api/orders",
        order
      );
      alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً.");
      // Optionnel: reset du formulaire
      setFormData({ name: "", phone: "", address: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de la commande :", error);
      alert("حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.");
    }
  };

  return (
    <div dir="rtl" className="bg-[#f8f5f0] text-[#333] font-sans">
      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-2 text-sm">
        🔥 الكمية محدودة! لا تضيع الفرصة
      </div>

      <header className="bg-white p-5 shadow flex justify-between items-center">
        <div className="text-2xl font-bold">Pop_mart_tn 🛍️</div>
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
            {mainImage && (
              <img
                src={mainImage}
                alt="Main product"
                className="rounded-xl shadow-xl w-full h-[400px] object-cover mb-4"
              />
            )}
            <div className="grid grid-cols-4 md:gap-2 gap-2">
              {product?.imageUrl?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  onClick={() => setMainImage(img)}
                  className="w-[80px] h-[80px] md:w-[90px]  md:h-[90px] object-cover rounded cursor-pointer hover:scale-110 transition border-2 border-transparent hover:border-red-700"
                />
              ))}
            </div>
          </div>

          <div className="shadow-sm border-2 p-4 rounded-lg bg-white">
            <div className="gap-3 px-6 py-3">
              <div className="text-yellow-500 text-2xl">★★★★★</div>
            </div>

            <h1 className="text-3xl font-bold mb-5">{product?.title}</h1>

            <div className="text-3xl font-bold text-red-700 mb-5">
              {product?.price} دينار
            </div>

            <div className="bg-white p-5 border-black border-2 rounded-xl shadow mb-5">
              <h3 className="text-lg font-semibold mb-4">
                👇 للطلب، يرجى إدخال معلوماتك هنا
              </h3>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="الاسم الكامل"
                className="mb-3 p-4 border-2 rounded-lg w-full"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="رقم الهاتف"
                className="mb-3 p-4 border-2 rounded-lg w-full"
              />
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                type="text"
                placeholder="عنوان التوصيل"
                className="mb-3 p-4 border-2 rounded-lg w-full"
              />
            </div>

            <div className="bg-white p-5 rounded-xl shadow mb-5">
              {/* 🛒 Offre 1 */}
              <div
                className={`p-4 border-2 rounded-lg mb-3 cursor-pointer ${
                  selectedPrice === `${product?.price} دينار`
                    ? "border-red-700 bg-red-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handlePriceSelect(`${product?.price} دينار`)}
              >
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-gray-600">
                    اشتر 1 - جودة استثنائية في كل تفصيلة
                  </div>
                  <div className="text-red-700 font-bold">
                    {product?.price} دينار
                  </div>
                </div>
              </div>

              {/* 🛍️ Offre 2 */}
              <div
                className={`p-4 border-2 rounded-lg mb-3 cursor-pointer ${
                  selectedPrice === `${product?.price * 2} دينار`
                    ? "border-red-700 bg-red-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handlePriceSelect(`${product?.price * 2} دينار`)}
              >
                <div className="absolute -mt-10 mr-2 text-xs bg-red-700 text-white py-1 px-3 rounded-full inline-block">
                  العرض الأكثر طلبا
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-gray-600">
                    🔥 اشتر 2 واحصل على تخفيض
                  </div>
                  <div className="text-red-700 font-bold">
                    {product?.price * 2} دينار
                  </div>
                  <div className="text-sm line-through text-gray-400">
                    {product ? `${product.price * 2 + 10} دينار` : ""}
                  </div>
                </div>
              </div>

              {/* 🎁 Offre 3 - avec remise 30% */}
              <div
                className={`p-4 border-2 rounded-lg mb-3 cursor-pointer ${
                  selectedPrice ===
                  `${Math.round(
                    product?.price * 3 - product?.price * 0.3
                  )} دينار`
                    ? "border-red-700 bg-red-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() =>
                  handlePriceSelect(
                    `${Math.round(
                      product?.price * 3 - product?.price * 0.3
                    )} دينار`
                  )
                }
              >
                <div className="absolute -mt-10 mr-2 text-xs bg-green-600 text-white py-1 px-3 rounded-full inline-block">
                  ✅ خصم 30%{" "}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-gray-600">
                    🎁 اشتر 3 واستفد من سعر خاص
                  </div>
                  <div className="text-red-700 font-bold">
                    {Math.round(product?.price * 3 - product?.price * 0.3)}{" "}
                    دينار
                  </div>
                  <div className="text-sm line-through text-gray-400">
                    {product ? `${product.price * 3} دينار` : ""}
                  </div>
                  <div className="text-sm text-green-600 font-bold"></div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg text-center text-xl font-bold text-red-700 mb-4">
              إجمالي المبلغ: {selectedPrice}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-red-700 hover:bg-red-900 text-white py-4 rounded-lg text-lg font-bold transition"
              id="order"
            >
              اضغط هنا للطلب
            </button>

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 mb-6">
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
