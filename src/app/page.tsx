"use client"
const assetMap: { id: string; url: string; alt?: string }[] = [{"id":"hero-image","url":"https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Front view of a lineup of Mercedes-Benz cars with bright headlights, showcasing luxury and elegance."},{"id":"about-image","url":"https://images.pexels.com/photos/7018500/pexels-photo-7018500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Mechanics working on a truck in a workshop, focused on repair and maintenance."},{"id":"feature-image-1","url":"https://images.pexels.com/photos/9519220/pexels-photo-9519220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a driver's hand on a luxury car steering wheel, shot inside the vehicle."},{"id":"feature-image-2","url":"https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Mechanic skillfully repairing car undercarriage in outdoor setting with tools."},{"id":"product-image-1","url":"https://images.pexels.com/photos/24701050/pexels-photo-24701050.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Modern Genesis GV70 SUV parked stylishly in a contemporary garage setting."},{"id":"product-image-2","url":"https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A dramatic shot of a Nissan 370Z sports car illuminated in darkness with vibrant tail lights."},{"id":"product-image-3","url":"https://images.pexels.com/photos/34355542/pexels-photo-34355542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"SUV vehicle - Photo by Chris F"}];
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="MVP SUBHA"
          button={{ text: "Visit Us", href: "https://carshop.com" }}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Hey there Hello"
          description="NICE TO MEET YA ALL"
          imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
          buttons={[
            { text: "Browse Cars", href: "products" },
            { text: "Learn More", href: "about" },
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <TextSplitAbout
          title="About CarShop"
          description={[
            "Dedicated to providing top-quality cars and exceptional service.",
            "Our mission is to ensure you drive away happy.",
          ]}
          buttons={[{ text: "Read More", href: "about" }]}
        />
      </div>
      <div id="product" data-section="product">
        <ProductCardTwo
          products={[
            {
              id: "1",
              brand: "LuxuryBrand",
              name: "Sedan 2023",
              price: "$40,000",
              rating: 5,
              reviewCount: "100",
              imageSrc: assetMap.find(a => a.id === "product-image-1")?.url,
            },
            {
              id: "2",
              brand: "Speedster",
              name: "Coupe 2023",
              price: "$60,000",
              rating: 4,
              reviewCount: "85",
              imageSrc: assetMap.find(a => a.id === "product-image-2")?.url,
            },
            {
              id: "3",
              brand: "SUVMaster",
              name: "SUV 2023",
              price: "$45,000",
              rating: 5,
              reviewCount: "120",
              imageSrc: assetMap.find(a => a.id === "product-image-3")?.url,
            },
          ]}
          title="Our Cars"
          description="Discover our selection of the latest models."
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Inquire Now"
          title="Get in Touch"
          description="Contact us for more details about our cars and services."
          inputPlaceholder="Your email address"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
              ],
            },
          ]}
          copyrightText="© 2023 CarShop"
        />
      </div>
    </ThemeProvider>
  );
}
