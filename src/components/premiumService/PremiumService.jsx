import ServiceCard from '../serviceCard/ServiceCard';
function PremiumServices() {
  const R = (
    <>
      SkinPen<sup>®</sup> Microneedling
    </>
  );
  return (
    <>
      <section className="featured-services">
        <div className="featured-services-flex">
          <ServiceCard
            id="#"
            title="Neuromodulators"
            goal="Prevent & Smooth Wrinkles"
            description="Gently smooth fine lines and relax facial tension with neuromodulator treatments like Botox, Dysport, and more; designed to enhance your natural beauty, and restore a calm, refreshed, youthful appearance."
          />
          <ServiceCard
            id="#"
            title={R}
            goal="Restore smooth, radiant skin"
            description="Gently rejuvenate your skin by stimulating collagen, improving texture, softening fine lines, and restoring a healthy, radiant glow."
          />
          <ServiceCard
            id="#"
            title="PRP/PRF injections"
            goal="Stimulate healing and renewal"
            description="Revitalize your skin using your body’s own growth factors to enhance texture, boost collagen, and promote natural healing from within."
          />
          <ServiceCard
            id="#"
            title="BioFiller"
            goal="Restore volume naturally"
            description="A regenerative filler made from your own blood to restore lost volume, smooth fine lines, and support collagen production for natural, refreshed results."
          />
          <ServiceCard
            id="#"
            title="Vitamin Therapy"
            goal="Replenish, energize, and restore"
            description="Deliver essential vitamins and nutrients directly into your bloodstream to boost energy, strengthen immunity, and support overall wellness."
          />
          <ServiceCard
            id="#"
            title="Weight Loss Injections"
            goal="Support healthy, sustainable weight loss"
            description="GLP-1 injections help control appetite and improve fullness by mimicking natural hormones—an effective, science-backed option for weight management."
          />
        </div>
      </section>
    </>
  );
}

export default PremiumServices;
