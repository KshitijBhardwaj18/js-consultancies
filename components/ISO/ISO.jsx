import React from "react";
import Drop from "../drop/drop";
import DnsIcon from "@mui/icons-material/Dns";

const ISO = () => {
  return (
    <div className="p-10 flex gap-10 ">
      <div className="left flex-col">
        <h1 className="font-sans2  text-5xl pt-10">ISO Certification <span className="text-white">rkjkv</span></h1>
      </div>

      <div className="right flex-col">
        <Drop text={<Meaning />} head={"Meaning"} />
        <Drop text={<Objective />} head={"Objectives of Certification"} />
        <Drop text={<Process />} head={"Certification Process"} />

        <Drop text={<Norms />} head={"Norms and Standards"} />

        <Drop text={<Support />} head={"Our Support"} />

        <Drop text={<Cost />} head={"Costs and Financing"} />
      </div>
    </div>
  );
};

export default ISO;

const Meaning = () => {
  return (
    <div className="p-10 pt-0">
      <h3 className="sub-heading  font-sans2 text-3xl pt-5 ">Meaning</h3>

      <div className="para font-sans text-xl pt-3">
        The ISO certification is more than just a seal or a certificate – it is
        a globally recognized symbol of quality management, efficiency, and
        trustworthiness. Companies seeking and obtaining such certification not
        only signal to their customers but also to business partners and
        employees that they follow clear, international standards and
        continuously work to improve their processes.
      </div>

      <div className="para font-sans text-xl pt-3">
        ISO standards were developed to assist organizations in optimizing
        business processes, minimizing risks, and effectively utilizing
        opportunities. An ISO-certified company demonstrates its continuous
        commitment to the industry&apos;s highest standards. This not only
        provides a competitive edge but also strengthens trust in the brand and
        company.
      </div>

      <div className="para font-sans text-xl pt-3">
        Certification can also serve as a guide for internal processes,
        providing clear guidelines and best practices. This helps companies use
        their resources efficiently, reduce costs, and ensure consistent product
        or service quality. In a globalized economy, where companies and
        customers have more choices than ever, ISO certification offers a
        reliable method to distinguish companies dedicated to quality and
        safety.
      </div>
    </div>
  );
};

const Objective = () => {
  return (
    <div className="p-10 pt-0">
      <div className="para font-sans text-xl pt-3">
        Certification can also serve as a guide for internal processes,
        providing clear guidelines and best practices. This helps companies use
        their resources efficiently, reduce costs, and ensure consistent product
        or service quality. In a globalized economy, where companies and
        customers have more choices than ever, ISO certification offers a
        reliable method to distinguish companies dedicated to quality and
        safety.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Quality Management: </span>
        One of the core objectives is to ensure and continuously improve the
        quality of products, services, and processes. This should not only meet
        customer expectations but ideally exceed them.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Risk Minimization: </span>
        Certification supports companies in identifying potential risks and
        taking preventive measures to minimize them through clear processes and
        guidelines.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Efficiency Increase: </span>
        Another goal is the optimization of internal workflows and processes,
        enabling companies to use resources more efficiently and reduce costs.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Building Trust: </span>
        The ISO certificate serves as a trust-building measure for customers,
        suppliers, and other business partners, signaling that the company
        operates according to international standards and is committed to
        quality assurance.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Sustainable Development: </span>
        Many ISO standards also cover sustainability aspects, whether in terms
        of environmentally friendly processes, ethical business practices, or
        responsible resource management.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Legal Compliance: </span>
        In some industries, there may be legal or regulatory requirements that
        prescribe or at least promote ISO certification. Compliance with these
        requirements is another key goal of the certification. These objectives
        are significant not only for the company itself but also for its
        stakeholders. An ISO-certified company displays commitment,
        responsibility, and the willingness for constant improvement. f{" "}
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div className="p-10 pt-0">
      <div className="para font-sans text-xl pt-3">
        The ISO certification is more than just a seal or a certificate – it is
        a globally recognized symbol of quality management, efficiency, and
        trustworthiness. Companies seeking and obtaining such certification not
        only signal to their customers but also to business partners and
        employees that they follow clear, international standards and
        continuously work to improve their processes.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Understanding ISO Requirements: </span>
        Before starting the certification process, a company must fully
        understand the specific requirements and standards of the ISO norm it
        aims to achieve.{" "}
      </div>
      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Conducting a Gap Analysis: </span>
        This involves a systematic examination to determine how much the company
        already meets the ISO standard requirements and where there are still
        gaps.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Planning and Implementation: </span>
        Based on the gap analysis results, a plan is created on how to address
        the identified gaps. Implementing this plan is crucial for the ongoing
        certification process.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Legal Compliance: </span>
        In some industries, there may be legal or regulatory requirements that
        prescribe or at least promote ISO certification. Compliance with these
        requirements is another key goal of the certification. These objectives
        are significant not only for the company itself but also for its
        stakeholders. An ISO-certified company displays commitment,
        responsibility, and the willingness for constant improvement. f{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Choosing a Certifier: </span>
        The company selects a recognized certification body accredited for the
        respective ISO standard.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Document Review: </span>
        The certification body reviews the documents provided by the company{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">On-Site Audit: </span>
        Certifiers visit the company to inspect actual workflows and processes.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Report and Outcome: </span>
        After the on-site audit, the certifier produces a report. If
        discrepancies are found, the company must take corrective actions.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Certificate Issuance: </span>
        Once all requirements are met, the ISO certificate is issued.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Re-Certification: </span>A new audit is
        conducted before the certificate expires. Each step in the certification
        process aims to ensure the company&apos;s quality management
        system&apos;s integrity and credibility. It&apos;s a continuous process
        of review and improvement.{" "}
      </div>
    </div>
  );
};

const Norms = () => {
  return (
    <div className="p-10 pt-0">
      <div className="para font-sans text-xl pt-3">
        ISO standards are internationally recognized benchmarks designed to
        assist companies in ensuring quality, efficiency, and customer
        satisfaction. Here are some of the most well-known and widely used ISO
        standards:
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">ISO 9001: </span>The most recognized
        standard related to quality management systems. It sets criteria for
        quality management systems based on several quality management
        principles, including a strong customer focus, top-management
        engagement, a process approach, and continuous improvement.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">ISO 14001: </span>This standard focuses
        on environmental management systems. It provides companies with a
        framework to produce positive environmental impacts and continuously
        enhance their ecological performance.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">ISO 45001: </span>An international
        standard for occupational health and safety management systems. It
        offers companies a structured approach to prevent work-related accidents
        and sickness absences.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">ISO 27001: </span>This standard deals
        with information security management systems, aiding companies in
        securely managing information and reducing data protection risks.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">ISO 22000: </span>A standard for food
        safety management systems, helping companies of all sizes and at every
        food chain stage ensure they produce high-quality food. These are just a
        few examples of the numerous ISO standards. Each standard has specific
        requirements and guidelines depending on the industry and application.
        Following these standards ensures that companies design their processes
        efficiently and effectively and continuously improve.{" "}
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div className="p-10 pt-0">
      <div className="para font-sans text-xl pt-3">
        Successfully obtaining and maintaining an ISO certification requires not
        only a deep understanding of the particular standard but also the
        ability to translate requirements into practice-oriented processes and
        measures. We are here to assist:
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Consultation and Training: </span>
        Our team of experts offers you detailed advice on the right ISO standard
        for your company and trains your staff in specific requirements and best
        practices.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Preparation Support: </span>We assist
        in conducting internal audits, identifying gaps, and developing
        tailor-made action plans.
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Audit Accompaniment: </span>We
        accompany you during the entire certification process, ensuring
        you&apos;re well-prepared for each stage. ISO certification is a
        worthwhile endeavor for any company looking to improve quality, increase
        trust, and distinguish itself in the market. It is not just about
        meeting standards, but it&apos;s about building a culture of continuous
        improvement, and we&apos;re here to support you every step of the way.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        <span className="sub font-sans2">Custom Solutions:</span>
        Every company is unique. We offer tailored solutions designed
        specifically for your unique needs and challenges. Our commitment goes
        beyond mere understanding of standards. Our primary goal is to help you
        fully harness the benefits of certification: improved operational
        processes, increased customer satisfaction, and a competitive edge in
        the market. With our expertise and experience, you are well-equipped to
        successfully navigate the certification process and consistently meet
        the high standards of ISO.
      </div>
    </div>
  );
};

const Cost = () => {
  return (
    <div
      className="p-10 pt-0
    "
    >
      <div className="para font-sans text-xl pt-3">
        Investing in an ISO 9001 Quality Management System (QMS) is a strategic
        decision that can vary from company to company. With us, you receive a
        tailor-made offer, precisely aligned with your specific requirements.{" "}
      </div>

      <div className="para font-sans text-xl pt-3">
        Investing in an ISO 9001 Quality Management System (QMS) is a strategic
        decision that can vary from company to company. With us, you receive a
        tailor-made offer, precisely aligned with your specific requirements.{" "}
      </div>

      <ul className="list">
        <div className="item flex gap-1 mt-3">
          <DnsIcon className="mt-1" />
          <li className="list-item font-sans text-xl  ">Number of employees</li>
        </div>

        <div className="item flex gap-1 mt-1">
          <DnsIcon className="mt-1" />
          <li className="list-item font-sans text-xl  ">
            Exclusion of specific chapters (with development/ without
            development)
          </li>
        </div>

        <div className="item flex gap-1 mt-1">
          <DnsIcon className="mt-1" />
          <li className="list-item font-sans text-xl  ">
            Number of company locations
          </li>
        </div>

        <div className="item flex gap-1 mt-1">
          <DnsIcon className="mt-1" />
          <li className="list-item font-sans text-xl  ">Industry</li>
        </div>

        <div className="item flex gap-1 mt-1">
          <DnsIcon className="mt-1" />
          <li className="list-item font-sans text-xl  ">
            Existing QM documentation
          </li>
        </div>

        <div className="item flex gap-1 mt-1">
          <DnsIcon className="mt-1" />
          <li className="list-item font-sans text-xl  ">
            Presence of a QM manual
          </li>
        </div>
      </ul>

      <div className="container mx-auto p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Industry</th>
              <th className="border px-4 py-2">Details</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Metal Processing</td>
              <td className="border px-4 py-2">
                20 employees, 1 location, Complete introduction of a QMS
                according to ISO 9001 - in the basic version
              </td>
              <td className="border px-4 py-2">Starting from $5500.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Services</td>
              <td className="border px-4 py-2">
                3 employees, 1 location, Complete introduction of a QMS
                according to ISO 9001 - in the basic version
              </td>
              <td className="border px-4 py-2">Starting from $2900.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="para font-sans text-xl pt-3">
        Our approach is aimed at delivering precisely what you need for
        certification - specific to your industry and company size, efficient,
        and tailor-made for your business. This allows you to reduce costs while
        maintaining your business flexibility. We are happy to calculate an
        exact fixed price for you, based on the specific parameters of your
        company. Do not hesitate to contact us.{" "}
      </div>
    </div>
  );
};
