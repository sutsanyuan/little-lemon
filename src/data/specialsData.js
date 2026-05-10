import GreekSaladImage from "../assets/images/Greek-salad.jpg";
import BruchettaImage from "../assets/images/Bruchetta.jpg";
import lemonDessertImage from "../assets/images/Lemon-dessert.jpg";

const specialsData = [
    {
        id: 1,
        title: "Greek Salad",
        price: "12.99",
        description:
            "Our Greek Salad features crisp cucumbers, juicy tomatoes, Kalamata olives, and creamy feta cheese, all drizzled with our signature vinaigrette.",
        image: GreekSaladImage,
    },
    {
        id: 2,
        title: "Bruchetta",
        price: "5.99",
        description:
            "Our Bruschetta features grilled bread topped with fresh tomatoes, basil, garlic, and a drizzle of extra virgin olive oil.",
        image: BruchettaImage,
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: "5.00",
        description:
            "Our Lemon Cake features a moist, citrus-infused sponge, topped with a tangy lemon glaze and a sprinkle of candied zest.",
        image: lemonDessertImage,
    },
];
export const fetchSpecials = ()=>{
    return new Promise((resolve)=>{
        //mocking delaying fetching
        setTimeout(()=>{resolve(specialsData)},1000)
    })
};