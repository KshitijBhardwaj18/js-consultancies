"use client"

import React from "react";

import Nav from "@/components/nav/index";
import Banner from "@/components/banner/index";
import banner2 from "@/public/assets/scene5.jpg";
import Image from "next/image";
import Footer from '@/components/footer/Footer.jsx'


const training = () => {
  return (
    <div>
      <Nav />
      <Image src={banner2} className="image object-cover h-40" alt="banner" />

      <div className="strategic flex flex-col gap-9">
        <div className="p-10">
          <h1 className="heading font-sans text-6xl p-30">
            Training & Education
          </h1>

          <h3 className="sub-heading  font-sans2 text-3xl pt-5 ">
            Analysis of Companies: Strategic alignment for sustainable success
          </h3>

          <p className="font-sans pt-5 text-xl ">
            At the core of every effective quality management system is a
            well-trained and competent Quality Management Representative (QMR).
            A QMR acts as the hub for quality initiatives and is responsible for
            enhancing quality awareness throughout the entire company and
            monitoring compliance with standards.
          </p>

          <p className="font-sans pt-5 text-xl ">
            We offer a comprehensive mentoring and coaching program to prepare
            your internal staff for the QMR role. Our program provides a blend
            of theoretical training and practical exercises, offering
            participants the chance to deepen their knowledge under the guidance
            of our seasoned consultants.
          </p>

          <p className="font-sans pt-5 text-xl ">
            Our goal is to equip your aspiring QMR with the tools they need to
            effectively manage your quality management system and promote
            continuous improvements. Our training includes a thorough
            introduction to the ISO 9001 standard, as well as training in
            conducting internal audits, effective communication of quality
            objectives, and resolving quality issues.
          </p>

          <p className="font-sans pt-5 text-xl ">
            Through close collaboration with your prospective QMR during
            training, we ensure they fully understand the role and possess the
            necessary skills and knowledge to guide your company successfully
            through the certification process and maintain an effective quality
            management system.
          </p>

          <p className="font-sans pt-5 text-xl ">
            Investing in the training of an internal QMR is an investment in the
            future of your company. Let&aspos;s work together to ensure that your
            prospective QMR is optimally prepared for the challenging and
            pivotal role they will play in your organization.
          </p>

          <h3 className="sub-heading  font-sans2 text-3xl pt-5 ">
            Training for Career Changers: Empowering Internal Talent
          </h3>

          <p className="font-sans pt-5 text-xl ">
            There is a shortage of skilled workers, especially pronounced in the
            quality management sector – a challenge requiring innovative
            solutions. Recent studies paint this picture. Yet, many companies
            overlook a valuable resource right at their doorstep: the
            undiscovered talents of their own employees.
          </p>

          <p className="font-sans pt-5 text-xl ">
            With our &rdquo;Training for Career Changers&aspos; program, we tap into the
            existing knowledge within your company. Your employees not only know
            the company culture and values but are also well-acquainted with
            internal procedures, processes, and communication channels. This
            offers an invaluable advantage: While a new employee needs to be
            introduced to company structures, your existing employees can become
            productive immediately after qualification without any training
            period. This not only saves time but also resources.
          </p>

          <p className="font-sans pt-5 text-xl ">
            For us, it&aspos;s not just about closing skill gaps. We aim to foster a
            culture of learning and cohesion, enhancing employee engagement and
            retention. And time and again, it has been proven: Customized,
            internal training measures lead to better outcomes and increased
            employee satisfaction.
          </p>

          <p className="font-sans pt-5 text-xl ">
            By investing in &rdquo;Training for Career Changers&rdquo; you leverage the
            strengths of your own employees while simultaneously building a
            sustainable future for your company. Let&aspos;s tap into this potential
            together.
          </p>
        </div>

        <Footer className="mt-5"/>

        
      </div>
    </div>
  );
};

export default training;
