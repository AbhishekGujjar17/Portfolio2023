import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItems) => {
        const {
          id,
          img,
          category,
          title,
          description,
          link,
          repositorio,
          stack,
        } = projectItems;
        return (
          <motion.div
            laylout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              {/* <video autoplay>
                <source src={img} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={img} alt="" className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <p className="portfolio__stack">
              <strong>Tech Stack 🧑‍💻: </strong>
              {stack}
            </p>

            {link && (
              <a href={link} target="_blank" className="link">
                See This Live
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>
            )}

            <a
              href={repositorio}
              target="_blank"
              className="link link-repositorio"
            >
              {repositorio ? (
                <div className="view-repositorio">
                  Source Code
                  <FaGithub />
                </div>
              ) : (
                ""
              )}
            </a>

            <img src={shapeTwo} alt="" className="shape c__shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
