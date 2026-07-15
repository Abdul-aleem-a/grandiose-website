"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";
import Link from "next/link";
import servicesBg from "../../public/sofa.jpg";
import Image from "next/image";

function page() {
  const testimonials = [
    {
      quote:
        "We completed our 3BHK full home interiors at L&T Raintree Boulevard with Grandiose and we are extremely happy with the way the project was executed. Early Days: Before the start of the procession of the project, we started looking for the best interior team who can execute it in very professional way without compromising on the quality and timely delivery. Mr Noor & his team were very much patient in hearing to the very minute details of the requirements which we had slated. Based on the same, by accommodating all our requests, the initial quote was provided. Finance: I truly appreciate his attitude in explaining each and every line item of the quote from the costing perspective. Secondly, during the course of the projects there were few changes which we had made based on my request and he very honestly made and note of the same and ensures the payment requested was deducting those changes. Design: He took us multiple times to the experience centres to showcase on the kind of products, features and functionalities that are currently available. It helped us a lot in understanding better and helped in further fine tuning the design. Secondly, he & his team suggested few changes which we felt was very practical and was getting aligned to our theme as well as saving the space. When we were doing the 2D, Noor ensured that the cost was kept intact based on the cost agreed and he used to highlight wherever it was adding and that was because of the additions that we had requested. A special call out to his team member Asviya who was very patient in hearing to us whole throughout the time and secondly on the design of the living room wallpaper. Implementation: I really appreciate the quality of the implementation team and his site supervisor Saddam who was very professional. Noor made sure that the quality of the materials etc were used as per the agreement we had made. During the course of the implementation, I used to visit the site very frequently. I used to request for certain changes which were not in the original design. Noor used to patiently hear to those and used to get the same implemented. Secondly, for any corrections I used to request / for any mistakes had happened, Noor & Saddam used to make sure that those were getting addressed ASAP. Handover & Support: The entire project was handed over in a very professional way. Moreover, the service of Noor is truly exceptional. After we moving in, for any issues he used to promptly send his team to address those and made sure everything is intact Bottom of my heart, once again Thanking Grandiose Team for their professional work, attitude, honesty & commitment. All the very best team for your future projects. We strongly recommend Grandiose to anyone planning a full home interiors.",
      author: "Rajesh Janardanan",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example1", // Replace with actual Google review link
    },
    {
      quote:
        "We recently completed the interiors for our 4BHK at L&T Raintree Boulevard with The Grandiose, and the experience exceeded our expectations at every stage. From the very first consultation, Noor and the team demonstrated a strong command of material selection — guiding us through finishes, laminates, hardware, and fabrics with clarity and genuine expertise. They helped us make informed choices that balanced aesthetics, durability, and budget without ever feeling rushed or oversold. The design process was collaborative and thoughtful. Every room was treated with individual attention, and the team was receptive to our inputs while bringing creative ideas of their own. The final layouts and colour palettes felt cohesive across the entire home — something that can be hard to achieve in a large 4BHK. Execution quality was outstanding. The carpentry, finishing, and installation work reflected a high level of craftsmanship, with clean joinery, precise fits, and consistent attention to detail. The site was kept tidy throughout, and timelines were largely adhered to. What truly set The Grandiose apart was their post-completion support. Noor remained accessible even weeks after handover, ensuring minor snags were attended to promptly without follow-up reminders — something we genuinely did not expect but deeply appreciated. Highly recommend The Grandiose to anyone looking to do up a home. A trustworthy, skilled, and professional team!",
      author: "Ashwini Patkur",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example2", // Replace with actual Google review link
    },
    {
      quote:
        "We recently got our home interiors done by Grandiose, and working with Noor and his team has been an absolutely wonderful experience. From the very beginning, Noor understood our vision perfectly and transformed our ideas into a beautiful reality. What truly stood out was the attention to detail, color coordination, and the neat finishing across all spaces. The team was extremely professional, patient, and supportive throughout the process. They ensured everything was completed on time without compromising on quality. A big appreciation to Noor and the entire Grandiose team for their dedication and hard work. Highly recommended to anyone looking for elegant, modern, and hassle-free interior solutions!",
      author: "Priyanka Tickoo",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example3", // Replace with actual Google review link
    },
    {
      quote:
        "Noor handled the interior work for our first home. The finishing of the carpentry is excellent, and he executed the designs we shared exactly as expected. We did face a few issues related to plumbing and electrical work, but Noor was responsive and addressed them promptly. Most fixes were completed on time. Overall, we are happy and satisfied with his work and professionalism.",
      author: "Shiksha Garkoti",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "We recently completed our 4BHK full home interiors in Sahakar Nagar, Bangalore, with Grandiose Interiors, and we are extremely happy with the outcome. From design conceptualization to final execution, they provided truly end-to-end interior solutions. If you are looking for reliable home interiors in Bangalore, especially a team that takes ownership of everything from modular kitchen to wardrobes and detailed finishing, they are a strong choice. The design team patiently understood our requirements, lifestyle needs, and preferences. Their suggestions were practical, aesthetic, and well-aligned with the space. The execution team was equally efficient, the quality of materials, finishing, and detailing across the house is excellent. Our modular kitchen is executed beautifully with smart storage and premium finish. What stood out most was their professional interior team and seamless coordination between designers, site supervisors, and vendors. Communication was transparent throughout the project, timelines were clearly shared, and they ensured on-time project delivery without compromising on quality. Overall, we are extremely satisfied with the entire experience. Among the many interior designers in Bangalore, Grandiose Interiors stands out for professionalism, execution quality, and accountability. Even post handover, their support has been prompt and reliable. We would confidently recommend them to anyone planning full home interiors or even villa interiors in Bangalore. It has been a smooth and rewarding experience from start to finish.",
      author: "Neha mortale",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "We are very happy with the design and execution done by Noor and his team. They were very patient while dealing with multiple ideas and changes we wanted in the design phase. Suggested what is the best option based their experience. Execution has been seamless with Noor being the single point of contact. The fit and finish is excellent and every guest appreciated the work. Noor and his team have attended to minor issues noticed once we moved in promptly.",
      author: "R B Reddy",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "We are extremely happy and grateful to have been involved with Grandiose right from the beginning of our home journey. A special mention to Noor, who has been a guiding light since the planning phase—especially with the electrical points. He took the time to truly listen, understand our taste and preferences, and then patiently guided us with suggestions that were both practical and aesthetically aligned with our vision. His approach reflects deep customer empathy and a genuine passion for delivering the best. Our experience with him has been enriching, delightful, and thoroughly satisfying. Most importantly, the project was delivered on time, without compromising on quality. Thank you, Noor and Grandiose, for turning our dream into a beautiful reality!",
      author: "Mithun Bahadur",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Noor - I wanted to take a moment to express my utmost satisfaction with your interior design company - Grandiose. From start to finish, the experience has been exceptional. First and foremost, I commend your team specially Asfiya for her dedication on this project with number of 3D iterations. Despite the complexities of our project, everything was handled promptly and efficiently. Moreover, the level of your patience demonstrated throughout the process was truly commendable. Your willingness to accommodate numerous iterations of 3D designs until we achieved complete satisfaction speaks volumes about your commitment to customer service. I was particularly impressed by how you managed to stay within our budget without compromising on quality. The economic approach coupled with the use of high-quality materials ensured that our vision was realised without breaking the bank:) Furthermore, every interaction with your team was met with utmost professionalism and politeness. It was a pleasure to work with such a courteous and respectful group of individuals. Lastly, I must commend your team's exceptional teamwork, which was evident in the flawless execution of the project. From conception to completion, every detail was handled with care and precision. Overall, I very happy with the outcome. Thank you for your dedication, expertise, and unwavering commitment to excellence. I would highly recommend your services to anyone in need of top-notch interior design solutions.",
      author: "Reshma Parveen",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "We were looking for interior work for our home and approached Mr Noor. He is a very friendly and kind person and customises the design as per customers' choice and requirements. Additionally, he would also suggest good design ideas. His immense knowledge with respect to interior design is mindblowing. We had no hassles and the project was done at a quick pace. We also got to view a glimpse of processing of woodwork at the factory. Mr. Noor was available for a quick chat and clarified any doubts immediately on a call . His entire team was helpful. Thanks a lot The Grandiose team for the impeccable work.",
      author: "Janakikanth Ravi",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Noor is quite professional and competitive in terms providing the timely delivery and agreed quality. As we were not in town during the work, he was always approachable and being transparent about the progress of the work. It has been a flawless experience for us where we got the basic interior done without any hassles and delays.",
      author: "Deepak Sikri",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Overall It was a wonderful experience dealing with Noor, really grateful for the services provided by The Grandiose, highly recommend to all the customers looking for their dream home interiors…...",
      author: "Naveen pareek",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Absolutely loved the interior, The attention to detail and finish is really good. The little details and cool designs make it cosy and welcoming place.",
      author: "Nishi Agrawal",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Overall, excellent work from The Grandiose. We sent all the designs we had in mind to Mr. Noor and he implemented them all upto the mark. He understood our requirements and delivered well. Will recommend Grandiose to everyone for interior work.",
      author: "PAYEL DAS",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "A quality work was delivered at an affordable price on time . Highly recommended for home interiors. Thank you The Grandiose !!!",
      author: "GAURAV KUMAR",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "I highly recommend the Grandiose interior design company. They did an excellent job, they used high quality material and the final product came out much better than what they showed in the design. Noor is the contact whio did the interior for our apartment and he was very responsive and explained through the whole process. Their prices are very reasonable as well. I'm very happy with them and with the quality of the work.",
      author: "Srikanth Madugundi",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "One word AWESOME ..!! Mr. Noor Alam the founder and the head of The Grandiose is an instrumental in bringing my thoughts to live. My home looks stunning with his ability of work. Mr.Noor gave us plenty of options to explore and designed our home as if, one of his own. I am so satisfied with his work that I’ll always recommend The Grandiose as the top most interior designing company for all your home needs. I will always vouch for The Grandiose against any interior designing firms. Mr. Noor is transparent with all his work and all the transactions you make. There’s not a single Penny extra charged to you once the design is freezed until the end of the work. He is just a call and a text away, he’ll clear all your doubts and confusion You bring it to him. Anything that you don’t like he’ll ensure you’re satisfied with his work.Top notch quality of work with budget friendly quotes. Extremely professional in dealing with clients. No complaints only accolades and Kudos to Mr. Noor and his team. I wish The Grandiose grows ten folds.",
      author: "Gafur Mohammed",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Good quality of work at affordable pricing👍🏻😊I totally recommend them😊",
      author: "Rohit Tipshetti",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Excellent execution and online completion of entire project with part payment facilities. Satisfied with the service.",
      author: "Ashutosh Mitra",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "We got our interiors done from them which includes TV cabinet, false ceiling, hall partition and cupboards. Noor who is the head of Grandiose, first met with us to understand our likes and dislikes before starting the project. Based on our discussion the designs he provided were liked by us. Even the finish we got was exactly same as the design. They were very transparent about the materials they are gonna use and the quality of materials is pretty good which has been used.",
      author: "Ravi kumar",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Very good professional people, timely delivery, good and neat work",
      author: "Kapil Kumar",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Mr Noor, has always been responsive on time and great quality has always been delivered as promised.",
      author: "Bhakti Bhosale",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
    {
      quote:
        "Noor has a hold on his craftsmanship and have a positive attitude that brings out creativity in his work His attention to detail is commendable and his finishing reflects the same.",
      author: "Aritra Desarkar",
      rating: 5,
      // reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
  ];

  return (
    <div>
      {/* TESTIMONIALS */}

      <section className="md: px-6 md:px-10 bg-[#051711]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <section className="relative h-[52vh] min-h-[380px] overflow-hidden flex items-center justify-center mb-5">
            {/* Background image with Next.js Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={servicesBg}
                alt="Services hero"
                fill
                className="object-cover object-center scale-105 opacity-30 transition-transform duration-700 hover:scale-110"
                priority
                sizes="100vw"
                quality={90}
              />
            </div>
            {/* Layered overlays with royal green */}
            <div className="absolute inset-0 bg-[#051711]/90" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#051711]/30 via-[#051711]/70 to-[#051711]" />

            {/* CENTER TEXT */}
            <div className="relative z-10 text-center px-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] tracking-[0.55em] uppercase text-[#D4AF37] mb-4 font-sans font-medium"
              >
                The Grandiose · Bangalore
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 60 }}
                className="gradient-heading text-4xl md:text-5xl leading-[1.1]"
              >
                Our Clients Review
              </motion.h1>

              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="flex items-center justify-center gap-2 mt-6 text-[11px] tracking-[0.15em] uppercase"
              >
                <Link
                  href="/"
                  className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Home
                </Link>
                <ChevronRight size={12} className="text-[#D4AF37]/50" />
                <span className="text-[#D4AF37]">Reviews</span>
              </motion.div>
            </div>
          </section>

          {/* Testimonials Grid */}

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 md:p-10 bg-[#051711] rounded-sm border border-golden/20 hover:border-golden/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Gold top bar */}

                <div className="absolute top-0 left-0 h-[3px] w-0 bg-golden group-hover:w-full transition-all duration-500" />

                {/* Quote icon */}

                <Quote size={40} strokeWidth={0.8} className="text-[#D4AF37]" />

                <br />

                {/* Stars */}

                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="fill-golden text-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Quote */}

                <p className="font-serif text-base md:text-lg italic text-white/80 leading-relaxed mb-8">
                  "{t.quote}"
                </p>

                {/* Author & Google Review Link */}

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center"></div>

                    <div>
                      <p className="text-[#D4AF37] text-lg md:text-xl font-semibold">
                        {t.author}
                      </p>
                    </div>
                  </div>

                  {/* Google Review Link Button */}
                  <a className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-golden/30 rounded-lg transition-all duration-300 group/link">
                    {/* Google Icon */}
                    <svg
                      className="w-4 h-4 text-golden"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="text-[15px] tracking-wide text-white/70 group-hover/link:text-golden transition-colors">
                      Source
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
