import React from "react";
import TestimonialCard from "../../components/common/TestimonialCard";
import useFetch from "../../hooks/useFetch";
import { fetchTestimonials } from "../../data/testimonialsData";

export default function Testimonials() {
    const { data: testimonials, loading } = useFetch(fetchTestimonials);
    //here 0512

    return (
        <div>
            <section className="">
                <div className="container">
                    <hr></hr>
                    <h3 className="section-title">Testimonials</h3>
                    <div className="testimonial-wrapper">{}</div>

                    <TestimonialCard></TestimonialCard>
                </div>
            </section>
        </div>
    );
}
