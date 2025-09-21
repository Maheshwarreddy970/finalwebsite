import Herosection from "@/components/landingpage/Herosection";
import EmiCalculator from "./(main)/cars/[id]/_components/emi-calculator";
import Featured from "@/components/landingpage/Featured";
import Customerstories from "@/components/landingpage/customers";
import BodyType from "@/components/landingpage/BodyType";
import Searchsection from "@/components/landingpage/Searchsection";
import Bento from "@/components/landingpage/Bento";
import TeamSection from "@/components/landingpage/TeamSection";
import MediaSection from "@/components/ui/MediaSection";
import { getFeaturedCars } from "@/actions/car-listing";


export default async function Home() {
  // const featuredCars = await getFeaturedCars();
  const featuredCars = [
    {
      id: 'b1f81332-f0fb-4e14-8ae8-0a148c8ae549',
      make: 'Lamborghini',
      model: 'Lanzador',
      year: 2024,
      price: 2500000,
      mileage: 10,
      color: 'Blue',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'Coupe',
      seats: 2,
      description: "Experience the future of driving with this stunning Lamborghini Lanzador. This all-electric coupe boasts breathtaking performance, cutting-edge technology, and an unparalleled level of luxury. Its vibrant blue paint shimmers under the sun, while its aerodynamic design cuts through the air with effortless grace. The spacious cabin offers a comfortable and refined driving experience, and the advanced technology ensures a seamless and enjoyable ride. This is more than just a car; it's a statement, a testament to your discerning taste and pursuit of excellence. Own a piece of automotive history and experience the thrill of the road like never before.",
      status: 'AVAILABLE',
      featured: true,
      images: [
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429564/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429598115-0.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429565/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429601685-1.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429566/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429602529-2.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429567/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429603323-3.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429567/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429604158-4.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429568/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429604975-5.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429569/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429605795-6.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429570/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429606701-7.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429571/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429607533-8.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429572/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429608347-9.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1758429573/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/cars/b1f81332-f0fb-4e14-8ae8-0a148c8ae549/image-1758429609277-10.webp'
      ],
      createdAt: '2025-09-21T04:40:10.200Z',
      updatedAt: '2025-09-21T04:40:42.038Z',
      wishlisted: 0
    },
    {
      id: 'd37672d0-8cf9-4e55-af65-054d83dcf037',
      make: 'BMW',
      model: 'XM',
      year: 2024,
      price: 180000,
      mileage: 30,
      color: 'Blue',
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      bodyType: 'SUV',
      seats: 7,
      description: 'Experience the pinnacle of luxury and performance with this stunning 2024 BMW XM. This head-turning blue SUV boasts a powerful hybrid engine, delivering exhilarating acceleration and impressive fuel efficiency.  The meticulously crafted interior offers unparalleled comfort and cutting-edge technology, while the bold exterior design commands attention wherever you go.  Low mileage and pristine condition. Drive the future of luxury today!',
      status: 'AVAILABLE',
      featured: true,
      images: [
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761739/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761754001-0.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761745/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761759267-1.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761747/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761764493-2.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761754/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761767107-3.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761757/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761774044-4.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761762/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761776658-5.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761773/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761782243-6.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761784/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761793129-7.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761788/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761804250-8.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761794/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/cars/d37672d0-8cf9-4e55-af65-054d83dcf037/image-1757761808257-9.webp'
      ],
      createdAt: '2025-09-13T11:10:13.991Z',
      updatedAt: '2025-09-13T11:21:24.400Z',
      wishlisted: 1
    },
    {
      id: '14ca9c48-dca6-4c75-972c-6f7ceba2c650',
      make: 'GMC',
      model: 'Hummer EV Pickup',
      year: 2022,
      price: 110000,
      mileage: 300,
      color: 'White',
      fuelType: 'Electric',
      transmission: 'Automatic',
      bodyType: 'Pickup',
      seats: 5,
      description: "Conquer any terrain with this powerful and stylish GMC Hummer EV Pickup! This all-electric beast boasts impressive off-road capabilities and cutting-edge technology. Its sleek white exterior turns heads wherever it goes.  Experience the thrill of silent, powerful acceleration and enjoy the luxury of a premium interior.  Don't miss your chance to own a piece of the future – this Hummer EV is ready for adventure.",
      status: 'AVAILABLE',
      featured: true,
      images: [
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761340/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761344272-0.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761347/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761360464-1.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761358/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761366946-2.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761361/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761377467-3.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761366/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761381137-4.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761374/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761385642-5.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761382/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761393903-6.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761387/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761401722-7.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761402/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761406861-8.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761410/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/cars/14ca9c48-dca6-4c75-972c-6f7ceba2c650/image-1757761421667-9.webp'
      ],
      createdAt: '2025-09-13T11:03:50.380Z',
      updatedAt: '2025-09-13T11:21:30.962Z',
      wishlisted: 2
    },
    {
      id: '475fcfc2-00f9-47eb-84f7-22bde1641d46',
      make: 'Jeep',
      model: 'Avenger',
      year: 2023,
      price: 30000,
      mileage: 30,
      color: 'Yellow',
      fuelType: 'Diesel',
      transmission: 'Automatic',
      bodyType: 'SUV',
      seats: 5,
      description: "Introducing the all-new 2023 Jeep Avenger, a vibrant yellow electric SUV that's ready to electrify your adventures!  This stylish and eco-friendly vehicle boasts a sleek design, innovative features, and impressive performance.  Experience the thrill of electric driving with zero emissions and effortless acceleration.  With its spacious interior and advanced technology, the Avenger is the perfect blend of style, sustainability, and adventure. Drive into the future with confidence and style.",
      status: 'AVAILABLE',
      featured: true,
      images: [
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761109/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761125961-0.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761112/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761128662-1.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761114/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761131656-2.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761117/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761134321-3.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761121/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761137306-4.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761130/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761141152-5.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761133/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761149747-6.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761138/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761152569-7.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761141/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761157975-8.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761144/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761160851-9.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757761148/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/cars/475fcfc2-00f9-47eb-84f7-22bde1641d46/image-1757761163673-10.webp'
      ],
      createdAt: '2025-09-13T10:59:27.831Z',
      updatedAt: '2025-09-13T11:21:33.886Z',
      wishlisted: 3
    },
    {
      id: '1a9826e8-20c2-49b3-8989-e7d702b42873',
      make: 'Kia',
      model: 'Sportage',
      year: 2023,
      price: 28000,
      mileage: 40,
      color: 'Red',
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      bodyType: 'SUV',
      seats: 5,
      description: 'Experience the thrill of the road in this stunning 2023 Kia Sportage! This vibrant red SUV boasts a sleek design and cutting-edge technology, making every drive an adventure.  Its powerful engine and smooth automatic transmission provide a seamless driving experience, while the spacious interior offers ultimate comfort.  Turn heads and experience luxury on the go with this immaculate vehicle.',
      status: 'AVAILABLE',
      featured: true,
      images: [
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751697/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751714378-0.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751698/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751717004-1.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751698/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751717719-2.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751699/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751718414-3.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751700/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751719104-4.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751701/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751719891-5.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751702/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751720907-6.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751702/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751721701-7.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751703/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751722531-8.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751704/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751723332-9.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751705/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751724113-10.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751706/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/cars/1a9826e8-20c2-49b3-8989-e7d702b42873/image-1757751724981-11.webp'
      ],
      createdAt: '2025-09-13T08:22:05.764Z',
      updatedAt: '2025-09-13T11:21:48.207Z',
      wishlisted: 4
    },
    {
      id: 'cd875310-4917-4610-b0a9-f0627ed7ddce',
      make: 'Mercedes-Benz',
      model: 'G-Class',
      year: 2020,
      price: 130000,
      mileage: 10000,
      color: 'Beige',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'SUV',
      seats: 5,
      description: 'Experience the epitome of luxury and off-road capability with this stunning Beige Mercedes-Benz G-Class.  This meticulously maintained SUV boasts a powerful engine, luxurious interior, and unparalleled off-road prowess.  Its sophisticated design turns heads wherever it goes, while its robust build ensures a smooth and comfortable ride on any terrain. Drive home in style and adventure, today!',
      status: 'AVAILABLE',
      featured: true,
      images: [
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751348/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751364254-0.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751349/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751367745-1.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751349/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751368602-2.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751350/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751369374-3.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751351/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751370300-4.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751352/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751371054-5.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751353/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751371939-6.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751353/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751372654-7.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751354/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751373367-8.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751355/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751374139-9.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751356/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751374813-10.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751357/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751375795-11.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751357/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751376577-12.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751358/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751377293-13.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757751359/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/cars/cd875310-4917-4610-b0a9-f0627ed7ddce/image-1757751378199-14.webp'
      ],
      createdAt: '2025-09-13T08:16:18.886Z',
      updatedAt: '2025-09-13T11:21:40.275Z',
      wishlisted: 5
    },
    {
      id: 'aa72d32f-407f-432f-b38c-7a48fdd270d6',
      make: 'Volvo',
      model: 'XC60',
      year: 2022,
      price: 50000,
      mileage: 10000,
      color: 'Dark Gray',
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      bodyType: 'SUV',
      seats: 4,
      description: "Experience the thrill of the road in this sleek 2022 Volvo XC60, boasting a sophisticated dark gray exterior and a luxurious interior. This near-new SUV is packed with advanced features and offers a seamless blend of performance and comfort.  Low mileage and meticulously maintained, it's ready for your next adventure. Drive in style and confidence with this exceptional Volvo.",
      status: 'AVAILABLE',
      featured: true,
      images: [
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749820/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749836503-0.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749820/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749839647-1.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749821/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749840447-2.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749822/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749841159-3.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749823/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749841843-4.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749824/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749842698-5.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749825/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749843826-6.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749825/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749844610-7.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749826/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749845666-8.webp',
        'https://res.cloudinary.com/dduwiqu4j/image/upload/v1757749827/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/cars/aa72d32f-407f-432f-b38c-7a48fdd270d6/image-1757749846384-9.webp'
      ],
      createdAt: '2025-09-13T07:50:47.377Z',
      updatedAt: '2025-09-13T11:21:44.247Z',
      wishlisted: 6
    }
  ]
  return (
    <>
      <Herosection></Herosection>
      <Featured Cars={featuredCars}></Featured>
      <Bento />
      <div className="px-3 mt-12 md:mt-20 md:px-10">
        <EmiCalculator className={' max-h-[150vh] overflow-y-visible'} />
      </div>
      <Customerstories></Customerstories>
      <Searchsection></Searchsection>
      <BodyType></BodyType>
      <TeamSection></TeamSection>
      <MediaSection></MediaSection>
    </>
  );
}
