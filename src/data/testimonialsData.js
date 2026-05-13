import t1Image from "../assets/images/tesimonial01.png";
import t2Image from "../assets/images/tesimonial02.png";
import t3Image from "../assets/images/tesimonial03.png";
import t4Image from "../assets/images/tesimonial04.png";

const testimonialsData = [
    {
        id: 1,
        image: t1Image,
        name: "Andy",
        point: "5.0",
        comment:
            "The best Mediterranean food I've ever had! The flavors were perfectly balanced, and the ingredients were so fresh. I highly recommend the gyros!",
    },
    {
        id: 2,
        image: t2Image,
        name: "Tilly",
        point: "5.0",
        comment:
            "Easy to book a table online! The confirmation was instant, and we received a reminder the day before. Great experience!",
    },
    {
        id: 3,
        image: t3Image,
        name: "Alexander",
        point: "5.0",
        comment:
            "Exceptional service from start to finish! The staff were attentive and knowledgeable, making our dining experience truly special. Highly recommended!",
    },
    {
        id: 4,
        image: t4Image,
        name: "Maria J",
        point: "5.0",
        comment:
            "A truly wonderful dining experience! The ambiance was delightful, and the cuisine was simply divine. I can't wait to return!",
    },
];

export const fetchTestimonials = () => {
    return new Promise((resolve) => {
        //mocking fetching data
        setTimeout(() => {
            resolve(testimonialsData);
        }, 1000);
    });
};
