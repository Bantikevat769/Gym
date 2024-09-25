import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
      features: [
        "Equipment",
        "All Day Free Training",
        "Free Restroom",
        "24/7 Skilled Support",
        "20 Days Freezing Option",
      ],
    },
    {
      imgUrl: "/imag5.webp",
      title: "HALF_YEARLY",
      price: 34000,
      length: 6,
      features: [
        "Equipment",
        "All Day Free Training",
        "Free Restroom",
        "24/7 Skilled Support",
        "20 Days Freezing Option",
        "Nutrition Consultation",
      ],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
      features: [
        "Equipment",
        "All Day Free Training",
        "Free Restroom",
        "24/7 Skilled Support",
        "20 Days Freezing Option",
        "Personal Trainer Sessions",
      ],
    },
  ];

  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => (
          <div className="card" key={element.title}>
            <img
              src={element.imgUrl}
              alt={element.title}
              className="card-img"
            />
            <div className="title">
              <h1>{element.title}</h1>
              <h3>PACKAGE</h3>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
            </div>
            <div className="description">
              {element.features.map((feature, index) => (
                <p key={index}>
                  <Check /> {feature}
                </p>
              ))}
              <Link to={"/"} className="join-btn">
                Join Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
