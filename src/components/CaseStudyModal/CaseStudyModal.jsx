// ================================
// Case Study Modal Component
// ================================

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronRight } from 'react-icons/fa';
import './CaseStudyModal.css';

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  if (!caseStudy) return null;

  const { title, description, logo, fullContent } = caseStudy;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="case-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal */}
          <motion.div
            className="case-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="case-modal__header">
              <div className="case-modal__header-content">
                <span className="case-modal__label">CASE STUDY</span>
                <h2 className="case-modal__title">{title}</h2>
                <p className="case-modal__subtitle">{description}</p>
              </div>
              <button className="case-modal__close" onClick={onClose}>
                <FaTimes />
                <span>CLOSE</span>
              </button>
            </div>

            {/* Body */}
            <div className="case-modal__body">
              {/* About Section */}
              <section className="case-modal__section">
                <h3 className="case-modal__section-title">About {title}</h3>
                <div className="case-modal__about-content">
                  {logo && (
                    <div className="case-modal__logo">
                      <img src={logo} alt={`${title} logo`} />
                    </div>
                  )}
                  <div>
                    {fullContent?.about?.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Objective Section */}
              <section className="case-modal__section">
                <h3 className="case-modal__section-title">Objective</h3>
                <div className="case-modal__content">
                  {fullContent?.objective?.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </section>

              {/* Solution Section */}
              <section className="case-modal__section">
                <h3 className="case-modal__section-title">Solution</h3>
                <div className="case-modal__content">
                  {fullContent?.solution?.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </section>

              {/* Contact Section - Single Contact */}
              {fullContent?.contact && (
                <section className="case-modal__section">
                  <h3 className="case-modal__section-title">Contact Us</h3>
                  <div className="case-modal__contact">
                    <h4 className="case-modal__contact-name">{fullContent.contact.name}</h4>
                    <ul className="case-modal__contact-list">
                      <li>
                        <FaChevronRight />
                        <span>{fullContent.contact.designation}</span>
                      </li>
                      <li>
                        <FaChevronRight />
                        <span>Ph: {fullContent.contact.phone}</span>
                      </li>
                      <li>
                        <FaChevronRight />
                        <span>{fullContent.contact.email}</span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}

              {/* Contact Section - Multiple Contacts */}
              {fullContent?.contacts && fullContent.contacts.length > 0 && (
                <section className="case-modal__section">
                  <h3 className="case-modal__section-title">Contact Us</h3>
                  <div className="case-modal__contacts-grid">
                    {fullContent.contacts.map((contact, index) => (
                      <div key={index} className="case-modal__contact">
                        <h4 className="case-modal__contact-name">{contact.name}</h4>
                        <ul className="case-modal__contact-list">
                          <li>
                            <FaChevronRight />
                            <span>{contact.designation}</span>
                          </li>
                          <li>
                            <FaChevronRight />
                            <span>Ph: {contact.phone}</span>
                          </li>
                          <li>
                            <FaChevronRight />
                            <span>{contact.email}</span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
