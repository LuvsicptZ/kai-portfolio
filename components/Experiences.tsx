"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import motion from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>My Experiences</SectionHeading>
        <VerticalTimeline lineColor="#e5e7eb">
            {experiencesData.map((item, index) => (
                    <VerticalTimelineElement key={index} position={index % 2 === 0 ? "left" : "right"}
                        contentStyle={{
                            background: "#f3f4f6",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: "white",
                            fontSize: "1.5rem",
                        }}
                    >
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <p className="font-normal mt-0!">{item.location}</p>
                        <p className="mt-1! font-normal! text-gray-700">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </section>
  );
}