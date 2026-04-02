// ================================
// Client Logos Component - Analogics Website
// ================================

import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ClientLogos.css';

const clients = [
  { name: 'APEPDCL', logo: '/images/apepdcl-logo.png' },
  { name: 'APSRTC', logo: '/images/apsrtc-logo.png' },
  { name: 'BBMP', logo: '/images/bbmp-logo.png' },
  { name: 'BESCOM', logo: '/images/bescom-logo.png' },
  { name: 'BHEL', logo: '/images/bhel-logo.png' },
  { name: 'BSES', logo: '/images/bses-logo.png' },
  { name: 'C.R.I. Pumps', logo: '/images/cri-pumps-logo.png' },
  { name: 'Coromandel', logo: '/images/coronamandal-logo.png' },
  { name: 'CSEC Mysore', logo: '/images/csec-mysore-logo.png' },
  { name: 'DAE', logo: '/images/dae-logo.png' },
  { name: 'DVVNL', logo: '/images/dvvnl-logo.png' },
  { name: 'E/D Puducherry', logo: '/images/ed-puducherry-logo.png' },
  { name: 'ECIL', logo: '/images/ecil-logo.png' },
  { name: 'Genus', logo: '/images/genus-logo.png' },
  { name: 'GESCOM', logo: '/images/gescom-logo.png' },
  { name: 'GHMC', logo: '/images/ghmc-logo.png' },
  { name: 'Government of Tamil Nadu', logo: '/images/tn-govt-logo.png' },
  { name: 'GSRTC', logo: '/images/gsrtc-logo.png' },
  { name: 'HCL', logo: '/images/hcl-logo.png' },
  { name: 'HESCOM', logo: '/images/hescom-logo.png' },
  { name: 'IFFCO', logo: '/images/iffco-logo.png' },
  { name: 'Infosys', logo: '/images/infosys-logo.png' },
  { name: 'IPPB', logo: '/images/ippb-logo.png' },
  { name: 'ITR DRDO', logo: '/images/itr-drdo-logo.png' },
  { name: 'Karnataka Vikas Grameena Bank', logo: '/images/kvgb-logo.png' },
  { name: 'KRIBHCO', logo: '/images/kribhco-logo.png' },
  { name: 'Larsen & Toubro', logo: '/images/larsen-toubro-logo.png' },
  { name: 'MESCOM', logo: '/images/mescom-logo.png' },
  { name: 'MSEDCL', logo: '/images/msedcl-logo.png' },
  { name: 'Nagar Nigam Jaipur', logo: '/images/nnj-logo.png' },
  { name: 'National Fertilizers Limited', logo: '/images/nfl-logo.png' },
  { name: 'Nepal Electricity Authority', logo: '/images/nepal-electricity-authority-logo.png' },
  { name: 'NHPC', logo: '/images/nhpc-logo.png' },
  { name: 'Power Grid (PGCIL)', logo: '/images/powergrid-logo.png' },
  { name: 'Punjab & Sind Bank', logo: '/images/punjab-sind-bank-logo.png' },
  { name: 'PVVNL', logo: '/images/pvvnl-logo.png' },
  { name: 'Rashtriya Chemicals', logo: '/images/rcfl.png' },
  { name: 'REC', logo: '/images/rec.png' },
  { name: 'REIL', logo: '/images/reil.png' },
  { name: 'Reliance', logo: '/images/reliance.png' },
  { name: 'School Education Department', logo: '/images/sed-logo.png' },
  { name: 'Secure', logo: '/images/secure.png' },
  { name: 'TGSPDCL', logo: '/images/spdcl-tg-logo.png' },
  { name: 'Syndicate Bank', logo: '/images/syndicate-bank-logo.png' },
  { name: 'Tamil Nadu Electricity Board', logo: '/images/tneb-logo.png' },
  { name: 'Tata Power', logo: '/images/tata-power-logo.png' },
  { name: 'TCS', logo: '/images/tcs-logo.png' },
  { name: 'Torrent Power', logo: '/images/torrent-power-logo.png' },
  { name: 'TGRTC', logo: '/images/tsrtc-logo.png' },
  { name: 'TGNPDCL', logo: '/images/tgnpdcl-logo.png' },
  { name: 'TSTS', logo: '/images/tsts-logo.png' },
  { name: 'WBSEDCL', logo: '/images/wbsedcl-logo.png' },
  { name: 'Wipro', logo: '/images/wipro-logo.png' }
];

const ClientLogos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackX = useMotionValue(0);
  const animationRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    // Calculate track width for pixel-based animation
    const calculateWidth = () => {
      if (trackRef.current) {
        const width = trackRef.current.scrollWidth / 2; // Half width since we duplicate
        setTrackWidth(width);
      }
    };

    calculateWidth();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateWidth);
    
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  useEffect(() => {
    if (trackWidth === 0) return;

    // Use pixel-based animation for consistent speed
    const animation = animate(trackX, -trackWidth, {
      duration: trackWidth / 60, // Consistent speed: 30 pixels per second
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop'
    });

    animationRef.current = animation;

    return () => animation.stop();
  }, [trackX, trackWidth]);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.play();
  };

  return (
    <section className="clients section">
      <div className="container">
        <div className="clients__header">
          <motion.h2 
            className="clients__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by World's Best Companies
          </motion.h2>
          <motion.p
            className="clients__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            ALL OUR CLIENTS
          </motion.p>
          <motion.button
            className="clients__view-all"
            onClick={() => setIsModalOpen(true)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Clients
          </motion.button>
        </div>

        {/* Single Infinite Scroll Row */}
        <div className="clients__slider">
          <motion.div 
            ref={trackRef}
            className="clients__track"
            style={{ x: trackX }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div 
                key={index} 
                className="clients__item"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="clients__logo">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    onError={(e) => {
                      const item = e.target.closest('.clients__item');
                      if (item) {
                        item.style.display = 'none';
                      }
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Full Clients Modal */}
      {isModalOpen && (
        <motion.div 
          className="clients-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div 
            className="clients-modal__content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="clients-modal__close"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <h3 className="clients-modal__title">All Our Clients</h3>
            <p className="clients-modal__subtitle">Trusted by World's Best Companies</p>
            <div className="clients-modal__list">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="clients-modal__item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ x: 10, backgroundColor: '#f0f7ff' }}
                >
                  <span className="clients-modal__bullet">•</span>
                  <p className="clients-modal__name">{client.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ClientLogos;
