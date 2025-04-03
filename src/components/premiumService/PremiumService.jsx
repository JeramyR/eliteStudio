import ServiceCard from '../serviceCard/ServiceCard';

const R = (
  <>
    SkinPen<sup>®</sup> Microneedling
  </>
);

const services = [
  {
    id: 'botox',
    _id: 'neurotoxins-neuromodulators',
    src: '/images/botox.webp',
    title: 'Neuromodulators - Botox',
    goal: 'Prevent & Smooth Wrinkles',
    description:
      'Gently smooth fine lines and relax facial tension with neuromodulator treatments like Botox, Dysport, and more; designed to enhance your natural beauty, and restore a calm, refreshed, youthful appearance.',
  },
  {
    id: 'skinpen-microneedling',
    _id: 'microneedle',
    src: '/images/micro.webp',
    title: R,
    goal: 'Restore smooth, radiant skin',
    description:
      'Gently rejuvenate your skin by stimulating collagen, improving texture, softening fine lines, and restoring a healthy, radiant glow.',
  },
  {
    id: 'prp-prf-injections',
    _id: 'skin-treatment',
    src: '/images/prp.webp',
    title: 'PRP/PRF injections',
    goal: 'Stimulate healing and renewal',
    description:
      'Revitalize your skin using your body’s own growth factors to enhance texture, boost collagen, and promote natural healing from within.',
  },
  {
    id: 'biofiller',
    _id: 'bio-fill',
    src: '/images/lips.webp',
    title: 'BioFiller',
    goal: 'Restore volume naturally',
    description:
      'A regenerative filler made from your own blood to restore lost volume, smooth fine lines, and support collagen production for natural, refreshed results.',
  },
  {
    id: 'vitamin-therapy',
    _id: 'iv-therapy',
    src: '/images/iv.webp',
    title: 'Vitamin Therapy',
    goal: 'Replenish, energize, and restore',
    description:
      'Deliver essential vitamins and nutrients directly into your bloodstream to boost energy, strengthen immunity, and support overall wellness.',
  },
  {
    id: 'weight-loss-injections',
    _id: 'glp-1',
    src: '/images/weight.webp',
    title: 'Weight Loss Injections',
    goal: 'Support healthy, sustainable weight loss',
    description:
      'GLP-1 injections help control appetite and improve fullness by mimicking natural hormones—an effective, science-backed option for weight management.',
  },
];

function PremiumServices() {
  return (
    <section
      id="skin-treatments"
      className="featured-services"
      aria-label="Overview of skin and wellness treatments offered"
    >
      <div className="featured-services-flex">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            id={`${service.id}`}
            _id={`${service._id}`}
            title={service.title}
            goal={service.goal}
            description={service.description}
            src={service.src}
          />
        ))}
      </div>
    </section>
  );
}

export default PremiumServices;
