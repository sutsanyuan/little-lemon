import React from "react";
import useFetch from "../../hooks/useFetch";
import { fetchStories } from "../../data/storiesData";
import Carousel from "../../components/common/Carousel";
import Album from "../../components/common/Album";

export default function OurStory() {
    const { data: stories, loading } = useFetch(fetchStories);
    console.log("檢查 stories 資料：", stories);
    return (
        <div>
            <section className="">
                <div className="container">
                    <hr></hr>
                    <Carousel showButtons={false} showDots={false}>
                        {loading ? (
                            <p>loading data...</p>
                        ) : (
                            stories.map((story) => (
                                <Album
                                    key={story.id}
                                    image={story.image}
                                    title={story.title}></Album>
                            ))
                        )}
                    </Carousel>
                </div>
            </section>
        </div>
    );
}
