import React from "react";
import Drop from "../drop/drop";
import { DepartureBoardOutlined } from "@mui/icons-material";

const Quality = () => {
  return (
    <div className="p-10 flex gap-10 ">
      <div className="left flex-col">
        <h1 className="font-sans2  text-5xl pt-10">Quality Management</h1>
      </div>

      <div className="right flex-col">
        <Drop
          text={<Establishment />}
          head="Establishment and implementation of a QM system"
        />

        <Drop text={<Package />} head="Our &rdquo;All-In-One Package&rdquo;" />



        <Drop text={<Support />} head={"Support and optimization"} />


        <Drop text={Remote} head={"Remote Audit"}/ >

          <Drop text={<IAudit/>} head={"Conducting internal audits"}/>

          <Drop text={<QMR/>}  head={"External QMR"}/>
      </div>
    </div>
  );
};

export default Quality;

const Establishment = () => {
  return (
    <div className="p-10 pt-0">
      <div className="big-big-pointer">
        {/* <h3 className="sub-heading  font-sans2 text-3xl pt-5 ">
          Establishment and implementation of a QM system
        </h3> */}

        <div className="para font-sans text-xl pt-3">
          <span className="sub font-sans2">
            Your Partner for Quality Assurance:{" "}
          </span>
          Our comprehensive service for the introduction and implementation of a
          Quality Management System (QMS) offers your company the opportunity to
          elevate your quality management to a new level. Our specific offering
          primarily targets businesses in the fields of mechanical engineering,
          manufacturing, service sector, and automotive industry - from sole
          proprietors and small and medium-sized enterprises (SMEs) to large
          corporations. However, we are also open to inquiries from other
          sectors.
        </div>

        <div className="para font-sans text-xl pt-3">
          <span className="sub font-sans2">
            Complete Package for Your Quality Management{" "}
          </span>
          We accompany your company through every step of the QMS implementation
          process. This includes the initial analysis and consulting, selection
          and implementation of the appropriate QM system, and upon customer
          request, the introduction of a proven QM software package. In
          addition, we train your employees and verify the implemented system.
        </div>

        <div className="para font-sans text-xl pt-3">
          <span className="sub font-sans2">
            Tailored Coaching for Your Team:{" "}
          </span>
          Another central point of our offering is our tailored coaching. If you
          intend to train internal employees as QM staff, we support you with a
          coaching program tailored to your needs. This ensures that your team
          has the skills and knowledge to effectively use and maintain the new
          system.
        </div>

        <div className="para font-sans text-xl pt-3">
          <span className="sub font-sans2">
            Our Promise - Quality and Customer Satisfaction:{" "}
          </span>{" "}
          Our highest goal is your satisfaction and the quality of our work. We
          firmly believe that our good reputation is our most valuable asset,
          and therefore, customer satisfaction always comes first. And all this
          we offer at a highly competitive price.
        </div>

        <div className="para font-sans text-xl pt-3">
          <span className="sub font-sans2">
            Post-Implementation Support and Assistance:{" "}
          </span>
          After the QMS implementation, we won&apos;t leave you alone: We offer
          a free email support for all implementation services (ISO 9001, ISO
          13485) for 6 months after the implementation. This way, you can be
          sure that you have a point of contact for any later queries.
        </div>
      </div>
    </div>
  );
};

const Package = () => {
  return (
    <div className="p-10 pt-0">
      {/* <h3 className="sub-heading  font-sans2 text-3xl pt-5 ">
        Our &rdquo;All-In-One Package&rdquo;
      </h3> */}

      <div className="para font-sans text-xl ">
        After the QMS implementation, we won&aspos;t leave you alone: We offer a
        free email support for all implementation services (ISO 9001, ISO 13485)
        for 6 months after the implementation. This way, you can be sure that
        you have a point of contact for any later queries.
      </div>

      <div>
        <span className="sub font-sans2 text-xl ">
          Set Up and Introduction{" "}
        </span>
        <div className="font-sans text-xl ">
          As part of the establishment and introduction of your customised
          quality management system, aligned with the specific requirements and
          goals of your company, we initiate a series of targeted actions
        </div>

        <span className="sub font-sans2 text-xl">GAP Analysis </span>
        <div className="font-sans text-xl">
          We kick-off your project with a comprehensive GAP analysis. This helps
          us to identify and rectify any discrepancies between your
          company&aspos;s current processes and the requirements of DIN EN ISO
          9001.
        </div>

        <span className="sub font-sans2 text-xl">Employee Coaching</span>
        <div className="font-sans text-xl">
          We coach your employees on DIN EN ISO 9001, ensuring that everyone
          understands the importance and benefits of an effective quality
          management system.
        </div>

        <span className="sub font-sans2 text-xl">
          Creation of QM Documentation and Documentation Structure
        </span>
        <div className="font-sans text-xl">
          Our consultants take over the creation of the complete QM
          documentation, ensuring that your documents always meet the latest
          standards and best practices. In addition, we assist you in setting up
          a QM documentation structure according to DIN EN ISO 9001, based on
          the specific requirements and processes of your company.
        </div>

        <span className="sub font-sans2 text-xl">
          Customisable Quality Standards
        </span>
        <div className="font-sans text-xl">
          We understand that the requirements of companies can vary depending on
          size and objectives. Therefore, we offer customizable quality
          standards. For companies looking for a fast and efficient solution
          that meets all basic needs, we offer a &aspos;Basic&aspos; standard.
          On the other hand, if your company is looking for a deep, highly
          professional approach aiming for the implementation of maximum
          quality, we offer a &aspos;Premium&aspos; standard. Both approaches
          are designed to optimize and improve your quality management process,
          taking into account different depths and budget requirements.
        </div>

        <span className="sub font-sans2 text-xl">
          Project Leadership until Certification
        </span>
        <div className="font-sans text-xl">
          Throughout the entire process, we take over the project management and
          ensure a smooth process up to the successful certification.
        </div>

        <span className="sub font-sans2 text-xl">
          Support After Introduction
        </span>
        <div className="font-sans text-xl">
          But our commitment to your quality does not end with certification.
          Our &rdquo;All-In-One Package&rdquo; also includes 6 months of support
          after the introduction of your quality management system to ensure
          that your company extracts the full potential from its QM system.
        </div>
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div className="p-10 pt-0">
      <div className="para font-sans text-xl pt-3">
        Unlock the full potential of your quality management system with our
        first-class care and optimization service. We bring valuable practical
        experience from various industries to elevate your existing QM system to
        a new level of efficiency and transparency. We understand that every
        company is unique. Therefore, we offer a flexible approach tailored
        specifically to your particular needs and goals. Whether you want a
        complete redesign of your QM system, an optimization of specific areas,
        or a revision of individual processes, we are ready to provide you with
        a custom solution that supports your company on its path to excellence.
        With us by your side, you can be confident that your QM system not only
        meets the standards but also exceeds them. Increase your productivity,
        improve your workflows, and let your business operate more efficiently
        than ever before with our support.
      </div>
    </div>
  );
};

const Remote = () => {
  return (
    <div className="p-10 pt-0">
      <div className="para font-sans text-xl pt-3">
        Overcome boundaries and meet challenges with our top-tier Remote Audit
        Service. With a keen eye for details and an unwavering commitment to
        quality, we offer thorough internal audits in compliance with ISO 19011.
        Our expertise spans a range of sectors, including mechanical
        engineering, manufacturing, the service industry, and the automotive
        industry. We conduct in-depth conformity checks with ISO 9001 and ISO
        13485 to ensure that your business processes not only meet the highest
        standards, but continuously exceed them. As part of our service, we
        offer you the use of a GoPro camera for professional video
        communication. This allows us to carry out comprehensive and detailed
        inspections of your processes and systems, regardless of your location
        in the world. With our international orientation, we are able to meet
        the specific needs of companies worldwide while maintaining our high
        quality standards. Let us help you make compliance one of your strongest
        competitive advantages.
      </div>
    </div>
  );
};

const IAudit = () => {
  return (
    <div className="p-10 pt-0">
      <div className="para font-sans text-xl pt-3">
        Discover a new dimension of operational efficiency with our internal
        audit services. Our specialists bring an unmatched mix of expertise and
        experience to thoroughly examine your business model and uncover
        potential vulnerabilities. Our focus is on helping you achieve
        operational excellence. For this, we use proven audit methods. Our
        experts scrutinize every detail of your processes and systems to ensure
        they are optimized and running efficiently. Through our comprehensive
        analysis, we can point out potential risks before they become real
        threats. We offer you concrete solutions tailored to your business to
        minimize these risks while simultaneously improving your business
        processes. Our goal is to help you embark on a consistent path of
        continuous improvement. Invest in our internal audit services and find
        out how you can take your business performance to the next level.
      </div>
    </div>
  );
};

const Raudit = () => {
  return (
    <div className="p-10 pt-0">
      Overcome boundaries and meet challenges with our top-tier Remote Audit
      Service. With a keen eye for details and an unwavering commitment to
      quality, we offer thorough internal audits in compliance with ISO 19011.
      Our expertise spans a range of sectors, including mechanical engineering,
      manufacturing, the service industry, and the automotive industry. We
      conduct in-depth conformity checks with ISO 9001 and ISO 13485 to ensure
      that your business processes not only meet the highest standards, but
      continuously exceed them. As part of our service, we offer you the use of
      a GoPro camera for professional video communication. This allows us to
      carry out comprehensive and detailed inspections of your processes and
      systems, regardless of your location in the world. With our international
      orientation, we are able to meet the specific needs of companies worldwide
      while maintaining our high quality standards. Let us help you make
      compliance one of your strongest competitive advantages.
    </div>
  );
};

const QMR = () => {
  return (
    <div className="p-10 pt-0">
      <div className="para font-sans text-xl pt-3">
        Ensure your company&apos;s quality with our External Quality Management
        Representative (QMR) service. Especially for smaller companies or those
        in a transitional phase, having their own QMR often represents a too
        high investment. Here we provide a solution. We have extensive knowledge
        and years of experience in various industries and are at your side to
        ensure and optimize the quality of your products, processes, and
        services. Our main concern as your External QMR is the constant
        improvement and maintenance of quality at the highest level. We use
        proven methods and rely on strategies individually tailored to your
        company. We support you in developing and implementing quality
        management systems and processes that meet your specific requirements.
        We ensure compliance with all relevant standards and guidelines and make
        sure that you are optimally prepared for external audits. As your
        External QMR, we also take over the training and education of your
        employees in terms of quality awareness and dealing with QM systems. Our
        goal is to anchor a culture of quality in your company that leads to
        sustainable growth and success. Invest in our External Quality
        Management Representative service and elevate the quality of your
        company to the next level. Let us work together to find a high-quality
        and cost-effective solution for your needs.
      </div>
    </div>
  );
};
