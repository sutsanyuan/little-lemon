import React from "react";
import TestimonialCard from "../../components/common/TestimonialCard";
import useFetch from "../../hooks/useFetch";
import { fetchTestimonials } from "../../data/testimonialsData";
import Carousel from "../../components/common/Carousel";
export default function Testimonials() {
    const { data: testimonials, loading } = useFetch(fetchTestimonials);

    return (
        <div>
            <section className="">
                <div className="container">
                    <hr></hr>
                    <h3 className="section-title">Testimonials</h3>
                    <Carousel showButtons={false}>
                        {loading ? (
                            <p>loading data...</p>
                        ) : (
                            testimonials.map((testimonial) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    image={testimonial.image}
                                    name={testimonial.name}
                                    point={testimonial.point}
                                    comment={testimonial.comment}
                                />
                            ))
                        )}
                    </Carousel>
                </div>
            </section>
        </div>
    );
}
