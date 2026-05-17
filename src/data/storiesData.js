import s1Image from "../assets/images/p01_MarioAndAdrian.jpg";
import s2Image from "../assets/images/p02_RestaurantChef.jpg";
import s3Image from "../assets/images/p03_MarioAndAdrian.jpg";

const storiesData = [
    {
        id: 1,
        image: s1Image,
        title: "Mario and Adrian B",
    },
    {
        id: 2,
        image: s2Image,
        title: "Restaurant Chef",
    },
    {
        id: 3,
        image: s3Image,
        title: "Mario and Adrian B",
    },
];

export const fetchStories = () => {
    return new Promise((resolve) => {
        //mocking fetching data
        setTimeout(() => {
            resolve(storiesData);
        }, 1000);
    });
};
